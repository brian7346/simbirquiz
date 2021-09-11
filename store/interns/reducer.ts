import { createSlice } from "@reduxjs/toolkit";

export const internsSlice = createSlice({
  name: "interns",
  initialState: [
    {
      id: 1,
      name: "Илья Васильев",
      lvl: 3,
      mistakes: [
        {
          name: 'Node JS',
          desc: "Язык JavaScript является подвидом языка Java – верно?React Native",
        },
        {
          name: 'React Native',
          desc: "Что получится, если сложить true + false?",
        },
        {
          name: 'Java',
          desc: "Чему равно 2 && 1 && null && 0 && undefined",
        },
        {
          name: 'Java',
          desc: "Что делает оператор ===",
        },
      ],
      avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png',
    },
    {
      id: 2,
      name: "Вадим Магов",
      lvl: 3,
      mistakes: [
        {
          desc: "Язык JavaScript является подвидом языка Java – верно?React Native",
        },
        {
          desc: "Что получится, если сложить true + false?",
        },
        {
          desc: "Чему равно 2 && 1 && null && 0 && undefined",
        },
        {
          desc: "Что делает оператор ===",
        },
      ],
      avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png',
    },
    {
      id: 3,
      name: "Сергей Новый",
      lvl: 3,
      mistakes: [
        {
          name: 'React Native',
          desc: "Язык JavaScript является подвидом языка Java – верно?React Native",
        },
        {
          name: 'React Native',
          desc: "Что получится, если сложить true + false?",
        },
        {
          name: 'React Native',
          desc: "Чему равно 2 && 1 && null && 0 && undefined",
        },
        {
          name: 'Swift',
          desc: "Что делает оператор ===",
        },
      ],
      avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png',
    },
    {
      id: 5,
      name: "Андрей Сергеев",
      lvl: 3,
      mistakes: [
        {
          desc: "Язык JavaScript является подвидом языка Java – верно?React Native",
        },
        {
          desc: "Что получится, если сложить true + false?",
        },
        {
          desc: "Чему равно 2 && 1 && null && 0 && undefined",
        },
        {
          desc: "Что делает оператор ===",
        },
      ],
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
