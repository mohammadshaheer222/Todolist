import { useState } from "react";
import "./TaskForm.css"

const TaskForm = ({ addTodo}) => {
  const [data, setData] = useState("");

  const onChangeHandler = (event) => {
    setData(
      event.target.value.charAt(0).toLocaleUpperCase() +
        event.target.value.slice(1)
    );
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(data);
    setData("");
  };

  return (
    <>
    <h1>Todo List</h1>
    <div className="container">
    <form onSubmit={onSubmitHandler}>
        <input className="text-field" type="text" placeholder="Add Todo here.." value={data} required onChange={onChangeHandler} />
        <input className="add-btn" type="submit" value={"Add Task"} />
      </form>
    </div>
    </>
  );
};

export default TaskForm;
