import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shop/shop.component';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import CheckOutPage from './pages/checkout/checkout.component';


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
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndUp />} />
          <Route path='/shop' component={ShopePage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
