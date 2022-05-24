import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createStandaloneToast } from '@chakra-ui/toast';
import { logoutUser } from "features/auth/authSlice";

const toast = createStandaloneToast();

const initialState = {
    posts: [],
    postSortType: "",
    isLoading: false
};

export const getPosts = createAsyncThunk("posts/getPosts",
    async (_, { rejectWithValue }) => {
      try {
        const {data: { posts }} = await axios.get("/api/posts");
        return posts;
      } catch (error) {
        return rejectWithValue(error.response.data.errors[0]);
      }
    }
  );

export const createPost = createAsyncThunk("posts/createPost",
    async (postData, { rejectWithValue }) => {
      const token = await localStorage.getItem("token");
      try {
        const {data: { posts }} = await axios.post("/api/posts", { postData }, {
            headers: {authorization: token}
        });
        return posts;
      } catch (error) {
        return rejectWithValue(error.response.data.errors[0]);
      }
    }
  );

  export const editPost = createAsyncThunk("posts/editPost",
    async (postData, { rejectWithValue }) => {
      const token = await localStorage.getItem("token");
      try {
        const {data: { posts }} = await axios.post(`/api/posts/edit/${postData._id}`, {postData}, {
            headers: {authorization: token}
        });
        return posts;
      } catch (error) {
        return rejectWithValue(error.response.data.errors[0]);
      }
    }
  );
    
  export const deletePost = createAsyncThunk("posts/deletePost",
    async (postId, { rejectWithValue }) => {
      const token = await localStorage.getItem("token");
      try {
        const {data: { posts }} = await axios.delete(`/api/posts/${postId}`, {
            headers: {authorization: token}
        });
        return posts;
      } catch (error) {
        return rejectWithValue(error.response.data.errors[0]);
      }
    }
  );
  
  export const likePost = createAsyncThunk("posts/likePost",
    async (postId, { rejectWithValue }) => {
      const token = await localStorage.getItem("token");
      try {
        const {data: { posts }} = await axios.post(`/api/posts/like/${postId}`,{} ,
          {headers: {authorization: token}}
        );
        return posts;
      } catch (error) {
          return rejectWithValue(error.response.data.errors[0]);
        }
    }
  );
  
  export const disLikePost = createAsyncThunk("posts/disLikePost",
    async (postId, { rejectWithValue }) => {
      const token = await localStorage.getItem("token");
      try {
        const {data: { posts }} = await axios.post(`/api/posts/dislike/${postId}`,{}, {
            headers: {authorization: token}
        });
        return posts;
      } catch (error) {
          return rejectWithValue(error.response.data.errors[0]);
        }
      }
  );
  
  export const commentOnPost = createAsyncThunk("posts/commentOnPost",
    async ({ postId, commentData }, { rejectWithValue }) => {
      const token = await localStorage.getItem("token");
      try {
        const {data: { comments }} = await axios.post(`/api/comments/add/${postId}`, {commentData}, {
            headers: {authorization: token}
        });
        return { comments, postId };
      } catch (error) {
        return rejectWithValue(error.response.data.errors[0]);
      }
    }
  );
  
  const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
      [logoutUser]: (state) => {
        state.posts = [];
      },
      [getPosts.pending]: (state) => {
        state.isLoading = true;
      },
      [getPosts.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.posts = payload.reverse();
      },
      [getPosts.rejected]: (state, { payload }) => {
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
      [createPost.pending]: (state) => {
        state.isLoading = true;
      },
      [createPost.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.posts = payload.reverse();
        toast({
            title: `Post created`,
            status: "success",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [createPost.rejected]: (state, { payload }) => {
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
      [editPost.pending]: (state) => {
        state.isLoading = true;
      },
      [editPost.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.posts = payload.reverse();
        toast({
            title: `Post edited`,
            status: "success",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [editPost.rejected]: (state, { payload }) => {
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
      [deletePost.fulfilled]: (state, { payload }) => {
        state.posts = payload.reverse();
        toast({
            title: `Post deleted`,
            status: "info",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [deletePost.rejected]: (state, { payload }) => {
        state.error = payload;
        toast({
            title: `${state.error}`,
            status: "error",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [likePost.fulfilled]: (state, { payload }) => {
        state.posts = payload.reverse();
      },
      [likePost.rejected]: (state, { payload }) => {
        state.error = payload;
        toast({
            title: `${state.error}`,
            status: "error",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [disLikePost.fulfilled]: (state, { payload }) => {
        state.posts = payload.reverse();
      },
      [disLikePost.rejected]: (state, { payload }) => {
        state.error = payload;
        toast({
            title: `${state.error}`,
            status: "error",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [commentOnPost.fulfilled]: (state, { payload }) => {
        const postIndex = state.posts.findIndex(
          (post) => post._id === payload.postId
        );
        state.posts[postIndex].comments = payload.comments;
      },[commentOnPost.rejected]: (state, { payload }) => {
        state.error = payload;
        toast({
          title: `${state.error}`,
          status: "error",
          position: "top-right",
          isClosable: true,
          duration: 3000
        })
      },
    },
  });
  
  export default postSlice.reducer;
  