import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const formSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    //수정
    editData: (state, action) => {
      const { paramsId, edit } = action.payload;
      return state.map((data) =>
        data.id === paramsId ? { ...data, ...edit } : data
      );
    },
    //삭제
    deleteData: (state, action) => {
      const detailData = action.payload;
      return state.filter((data) => data.id !== detailData.id);
    },
  },
});

export const { addFormData, editData, deleteData } = formSlice.actions;
export default formSlice.reducer;
