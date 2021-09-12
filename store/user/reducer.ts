import { createSlice } from '@reduxjs/toolkit'

export enum Roles {
  ADMIN = 'ADMIN',
  MENTOR = 'MENTOR',
  INTERN = 'INTERN'
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Илья',
    avatar: '',
    coins: 100,
    experience: 0,
    lvl: 1,
    role: Roles.INTERN as Roles,
    coursesCompleted: 5,
    coursesCompleteList: []
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload
    },
    order: (state, action) => {
      state.coins -= action.payload.coins
    },
    addCoins: (state, action) => {
      state.coins += action.payload.coins
    },
    setCourseComplete: (state, action) => {
      state.coursesCompleteList.push(action.payload as never)
    }

  }
})

export const { setUser, setCourseComplete, order, addCoins } = userSlice.actions;
export default userSlice.reducer;
