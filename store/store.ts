import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/reducer';
import coursesReducer from './courses/reducer';
import achievmentsReducer from './achievments/reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    courses: coursesReducer,
    achievments: achievmentsReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch