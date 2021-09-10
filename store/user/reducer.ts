import { createSlice, configureStore } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Илья',
    avatar: '',
    achievements: [],
    coins: 0,
    experience: 0,
    coursesCompleted: 0,
    coursesCompleteList: []
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload
    },
  }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
