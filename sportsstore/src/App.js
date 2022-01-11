import React, { Component } from "react";
import { SportStoreDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ShopConnecter } from "./shop/ShopConnector";

export default class App extends Component {
  render() {
    return (
      <Provider store={SportStoreDataStore}>
        <Router>
          <Switch>
            <Route path="/shop" component={ShopConnecter}></Route>
            <Redirect to="/shop"></Redirect>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
