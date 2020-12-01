import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/homepage/shop/shop.component';

import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component';
import { auth, createUserProfile } from './firebase/firebase.utils';


class App extends React.Component {

  unsubscribeFromAuth = null;
  state = {
    currentUser: null
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        })
      }
      this.setState({ currentUser: user });
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/signin' component={SignInAndUp} />
          <Route path='/shop' component={ShopePage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
