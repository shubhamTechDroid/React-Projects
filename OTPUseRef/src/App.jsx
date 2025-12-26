import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import UseRefComponent from "./components/useRefComponent";
import Otp from "./components/Otp";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  const handleInc = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDec = () => {
    setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    const getUser = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let dataval = await res.json();
      setData(dataval);
    };
    getUser();
  }, []);

  return (
    <div className="container w-75">
      <h1 className="text-center mt-4">useState Hoook</h1>
      <h3 className="text-center mt-4">Couter : {counter}</h3>
      <div className="container d-flex justify-content-between align-items-center w-50">
        <button className="btn btn-dark ps-5 pe-5" onClick={handleInc}>
          Inc +
        </button>
        <button className="btn btn-dark ps-5 pe-5" onClick={handleDec}>
          Dec -
        </button>
      </div>

      <h1 className="text-center mt-4">useEffect Hoook</h1>
      <div className="container d-flex">
        {data &&
          data.slice(0, 5).map((e, i) => (
            <div className="container border" key={i}>
              <p>Name: {e.name}</p>
              <p>Email {e.email}</p>
            </div>
          ))}
      </div>


      <h1 className="text-center mt-4">useRef Hoook</h1>
      <UseRefComponent/>


      <h1 className="text-center mt-4">OTP Using useRef</h1>
      <Otp/>

    </div>
  );
}

export default App;
