import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/////////
import Home from './pages/Index/Home';

import Card from './pages/Card/Card';
import Search from './pages/Products/Search';
import Products from './pages/Products/Products';
import { WatchedProvider } from './contexts/ProductsWatched';
import { CartProvider } from './contexts/Cart';
import DetailProduct from './pages/Product/DetailProduct';
import Payment from './pages/Payment/Payment';
import Login from './pages/Login/Login';
import Regist from './pages/Regist/Regist';

function App() {
  return (
    <Router>
      <CartProvider>
        <WatchedProvider>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home}>
              </Route>
              <Route path="/login" component={Login}>
              </Route>
              <Route path="/regist" component={Regist}>
              </Route>
              <Route path="/cart" component={Card}>
              </Route>
              <Route path="/product" component={DetailProduct}>
              </Route>
              <Route path="/search" component={Search}>
              </Route>
              <Route path="/payment" component={Payment}>
              </Route>
              <Route path="/category"  component={Products}>
              </Route>
            </Switch>
          </div>
        </WatchedProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
