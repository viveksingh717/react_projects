import React, { Fragment, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../todo_style.css";

function Todo() {
  const [inputItem, setInput] = useState("");
  const [listItems, setList] = useState([]);
  // const [isDone, setDone] = useState(false);

  const setItemList = (e) => {
    setInput(e.target.value);
  };

  const addItemList = () => {
    setList((previous_values) => {
      return [...previous_values, inputItem];
    });
    setInput("");
  };

  const removeItem = (key) => {
    setList((previous_values) => {
      return previous_values.filter((e, i) => {
        return i !== key;
      });
    });
    // setDone(true);
  };

  return (
    <Fragment>
      <div className="app">
        <h1 className="heading">My ToDo List</h1>
        <input
          type="text"
          className="input_form"
          name="todo"
          placeholder="Add ToDo Here.."
          onChange={setItemList}
          value={inputItem}
        />
        <button type="button" className="todoBtn" onClick={addItemList}>
          +
        </button>

        {listItems.map((list, index) => {
          return (
            <div className="todoList" key={index}>
              <ol className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold text_wrap">{list}</div>
                  </div>
                  <span
                    className="badge bg-danger bg-gradient rounded-pill removeBtn"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </span>
                </li>
              </ol>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Todo;
