
import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./Features/posts/postsSlice";
import commentsSlice from "./Features/comments/commentsSlice";
import topicsSlice from "./Features/navbar/topics/topicsSlice";
import communitiesSlice from "./Features/navbar/communities/communitiesSlice";
import slidersSlice from "./Features/sliders/slidersSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    comments: commentsSlice,
    communities: communitiesSlice,
    topics: topicsSlice,
    slides: slidersSlice
  }
});

export default store;