import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counterval,setCounterVal] = useState(0);
  const [updateVal,setUpdateVal] = useState(1);
  const [isrunning,setIsRunning] = useState(false);
  const [history,setHistory] = useState([]);

  const handleInc = () => {
    setCounterVal(prev=>prev + updateVal);
    setHistory([...history,counterval])
  }
  const handleDec = () => {
    setCounterVal(prev=>prev - updateVal);
    setHistory([...history,counterval])
  }
  const handleReset = () => {
    setCounterVal(0);
    setHistory([])
  }

  const handleInpChange = (e) => {
    const value = Number(e.target.value);
    setUpdateVal(value)
  }

  useEffect(() => {
    let idval;

    if(isrunning){
      idval = setInterval(() => {
       setCounterVal(prev=>prev+updateVal);
       setHistory([...history,counterval]);
    }, 1000);
    }

    return () => clearInterval(idval);

  }, [isrunning,updateVal,counterval,history]);

  return (
    <div className="container">
        <h1 className="text-center mt-4">Counter App</h1>

        <div className="container mt-3 d-flex justify-content-center align-items-center w-50 m-auto">
            <button className="btn btn-success btn-lg me-5" onClick={handleInc} disabled={counterval>=100} >Increment</button>
            <div className="d-flex flex-column justify-content-center align-items-center">
                 <p className={`countval text-center user-select-none d-flex justify-content-center align-items-center ${(counterval>0)?'bg-success':(counterval==0)?'bg-light text-dark':'bg-danger'}`} style={{fontSize:"10em",height:"250px",width:"250px",clipPath:"polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"}}>{(counterval<=9 && counterval >= 0)?'0'+counterval:counterval}</p>
                 <button className="btn btn-warning btn-lg" onClick={handleReset}>Reset</button>
            </div>
            <button className="btn btn-danger btn-lg ms-5" onClick={handleDec} disabled={counterval<=-100} >Decrement</button>
        </div>
        <div className="input-group input-group-lg w-75 m-auto mt-4">
            <span className="input-group-text bg-light text-dark fw-bold font-monospace user-select-none">Increment & Decrement Value</span>
            <input type="Number"  className="form-control bg-dark text-white ps-3" onChange={handleInpChange}/>
        </div>
        <div className="container w-25 mt-4 d-flex justify-content-between align-items-center">
            <button className="btn btn-lg btn-success" onClick={()=>{setIsRunning(true)}}>Start</button>
            <button className="btn btn-lg btn-danger" onClick={()=>{setIsRunning(false)}}>Stop</button>
        </div>



        <div className="container w-75 mt-4 d-flex flex-column">
        {history.length>0 && (
          <h1>History</h1>
        )}
        <br/>
        <div className="container d-flex flex-wrap font-monospace p-3">
            {history.map((ele,idx)=>(
              <p key={idx}>{ele} → </p>
          ))} 
        </div>
        </div>



    </div>
  )
}

export default App
