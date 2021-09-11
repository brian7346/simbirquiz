import { createSlice } from '@reduxjs/toolkit'

type Achievement = {
    name: string;
    description: string;
    icon: string;
  }

export const achievmentsSlice = createSlice({
    name: 'achievments',
    initialState: [{
        name: 'Добро пожаловать',
        description: 'Завершить свой первый курс в приложении',
        icon: 'check'
      }] as Achievement[],
    reducers: {
        setAchievments: (state, action) => {
          state = action.payload
        },
      }
})

export const { setAchievments } = achievmentsSlice.actions;
export default achievmentsSlice.reducer;