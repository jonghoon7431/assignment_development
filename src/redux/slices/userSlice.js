import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    avatar: null,
    nickname: null,
    id: null,
    success: false,
  },
  reducers: {
    getUserInfo: (state, action) => {
      const userinfo = action.payload;
      return { ...state, ...userinfo };
    },
  },
});

export const { getUserInfo } = userSlice.actions;
export default userSlice.reducer;
