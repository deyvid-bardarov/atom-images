import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import rootReducer from "./reducers"

const pReducer = persistReducer({
  key: "root",
  storage
}, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
