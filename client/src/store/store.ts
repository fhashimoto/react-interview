// src/store/store.ts
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define the initial state
export interface IState {
  item: Array<ITodo>;
  todo: ITodo | null;
}

// Todo task interface
export interface ITodo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
  dueDate: number;
  priority: number;
  tags: string[];
  visual: {
    color: string;
    fontWeight: string;
  };
}

export interface INewTodo {
  title: string;
  description: string;
}

const initialState: IState = {
  item: [],
  todo: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.item = action.payload;
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

// Export the actions
export const { setData, setTodo } = todoSlice.actions;

// Create the store
const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export default store;
