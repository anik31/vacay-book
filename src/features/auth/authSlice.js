import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createStandaloneToast } from '@chakra-ui/toast';

const toast = createStandaloneToast();

const initialState = {
    token: null,
    user: null,
};

export const loginUser = createAsyncThunk("auth/login", async(credentials, { rejectWithValue })=>{
  try{
    const {data} = await axios.post("/api/auth/login", credentials);
    return data;
  }catch(error){
    return rejectWithValue(error.response.data.errors[0]);
  }
});

export const signupUser = createAsyncThunk("auth/signup", async(credentials, { rejectWithValue })=>{
  try{
    const {data} = await axios.post("/api/auth/signup", credentials);
    return data;
  }catch(error){
    return rejectWithValue(error.response.data.errors[0]);
  }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      logoutUser: (state) => {
        localStorage.removeItem("token");
        state.user = null;
        state.token = null;
        toast({
            title: "Logged out",
            status: "info",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      }
    },
    extraReducers: {
      [loginUser.pending]: (state) => {
        state.status = "pending";
      },
      [loginUser.fulfilled]: (state, action) => {
        state.status = "fulfilled";
        state.token = action.payload.encodedToken;
        state.user = action.payload.foundUser;
        localStorage.setItem("token", state.token);
        toast({
            title: "Logged in successfully",
            status: "success",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [loginUser.rejected]: (state, action) => {
        state.status = "error";
        state.error = action.payload;
        toast({
            title: `${state.error}`,
            status: "error",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [signupUser.pending]: (state) => {
        state.status = "pending";
      },
      [signupUser.fulfilled]: (state, action) => {
        state.status = "fulfilled";
        state.token = action.payload.encodedToken;
        state.user = action.payload.createdUser;
        localStorage.setItem("token", state.token);
        toast({
            title: "Signup successful",
            status: "success",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      },
      [signupUser.rejected]: (state, action) => {
        state.status = "error";
        state.error = action.payload;
        toast({
            title: `${state.error}`,
            status: "error",
            position: "top-right",
            isClosable: true,
            duration: 3000
        })
      }
    }
  });
  
  export const { logoutUser } = authSlice.actions;
  
  export default authSlice.reducer;
