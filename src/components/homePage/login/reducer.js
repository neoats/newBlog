import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: "",
  isAdmin: false, // isAdmin durumunu başlangıçta false olarak ayarlayın
  error: "",
  loading: false,
  isUserLogout: false,
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    apiError(state, action) {
      state.error = action.payload;
      state.isLoggedIn= false;
      state.loading = false;
      state.isUserLogout = false;
    },
    loginSuccess(state, action) {
      state.user = action.payload.user; // kullanıcı bilgisini güncelle
      state.isAdmin = action.payload.isAdmin; // isAdmin bilgisini güncelle
      state.isLoggedIn = true;
      state.loading = false;
    },
    logoutUserSuccess(state, action) {
      state.isUserLogout = true;
      state.isLoggedIn = false;
      state.isAdmin = false; // kullanıcı çıkış yapınca isAdmin'i false yap
    },
    reset_login_flag(state) {
      state.error = "";
    },
  },
});

export const {
  apiError,
  loginSuccess,
  logoutUserSuccess,
  reset_login_flag,
} = loginSlice.actions;

export default loginSlice.reducer;
