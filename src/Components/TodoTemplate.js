import React from "react";
import "./TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <>
      <div className="todoTemplate">
        <div className="todoTemplate-area">
          <div className="todoTemplate-area-title">
            <p className="todoTemplate-area-title-text">일정 관리</p>
            <div className="todoTemplate-area-title-under" />
          </div>
          <div className="todoTemplate-area-children">{children}</div>
        </div>
      </div>
    </>
  );
};

export default TodoTemplate;
