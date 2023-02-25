
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import questionsDataSlice from "./slices/questionsDataSlice";
import addFirstChildSlice from "./slices/addFirstChildSlice";
import unitsSlice from "./slices/unitsSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  userSlice,
  questionsDataSlice,
  unitsSlice,
  addFirstChildSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)



// export const store = configureStore({
//   reducer: { userSlice },
//   devTools: process.env.NODE_ENV !== "production",
// });
