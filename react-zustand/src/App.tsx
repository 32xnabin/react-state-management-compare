import React, { useRef, useEffect } from "react";
import { useStore } from "./Store";
import { getTodos, createTodo } from "./lib/api";
import AppList from "./AppList";

function TodoApp() {
  const textRef = useRef<HTMLInputElement>(null);
  const store = useStore();
  useEffect(() => {
    getTodos().then((res) => store.saveTodos(res));
  }, []);

  return (
    <div className="App">
      <div className="todos">
        <AppList />
      </div>
      <div className="add">
        <input type="text" ref={textRef} />
        <button
          onClick={() => {
            createTodo(textRef.current!.value ?? "").then((res) =>
              store.addTodo(res)
            );
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

function App() {
  return <TodoApp />;
}

export default App;
