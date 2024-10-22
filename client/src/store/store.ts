// src/store/store.ts
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define the initial state
interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

// Create a slice of the store
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Export the actions
export const { increment, decrement } = counterSlice.actions;

// Create the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
