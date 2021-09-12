import { createSlice } from '@reduxjs/toolkit'

type Achievement = {
    name: string;
    description: string;
    icon: string;
  }

export const achievementsSlice = createSlice({
    name: 'achievements',
    initialState: [{
        name: 'Добро пожаловать',
        description: 'Завершить свой первый курс в приложении',
        icon: 'check'
      }] as Achievement[],
    reducers: {
        setAchievements: (state, action) => {
            state = action.payload
        },
      }
})

export const { setAchievements } = achievementsSlice.actions;
export default achievementsSlice.reducer;
