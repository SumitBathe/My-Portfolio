import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import storage from "redux-persist/lib/storage"; // Using local storage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  theme: persistReducer(persistConfig, themeReducer),
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
