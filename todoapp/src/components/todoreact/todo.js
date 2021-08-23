import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [inputdata, SetInputdata] = useState(" ");
  const [items, setItems] = useState([]);
  // add the Items Function
  const addItem = () => {
    if (!inputdata) {
      alert("Please Fill some Data");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      SetInputdata("");
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg " alt="Todo Logo" />
            <figcaption>Add List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items ✍"
              className="form-control"
              value={inputdata}
              onChange={(event) => SetInputdata(event.target.value)}
            />

            <i className="fa fa-plus add-btn" onClick={addItem}></i>
          </div>
          {/* Show our items */}

          <div className="showItems">
            {items.map((curElem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn"></i>
                    <i className="far fa-trash-alt add-btn"></i>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Remove all button */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All">
              <span>Checkout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
