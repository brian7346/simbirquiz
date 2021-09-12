import { createSlice } from "@reduxjs/toolkit";

export const internsSlice = createSlice({
  name: "interns",
  initialState: [
    {
      id: 1,
      name: "Илья Васильев",
      lvl: 3,
      questions: [
        {
          name: "Swift",
          id: 1,
          desc: "Язык JavaScript является подвидом языка Java – верно?React Native",
        },
        {
          name: "Swift",
          id: 2,
          desc: "Что получится, если сложить true + false?",
        },
        {
          name: "Swift",
          id: 3,
          desc: "Чему равно 2 && 1 && null && 0 && undefined",
        },
      ],
      mistakes: [
        {
          name: "Swift",
          done: false,
          mistakes: 3,
          id: 1,
        },
      ],
      avatar:
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png",
    },
    {
      id: 5,
      name: "Андрей Сергеев",
      lvl: 7,
      questions: [
        {
          name: "React Native",
          id: 1,
          desc: "Язык JavaScript является подвидом языка Java – верно?React Native",
        },
        {
          name: "React Native",
          id: 2,
          desc: "Что получится, если сложить true + false?",
        },
        {
          name: "Swift",
          id: 3,
          desc: "Язык JavaScript является подвидом языка Java – верно?React Native",
        },
        {
          name: "Swift",
          id: 4,
          desc: "Что получится, если сложить true + false?",
        },
        {
          name: "Swift",
          id: 5,
          desc: "Чему равно 2 && 1 && null && 0 && undefined",
        },
      ],
      mistakes: [
        {
          name: "React Native",
          done: true,
          mistakes: 2,
          id: 1,
        },
        {
          name: "Swift",
          done: false,
          mistakes: 3,
          id: 2,
        },
      ],
      avatar:
        "https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png",
    },
  ],
  reducers: {
    setInterns: (state, action) => {
      state = action.payload;
    },
    refreshInternCourse: (state, {  payload }) => {
      const user = state.find(item => item.id === payload.userId);
      user.questions = []

      user.mistakes = user.mistakes.filter(item => item.name!== payload.courseName)
      state = state.filter(item => item.id !== payload.userId)
      state.push(user)
    }
  },
});

export const { setInterns, refreshInternCourse } = internsSlice.actions;
export default internsSlice.reducer;
