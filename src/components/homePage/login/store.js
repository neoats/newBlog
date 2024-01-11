// store.js
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer"; // Reducer'ınızın olduğu dosyayı import edin

export default configureStore({
  reducer: {
    login: loginReducer, // login isminde bir alan olarak reducer'ınızı bağlayın
  },
});
