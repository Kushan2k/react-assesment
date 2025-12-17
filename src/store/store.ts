import { configureStore } from "@reduxjs/toolkit";

//main store
const store = configureStore({
  reducer: {},
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
