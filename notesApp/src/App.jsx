import { useState } from "react";
import "./App.css";

function App() {
  const [isactive, setIsActive] = useState(false);
  const [input, setInput] = useState("");
  const [initColor, setInitColor] = useState("#fff");
  const [addbox, setAddBox] = useState(false);
  const [updateIdx,setUpdateIdx] = useState(null);
  const [updateInput,setUpdatedInp] = useState("");
 

  const [data, setData] = useState([]);

  const handleAddbtn = () => {
    setIsActive((prev) => !prev);
    setAddBox(true);
  };
  const handleRemoveBtn = (idx) => {
    setData((prev) => prev.filter((ele, i) => i !== idx));
  };

  const handleAddTaskBtn = () => {
    setData((prev) => [{ note: input, color: initColor }, ...prev]);
    setInitColor("#fff");
    setInput("");
    setAddBox(false);
    setIsActive(false);
  };

  const  handleUpdateBtn = (idx) => {
    setUpdateIdx(idx)
    setUpdatedInp(data[idx].note);
  }
  const handleSaveUpdate = () => {
    setData(prev=>prev.map((e,i)=>updateIdx==i?{...e,note:updateInput}:e))
    setUpdateIdx(null)
  }



  return (
    <div className="main_container">
      <div className="side_cotainer">
        <p className="sidetext">Docket</p>
        <div className={`addbox ${isactive ? "active" : ""}`}>
          <div className="plusbtn" onClick={handleAddbtn}>
            <ion-icon name="add-outline"></ion-icon>
          </div>
          <div
            className="colorbox"
            onClick={() => {
              setInitColor("#ff4d71");
            }}
          ></div>
          <div
            className="colorbox"
            onClick={() => {
              setInitColor("#00b87dff");
            }}
          ></div>
          <div
            className="colorbox"
            onClick={() => {
              setInitColor("#c757ff");
            }}
          ></div>
          <div
            className="colorbox"
            onClick={() => {
              setInitColor("#e2b845ff");
            }}
          ></div>
          <div
            className="colorbox"
            onClick={() => {
              setInitColor("#00c8ff");
            }}
          ></div>
        </div>
      </div>

      <div className={`mainNoteContainer ${data.length ? "active" : ""}`}>
        {data.length || addbox ? (
          <div className="mainBox">
            {addbox && (
              <div
                className="notes"
                style={{ backgroundColor: `${initColor}` }}
              >
                <textarea
                  style={{ background: "transparent", color:"#333" }}
                  id="noteArea"
                  name="noteArea"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                ></textarea>

                <div className="editingOption">
                  <ion-icon
                    name="trash-outline"
                    onClick={() => {
                      setAddBox(false),
                        setInitColor("#fff"),
                        setIsActive(false),
                        setInput("");
                    }}
                  ></ion-icon>
                  <ion-icon
                    name="checkmark-circle-outline"
                    onClick={handleAddTaskBtn}
                  ></ion-icon>
                </div>
              </div>
            )}

            {data.map((ele, idx) => (
              <div
                className="notes"
                key={idx}
                style={{ backgroundColor: `${ele.color}` }}
              >
                <textarea
                  style={{ background: "transparent", color:"#333" }}
                  id="noteArea"
                  name="noteArea"
                  value={(updateIdx === idx)?updateInput:ele.note}
                  readOnly={!(updateIdx === idx)}
                  onChange={(e)=>setUpdatedInp(e.target.value)}
                ></textarea>

                <div className="editingOption">
                  <ion-icon name={`${(updateIdx === idx)?'checkmark-circle-outline':'create-outline'}`} onClick={()=>{
                    updateIdx === idx?handleSaveUpdate():handleUpdateBtn(idx)
                  }}></ion-icon>

                  <ion-icon
                    name="trash-outline"
                    onClick={() => {
                      handleRemoveBtn(idx);
                    }}
                  ></ion-icon>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="NoData_text">
          <p>No notes available. Add your first note!</p>
          <p className="headingApp">Notes App</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
