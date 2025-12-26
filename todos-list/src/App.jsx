import { useState } from "react";
import "./App.css";

function App() {
  const [checkmode, setCheckMode] = useState(false);
  const [task, setTask] = useState([]);
  const [input,setInput] = useState("");
  const [update,setUpdate] = useState(false);
  const [updateIdx,setUpdateIdx] = useState(null);


  const handleMode = () => {
    // same as below - whenever the current state depend on previous state we use this prev 
    setCheckMode(prev=>!prev);
    // if (checkmode == false) {
    //   setCheckMode(true);
    // } else {
    //   setCheckMode(false);
    // }
  };

  const handleAddbtn = () =>{
      if(update === false){
        if(input.trim() != ""){
          setTask([...task,input]);
        }
      }else{
        setTask(prev=>prev.map((ele,i)=>i==updateIdx?input:ele));
        setUpdate(false)
      }
      setInput("");
  }

  const handleRemove = (idx) => {
    setTask(prev=>prev.filter((ele,i)=>idx!==i));
  }

  const handleUpdate = (idx) => {
    setInput(task[idx]);
    setUpdate(true)
    setUpdateIdx(idx);
  }



  return (
    <div
      className={`mainContainer ${
        checkmode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="container d-flex justify-content-end w-75 p-2">
        <p className=" pe-3 fw-bold font-monospace fs-3">
          {checkmode ? "Dark" : "Light"}
        </p>
        <label class="switch mt-1">
          <input type="checkbox" checked={checkmode} onClick={handleMode} />
          <span class="slider round"></span>
        </label>
      </div>
      <h1 className="text-center mt-3 font-monospace" style={{fontSize:"70px"}}>TODOS LIST APP</h1>
      <div className="input-group input-group-lg mt-4 w-75 m-auto shadow">
        <input type="text" className="form-control form-control-lg" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Write your task here...." />
        <button className={`btn ${checkmode ? "btn-warning" : "btn-primary"}`} onClick={handleAddbtn}>
          {update?"Update":"Add Task"}
        </button>
      </div>

      <div className="container mt-5">
        {task &&
          task.map((ele, idx) => (
            <div className="container w-75 d-flex justify-content-between align-items-center border-1" key={idx}>
              <p style={{fontSize:"22px",fontFamily:"monospace"}}>{ele}</p>
              <div>
                <button className="btn btn-danger" onClick={()=>{handleRemove(idx)}}>Task Completed</button>
                <button className="btn btn-warning ms-4" onClick={()=>{handleUpdate(idx)}}>Update Task</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
