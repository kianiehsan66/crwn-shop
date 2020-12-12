import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shop/shop.component';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component';

import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import CheckOutPage from './pages/checkout/checkout.component';
import { selectShopCollections } from './redux/shop/shop.selector';
import { checkUserSession } from './redux/user/user.actions';


class App extends React.Component {



  componentDidMount() {
    this.props.checkUserSession();

  }
  componentWillUnmount() {

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
  checkUserSession: () => dispatch(checkUserSession())
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectShopCollections
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
