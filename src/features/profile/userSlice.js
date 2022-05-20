import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createStandaloneToast } from '@chakra-ui/toast';

const toast = createStandaloneToast();

const initialState = {
  allUsers: [],
  isLoading: false
};

export const getAllUser = createAsyncThunk("post/getAllUSers", async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get("/api/users");
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.errors[0]);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
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
    }
  },
});

export default userSlice.reducer;