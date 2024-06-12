import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../slices/formSlice";
import MonthSlice from "../slices/monthSlice";
import userSlice from "../slices/userSlice";

const store = configureStore({
  reducer: {
    data: formSlice,
    activeMonth: MonthSlice,
    user: userSlice,
  },
});

export default store;
