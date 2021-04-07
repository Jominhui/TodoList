import React from "react";
import "./TodoTemplate.scss";

export const TodoItem = ({ content, handleDelete }) => {
  return (
    <div className="TodoItem" htmlFor="todo">
      <div className="TodoItem-list">{content}</div>
      <div className="TodoItem-remove" onClick={handleDelete}>
        remove
      </div>
    </div>
  );
};
