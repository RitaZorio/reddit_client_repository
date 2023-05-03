
import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./Features/posts/postsSlice";
import commentsSlice from "./Features/comments/commentsSlice";
import topicsSlice from "./Features/navbar/topics/topicsSlice";
import communitiesSlice from "./Features/navbar/communities/communitiesSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    comments: commentsSlice,
    communities: communitiesSlice,
    topics: topicsSlice
  }
});

export default store;