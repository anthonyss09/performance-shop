import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import cartSliceReducer from "./features/cart/cartSlice";
import productsSliceReducer from "./features/products/productsSlice";
import authenticationSliceReducer from "./features/authentication/authenticationSlice";
import alertSliceReducer from "./features/alerts/alertsSlice";

export const makeStore = (preLoadedState) => {
  return configureStore({
    reducer: {
      authentication: authenticationSliceReducer,
      cart: cartSliceReducer,
      products: productsSliceReducer,
      alerts: alertSliceReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    preLoadedState,
    middleware: (buildGetDefaultMiddleware) =>
      buildGetDefaultMiddleware().concat(apiSlice.middleware),
  });
};
