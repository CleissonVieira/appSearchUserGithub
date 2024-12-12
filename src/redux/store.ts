import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import repositoriesReducer from './slices/repositoriesSlice';
import repositoryReducer from './slices/repositorySlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    repositories: repositoriesReducer,
    repository: repositoryReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
