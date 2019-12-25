// @flow
import "./App.css";
import { Route, Switch } from "react-router-dom";

import React from "react";
import ShopePage from "./component/ShopPage";
import MenuBar from "./component/MenuBar";
import MenuList from "./component/MenuList";
import NotFound from "./component/NotFound";
import Authentication from "./component/Authentication";
import firebase, { auth } from "./firebase/firebase.utils";

type State = {
  currentUser: firebase.User
};

const DEFAULT_STATE = {
  currentUser: null
};

class App extends React.Component<void, State> {
  state = DEFAULT_STATE;

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log("user", user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <MenuBar currentUser={this.state.currentUser} />
        <div className="contentContainer">
          <div className="content">
            <Switch>
              <Route exact path="/" component={MenuList} />
              <Route exact path="/shop" component={ShopePage} />
              <Route exact path="/signIn" component={Authentication} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
