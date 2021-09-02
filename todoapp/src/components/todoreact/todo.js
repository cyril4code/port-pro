import React, { useState, useEffect } from "react";
import "./style.css";

// Get the Local Storage data back
const getLocalData = () => {
  const lists = localStorage.getItem("MyToDoList");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputdata, SetInputdata] = useState(" ");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  // Add the Items Function
  const addItem = () => {
    if (!inputdata) {
      alert("Please Fill some Data");
    } else if (inputdata && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        })
      );
      SetInputdata("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      SetInputdata("");
    }
  };

  // Delete the Items Function
  const deleteItem = (index) => {
    const updatedItem = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItem);
  };

  // Edit the Items Function
  const editItem = (index) => {
    const item_todo_edit = items.find((curElem) => {
      return curElem.id === index;
    });
    SetInputdata(item_todo_edit.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  // Remove All Items

  const remAll = () => {
    setItems([]);
  };

  // Adding Local Storage
  useEffect(() => {
    localStorage.setItem("MyToDoList", JSON.stringify(items));
  }, [items]);

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
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>

          {/* Show our items */}

          <div className="showItems">
            {items.map((curElem, index) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Remove all button */}

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={remAll}
            >
              <span>Checkout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
