import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/homepage/shop/shop.component';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({

            id: snapShot.id,
            ...snapShot.data()

          });

        })
      }
      this.props.setCurrentUser(user);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/signin' component={SignInAndUp} />
          <Route path='/shop' component={ShopePage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
