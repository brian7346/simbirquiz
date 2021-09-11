import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: [{},{},{},{},{},{}],
  reducers: {
    setCourses: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
