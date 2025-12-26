import { useState ,useRef, useEffect } from 'react'
import './App.css'

function App() {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  return (
    <>
     <h1 className="text-center mt-4">OTP Project</h1>
     <input type="text" placeholder='I will auto-focus' ref={inputRef} className="form-control w-50 m-auto"/>
    </>
  )
}

export default App
