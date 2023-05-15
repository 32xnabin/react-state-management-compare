import { create } from "zustand";

export const useStore = create((set) => ({
  todos: [],
  saveTodos: (values) => set({ todos: values }),
  addTodo: (value) => set((state) => ({ todos: [...state.todos, value] })),
  deleteTodo: (value) =>
    set((state) => ({
      todos: state.todos.filter((item) => item.id != value.id),
    })),
  updateTodo: (value) =>
    set((state) => ({
      todos: state.todos.map((item) => {
        if (value.id == item.id) {
          return value;
        } else {
          return item;
        }
      }),
    })),
}));
