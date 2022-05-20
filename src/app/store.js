import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import postReducer from "features/post/postSlice";
import userReducer from "features/profile/userSlice";
import bookmarkReducer from "features/post/bookmarkSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        user: userReducer,
        bookmark: bookmarkReducer
    }
});
