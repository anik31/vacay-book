import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createStandaloneToast } from '@chakra-ui/toast';
import { logoutUser } from "features/auth/authSlice";

const toast = createStandaloneToast();

const initialState = {
  allUsers: [],
  isLoading: false
};

const token = localStorage.getItem("token");

export const getAllUser = createAsyncThunk("post/getAllUsers", async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get("/api/users");
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.errors[0]);
  }
});

export const editUserInfo = createAsyncThunk(
  "auth/editUserInfo",
  async (userData, { rejectWithValue }) => {
    try {
      const {data: { user }} = await axios.post("/api/users/edit", { userData }, 
      {headers: {authorization: token}});
      return user;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

export const followUser = createAsyncThunk("profile/followUser",
  async (followUserId, { rejectWithValue }) => {
    try {
      const {data: {followUser, user}} = await 
      axios.post(`/api/users/follow/${followUserId}`, {},{headers: {authorization: token}});
      return { followUser, user };
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

export const unfollowUser = createAsyncThunk("profile/unfollowUser",
  async (followingUserId, { rejectWithValue }) => {
    try {
      const {data: {followUser, user}} = await 
      axios.post(`/api/users/unfollow/${followingUserId}`, {},{headers: {authorization: token}});
      return { followUser, user };
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.allUsers = [];
    },
    [getAllUser.pending]: (state) => {
      state.userStatus = "pending";
      state.isLoading = true;
    },
    [getAllUser.fulfilled]: (state, action) => {
      state.userStatus = "fulfilled";
      state.allUsers = action.payload.users;
      state.isLoading = false;
    },
    [getAllUser.rejected]: (state, action) => {
      state.userStatus = "rejected";
      state.error = action.payload;
      toast({
        title: `${state.error}`,
        status: "error",
        position: "top-right",
        isClosable: true,
        duration: 3000
    })
    },
    [editUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [editUserInfo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const updatedUser = payload;
      const userIndex = state.allUsers.findIndex(({_id})=>_id===updatedUser._id);
      state.allUsers[userIndex] = payload;
      toast({
        title: `Profile updated`,
        status: "success",
        position: "top-right",
        isClosable: true,
        duration: 3000
      })
    },
    [editUserInfo.rejected]: (state, { payload }) => {
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
    [followUser.fulfilled]: (state, { payload }) => {
      const followedUser = payload.followUser;
      const followedUserIndex = state.allUsers.findIndex(({_id})=>_id===followedUser._id);
      state.allUsers[followedUserIndex] = followedUser;
      const currentUser = payload.user;
      const currentUserIndex = state.allUsers.findIndex(({_id})=>_id===currentUser._id);
      state.allUsers[currentUserIndex] = currentUser;
    },
    [followUser.rejected]: (state, { payload }) => {
      state.error = payload;
      toast({
        title: `${state.error}`,
        status: "error",
        position: "top-right",
        isClosable: true,
        duration: 3000
      })
    },
    [unfollowUser.fulfilled]: (state, { payload }) => {
      const followedUser = payload.followUser;
      const followedUserIndex = state.allUsers.findIndex(({_id})=>_id===followedUser._id);
      state.allUsers[followedUserIndex] = followedUser;
      const currentUser = payload.user;
      const currentUserIndex = state.allUsers.findIndex(({_id})=>_id===currentUser._id);
      state.allUsers[currentUserIndex] = currentUser;
    },
    [unfollowUser.rejected]: (state, { payload }) => {
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

export default userSlice.reducer;