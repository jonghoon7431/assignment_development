import { createSlice } from "@reduxjs/toolkit";

const monthSlice = createSlice({
  name: "activeMonth",
  initialState: localStorage.getItem("month")
    ? parseInt(localStorage.getItem("month"))
    : 1,
  reducers: {
    getMonth: (state, action) => {
      return action.payload;
    },
  },
});

export const { getMonth } = monthSlice.actions;
export default monthSlice.reducer;
