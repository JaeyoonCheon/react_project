import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { applyMiddleware } from "redux";
import { asyncActions } from "./AsyncMiddleware";

export const SportStoreDataStore = createStore(
  CommonReducer(ShopReducer, CartReducer),
  applyMiddleware(asyncActions)
);
