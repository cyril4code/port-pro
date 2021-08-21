import React from "react";
import "./style.css";

const Todo = () => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg " alt="Todo Logo" />
            <figcaption>Add List Here</figcaption>
          </figure>
          <div className="addItems">
            !!
            <input
              type="text"
              placeholder="Add Items ✍"
              className="form-control "
            />
            <i classname="fas fa-plus add-btn"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
