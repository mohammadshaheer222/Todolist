import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import "./TaskList.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TaskList = () => {
  const [todo, setTodo] = useState([]);
  const [datas , setDatas] = useState("")

  const addTodo = (data) => {
    setTodo([...todo, { text: data, status: false }]);
    
  };
  const onDelete = (id) => {
    const del = [...todo];
    del.splice(id, 1);
    setTodo(del);
  };
  const onFilter = (event, todoObj) => {
    const filter = todo.filter((ele) => {
      if (ele.text === todoObj.text) {
        ele.status = event.target.checked;
      }
      return ele;
    });
    setTodo(filter);
  };

  const editTodo = (todoObj)=> {
    const fin = todo.find((ele) => ele.text === todoObj.text)
    // setDatas(fin.text)
  }
  return (
    <>
      <div>
        <TaskForm addTodo={addTodo}/>
        <hr style={{marginTop: "40px"}}/>
        <div className="list-main">
          {todo.map((todoObj, index) => (
            <div className="container" key={index}>
              <div
                className="box"
                style={{
                  backgroundColor: todoObj.status
                    ? "rgba(211,211,211,0.3)"
                    : "",
                }}
              >
                <input
                  type="checkbox"
                  checked={todoObj.status}
                  onChange={(event) => onFilter(event, todoObj)}
                />

                <h4
                  style={{
                    textDecoration: todoObj.status ? "line-through" : "none",
                  }}
                >
                  {todoObj.text}
                </h4>
                <div className="icon">
                  
                {/* <input type="text" /> */}
                  <FaEdit
                  onClick={()=> editTodo(todoObj)}
                    style={{
                      fontSize: "2em",
                      cursor: "pointer",
                      marginRight: "15px",
                      color: "grey",
                    }}
                  />
                  <MdDelete
                    className="delete-icon"
                    onClick={() => onDelete(index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TaskList;
