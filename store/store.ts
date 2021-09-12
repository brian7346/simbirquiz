import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/reducer';
import coursesReducer from './courses/reducer';
import achievementsReducer from './achievements/reducer';
import internsReducer from './interns/reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    courses: coursesReducer,
    achievements: achievementsReducer,
    interns: internsReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
