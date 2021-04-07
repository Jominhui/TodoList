import React from "react";
import { useCallback, useState } from "react";
import { TodoItem } from "./TodoItem";
import "./TodoTemplate.scss";

const TodoLsit = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const handleAddTodo = useCallback(() => {
    if (todo.trim().length <= 0) {
      return;
    }

    setTodoList([...todoList, todo]);

    setTodo("");
  }, [todo, todoList]);

  const todoItems = todoList.map((todoItem) => {
    const handleDelete = () => {
      const index = todoList.findIndex((e) => e === todoItem);
      if (index !== -1) {
        setTodoList([
          ...todoList.slice(0, index),
          ...todoList.slice(index + 1, todoList.length),
        ]);
      }
    };

    return <TodoItem handleDelete={handleDelete} content={todoItem} />;
  });
  return (
    <>
      <div className="insert">
        <input
          className="insert-input"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="할일을 입력해 주세요."
        />
        <button onClick={handleAddTodo} className="insert-btn">
          등록
        </button>
      </div>
      <hr />
      <div className="todo_items">{todoItems}</div>
    </>
  );
};

export default TodoLsit;
