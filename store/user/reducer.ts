import { createSlice, configureStore } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
      name: 'Илья',
      avatar: '',
      achivements: [],
      coins: 0,
      expirience: 0,
      coursesCompleted: 0
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload
    },
  }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;