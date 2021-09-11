import { createSlice } from "@reduxjs/toolkit";

export const internsSlice = createSlice({
  name: "interns",
  initialState: [
    {
      id: 1,
      name: "Илья Васильев",
      lvl: 3,
      avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png',
    },
    {
      id: 2,
      name: "Илья Васильев",
      lvl: 3,
      avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png',
    },
    {
      id: 3,
      name: "Илья Васильев",
      lvl: 3,
      avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png',
    },
    {
      id: 5,
      name: "Илья Васильев",
      lvl: 3,
      avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png',
    },
  ],
  reducers: {
    setInterns: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setInterns } = internsSlice.actions;
export default internsSlice.reducer;
