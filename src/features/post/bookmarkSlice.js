import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createStandaloneToast } from '@chakra-ui/toast';
import { loginUser, logoutUser } from "features/auth/authSlice";

const toast = createStandaloneToast();

const initialState = {
    isLoading: false,
    bookmarks: [],
}

export const getBookmarkPosts = createAsyncThunk("posts/getBookmarkPosts",
    async (_, { rejectWithValue }) => {
      const token = await localStorage.getItem("token");
      try {
        const {data: { bookmarks }} = await axios.get("/api/users/bookmark", {
            headers: {authorization: token}
        }); 
        return bookmarks;
      } catch (error) {
        return rejectWithValue(error.response.data.errors[0]);
      }
    }
  );
  
  export const addPostInBookmarks = createAsyncThunk("posts/addPostInBookmarks",
    async (postId, { rejectWithValue }) => {
      const token = await localStorage.getItem("token");
      try {
        const {data: { bookmarks }} = await axios.post(`/api/users/bookmark/${postId}`,{}, {
            headers: {authorization: token}
        });
        return bookmarks;
      } catch (error) {
        return rejectWithValue(error.response.data.errors[0]);
      }
    }
  );
  
  export const removePostFromBookmarks = createAsyncThunk("posts/removePostFromBookmarks",
    async (postId, { rejectWithValue }) => {
      const token = await localStorage.getItem("token");
      try {
        const {data: { bookmarks }} = await axios.post(`/api/users/remove-bookmark/${postId}`, {},{
            headers: {authorization: token}
        });
        return bookmarks;
      } catch (error) {
        return rejectWithValue(error.response.data.errors[0]);
      }
    }
  );
  
  const bookmarkSlice = createSlice({
    name: "bookmarks",
    initialState,
    reducers: {},
    extraReducers: {
      [loginUser.fulfilled]: (state, { payload }) => {
        state.bookmarks = payload.foundUser.bookmarks;
      },
      [logoutUser]: (state) => {
        state.bookmarks = [];
      },
      [getBookmarkPosts.pending]: (state) => {
        state.isLoading = true;
      },
      [getBookmarkPosts.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.bookmarks = payload.reverse();
      },
      [getBookmarkPosts.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        toast({
            title: `${state.error}`,
            status: "error",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [addPostInBookmarks.fulfilled]: (state, { payload }) => {
        state.bookmarks = payload.reverse();
        toast({
            title: `Post bookmarked`,
            status: "success",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [addPostInBookmarks.rejected]: (state, { payload }) => {
        state.error = payload;
        toast({
            title: `${state.error}`,
            status: "error",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [removePostFromBookmarks.fulfilled]: (state, { payload }) => {
        state.bookmarks = payload.reverse();
        toast({
            title: `Post removed from bookmarks`,
            status: "info",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [removePostFromBookmarks.rejected]: (state, { payload }) => {
        state.error = payload;
        toast({
            title: `${state.error}`,
            status: "error",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      }
    },
  });
  
  export default bookmarkSlice.reducer;
  