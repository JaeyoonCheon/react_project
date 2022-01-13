import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
import {
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
} from "../data/CartActionCreators";
import { CartDetails } from "./CartDetails";
import { DataGetter } from "../data/DataGetter";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
};

export const ShopConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return (
        <Switch>
          <Redirect
            from="/shop/products/:category"
            to="/shop/products/:category/1"
            exact={true}
          ></Redirect>
          <Route
            path={"/shop/products/:category/:page"}
            render={(routeProps) => (
              <DataGetter {...this.props} {...routeProps}>
                <Shop {...this.props} {...routeProps}></Shop>
              </DataGetter>
            )}
          ></Route>
          <Route
            path="/shop/cart"
            render={(routeProps) => (
              <CartDetails {...this.props} {...routeProps}></CartDetails>
            )}
          ></Route>
          <Redirect to="/shop/products/all/1"></Redirect>
        </Switch>
      );
    }

    componentDidMount() {
      this.props.loadData(DataTypes.CATEGORIES);
    }
  }
);

export default ShopConnector;
