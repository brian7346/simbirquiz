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
    coursesCompleteList: [1,2,3]
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload
    },
    order: (state, action) => {
      console.log(action)
      state.couns = action.payload
    }
  }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
