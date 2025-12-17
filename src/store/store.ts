import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./reducers/data_reducer";
import { filterReducer } from "./reducers/filter_redeucer";

//main store
const store = configureStore({
  reducer: {
    data: dataReducer,
    filters: filterReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
