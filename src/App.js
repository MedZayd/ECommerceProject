// @flow

import {Route, Switch} from "react-router-dom";

import HomePage from "./component/home-page";
import React from "react";
import ShopePage from "./component/shop-page";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopePage} />
      </Switch>
    </div>
  );
}

export default App;
