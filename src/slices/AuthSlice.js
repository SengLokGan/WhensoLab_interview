import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks/storeHooks";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginUser, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
export const useLoginStatus = () =>
  // @ts-ignore
  useAppSelector((state) => state?.auth?.user);
export const useLoginError = () =>
  // @ts-ignore
  useAppSelector((state) => state.auth?.error);
export const useLoginLoading = () =>
  // @ts-ignore
  useAppSelector((state) => state?.auth?.loading);
