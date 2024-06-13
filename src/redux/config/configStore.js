import { configureStore } from "@reduxjs/toolkit";
import MonthSlice from "../slices/monthSlice";
import userSlice from "../slices/userSlice";

const store = configureStore({
  reducer: {
    activeMonth: MonthSlice,
    user: userSlice,
  },
});

export default store;
