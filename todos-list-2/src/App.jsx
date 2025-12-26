import "./App.css";
import { useState } from "react";

function App() {
  const [createBtn, setCreateBtn] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleCreateBtn = () => {
    setCreateBtn(true);
  };

  const handleAddBtn = () => {
    if (!title || !desc) return;

    setData((prev) => [...prev, { title, desc, taskStatus: "inprocess" }]);
    setTitle("");
    setDesc("");
    setCreateBtn(false);
  };

  const handleInProcess = (actualIndex) => {
    setData((prev) =>
      prev.map((item, index) =>
        index === actualIndex ? { ...item, taskStatus: "completed" } : item
      )
    );
  };

  const handleCompleted = (actualIndex) => {
    setData((prev) =>
      prev.map((item, index) =>
        index === actualIndex ? { ...item, taskStatus: "delete" } : item
      )
    );
  };

  const handleDelete = (actualIndex) => {
    setData((prev) => prev.filter((_, index) => index !== actualIndex));
  };

  return (
    <div className="container mt-3">
      {!createBtn && (
        <>
          <div className="container">
            <h1 className="text-center font-monospace">Todos List</h1>
            <div className="container d-flex justify-content-end">
              <button className="btn btn-dark btn-lg" onClick={handleCreateBtn}>
                Create
              </button>
            </div>
          </div>

          <div className="container d-flex mt-3">
        
            <div className="container p-2" style={{ border: "1px solid #ddd", minHeight: "80vh" }}>
              <p className="bg-dark p-1 ps-4 font-monospace text-light">Todos</p>

              {data
                .map((item, idx) => ({ ...item, originalIndex: idx }))
                .filter((e) => e.taskStatus === "inprocess")
                .map((e) => (
                  <div className="container bg-dark text-light p-2 mt-2" key={e.originalIndex}>
                    <p>Title : {e.title}</p>
                    <p>Description : {e.desc}</p>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleInProcess(e.originalIndex)}
                    >
                      In Process
                    </button>
                  </div>
                ))}
            </div>

            <div
              className="container p-2 ms-1"
              style={{ border: "1px solid #ddd" }}
            >
              <p className="bg-dark p-1 ps-4 font-monospace text-light">In Process</p>

              {data
                .map((item, idx) => ({ ...item, originalIndex: idx }))
                .filter((e) => e.taskStatus === "completed")
                .map((e) => (
                  <div className="container bg-dark text-light p-2 mt-2" key={e.originalIndex}>
                    <p>Title : {e.title}</p>
                    <p>Description : {e.desc}</p>
                    <button
                      className="btn btn-success"
                      onClick={() => handleCompleted(e.originalIndex)}
                    >
                      Completed
                    </button>
                  </div>
                ))}
            </div>

            <div
              className="container p-2 ms-1"
              style={{ border: "1px solid #ddd" }}
            >
              <p className="bg-dark p-1 ps-4 font-monospace text-light">Completed</p>

              {data
                .map((item, idx) => ({ ...item, originalIndex: idx }))
                .filter((e) => e.taskStatus === "delete")
                .map((e) => (
                  <div className="container bg-dark text-light p-2 mt-2" key={e.originalIndex}>
                    <p>Title : {e.title}</p>
                    <p>Description : {e.desc}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(e.originalIndex)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}

    
      {createBtn && (
        <div
          className="container d-flex justify-content-center align-items-center flex-column"
          style={{ height: "90vh", width: "100%" }}
        >
          <h1 className=" font-monospace text-center">Create Task</h1>

          <div className="container w-50">
            <input
              type="text"
              placeholder="Title"
              className=" form-control form-control-lg mt-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              rows={5}
              className="form-control form-control-lg mt-3"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <button className="btn btn-dark btn-lg mt-3" onClick={handleAddBtn}>
            Add Task
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
