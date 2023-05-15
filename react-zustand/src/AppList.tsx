import React, { useEffect } from "react";
import { useStore } from "./Store";
import { shallow } from "zustand/shallow";
import { getTodos, Todo, updateTodo, deleteTodo, createTodo } from "./lib/api";

function AppList() {
  const [todos] = useStore((state) => [state.todos], shallow);
  const store = useStore();

  return (
    <div className="App">
      <div className="todos">
        {todos &&
          todos.length > 0 &&
          todos.map((todo: Todo) => (
            <React.Fragment key={todo.id}>
              <div>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => {
                    updateTodo(todo).then((res) => store.updateTodo(res));
                  }}
                />
                <span>{todo.text}</span>
              </div>
              <button
                onClick={() => {
                  deleteTodo(todo).then((res) => store.deleteTodo(res));
                }}
              >
                Delete
              </button>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default AppList;
