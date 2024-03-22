import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
