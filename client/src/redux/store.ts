import { combineReducers, configureStore } from '@reduxjs/toolkit';

import labConstructor from './slices/constructorSlice';
import sideMenu from './slices/sideMenuStatusSlice';

const rootReducer = combineReducers({
  labConstructor,
  sideMenu,
});

export const store = configureStore({
  reducer: rootReducer,
});

// export * as authSelectors from './selectors/authSelectors';
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
