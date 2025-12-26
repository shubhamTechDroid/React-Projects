import {useState , useRef, useEffect} from 'react'

function useRefComponent(){
  const [count,setCount] = useState(0);
  const prev = useRef();

  useEffect(() => {
    prev.current = count;
  }, [count]);

  return (
    <div className="container text-center mt-3">
        <h4>Current Count : {count}</h4>
        <h4>Previous Count : {prev.current}</h4>
        <button className="btn btn-dark" onClick={()=>{setCount(c=>c+1)}}>Increment Button</button>
    </div>
  )
}

export default useRefComponent