import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/homepage/shop/shop.component';

import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/shop' component={ShopePage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
