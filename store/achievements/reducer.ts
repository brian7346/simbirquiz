import { createSlice } from "@reduxjs/toolkit";

type Achievement = {
  id: number;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean
};

const icons = {
  1: require(`../../assets/images/1.png`),
  2: require(`../../assets/images/2.png`),
  3: require(`../../assets/images/3.png`),
  4: require(`../../assets/images/4.png`),
  5: require(`../../assets/images/5.png`),
  6: require(`../../assets/images/6.png`),
  7: require(`../../assets/images/7.png`),
  8: require(`../../assets/images/8.png`),
}

export const achievementsSlice = createSlice({
  name: "achievements",
  initialState: [
    {
      id: 1,
      name: "Дорогу осилит мобильный!",
      description: "Повтори основы, срочная мобилизация мозговых извилин!",
      icon: icons[1],
      unlocked: true
    },
    {
      id: 2,
      name: "Повторение - бэк учения!",
      description: "Попробуй еще раз, бэк - за тебя!",
      icon: icons[2],
      unlocked: true
    },
    {
      id: 3,
      name: "Без труда - не вытащищь мобилку из пруда!",
      description: "Надо еще раз постараться, а то тебя опередят!",
      icon: icons[3],
    },
    {
      id: 4,
      name: "Все на фронт!",
      description: "Возьми еще раз тест штурмом!",
      icon: icons[4],
    },
    {
      id: 5,
      name: "Взялся за бэк - не говори, что он дюж!",
      description: "Надо, надо потрудиться! Ты вывезешь!",
      icon: icons[5],
    },
  ] as Achievement[],
  reducers: {
    setAchievements: (state, action) => {
      console.log(state)
      state[action.payload.id].unlocked = true;
    },
  },
});

export const { setAchievements } = achievementsSlice.actions;
export default achievementsSlice.reducer;
