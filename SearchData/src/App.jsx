import './App.css'
import Data from './assets/data';
import SearchBox from './Components/SearchBox';
import DataDisplay from './Components/DataDisplay';
import { useState } from 'react';

function App() {
  const [data,setData] = useState([...Data]);
  const [searchVal,setSearchVal] = useState("");
  
  const handleSearch = (e) => {
     let inpVal = e.target.value;
     setSearchVal(inpVal);
     
     // for multiple value checking
     let filterArr = Data.filter((e)=>( e.name.toLowerCase().startsWith(inpVal.trim().toLowerCase())  || e.city.toLowerCase().startsWith(inpVal.trim().toLowerCase()) ));

     setData(filterArr);
  }

  return (
    <>
    <h1 className="font-monospace text-center mt-2" style={{fontSize:"3.5em"}}>User Data</h1>
     <SearchBox searchVal={searchVal} handleSearch={handleSearch}/>
     <DataDisplay data={data} />
    </>
  )
}

export default App
