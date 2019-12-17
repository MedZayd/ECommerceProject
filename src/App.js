// @flow
import "./App.css";
import { Route, Switch } from "react-router-dom";

import React from "react";
import ShopePage from "./component/ShopPage";
import MenuBar from "./component/MenuBar";
import MenuList from "./component/MenuList";
import NotFound from "./component/NotFound";


function App() {
  return (
    <div>
      <MenuBar />
      <div className="contentContainer">
        <div className="content">
          <Switch>
            <Route exact path='/' component={MenuList} />
            <Route exact path='/shop' component={ShopePage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
