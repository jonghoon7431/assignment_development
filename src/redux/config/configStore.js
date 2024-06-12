import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../slices/formSlice";
import MonthSlice from "../slices/monthSlice";

const store = configureStore({
  reducer: {
    data: formSlice,
    activeMonth: MonthSlice,
  },
});

export default store;
