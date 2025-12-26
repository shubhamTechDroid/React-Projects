import "./App.css";
import useQuotes from "./Hooks/useQuotes";
// https://dummyjson.com/quotes/random

function App() {

  const {data,loading,error,fetchData} = useQuotes(`https://dummyjson.com/quotes/random`);
  
  return (
    <div className="container mt-4">
      <h1 className="text-center font-monospace">Quotes Generator</h1>
      <button className="btn btn-primary mt-3 btn-lg" onClick={fetchData}>
        Get Quotes
      </button>
      {loading && (<h5 className="text-center font-monospace">Loading...</h5>)}
      {error && (<h5 className="text-center font-monospace">Error Failed to Load</h5>)}
      {data && !error && (
        <div className="container quote-box mt-3 w-75 p-4">
          <p className="quote font-monospace">{data.quote}</p>
          <p className="author">{data.author}</p>
        </div>
      )}


    </div>
  );
}

export default App;
