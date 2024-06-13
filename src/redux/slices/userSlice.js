import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: null,
  nickname: null,
  id: null,
  success: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      const userinfo = action.payload;
      return { ...state, ...userinfo };
    },
    removeUserInfo: (state, action) => {
      return { ...state, ...initialState };
    },
  },
});

export const { getUserInfo, removeUserInfo } = userSlice.actions;
export default userSlice.reducer;
