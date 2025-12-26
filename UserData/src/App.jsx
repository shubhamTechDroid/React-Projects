import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './components/UserForm'
import DataBox from './components/DataBox';
import './App.css'
import { useState } from 'react';
import Data from './assets/data';

function App() {
  const [data,setData] = useState([...Data]);
  // const [filterData,setFilterData] = useState(data);
  const [nameData,setNameData] = useState("");
  const [age,setAge] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [searchVal,setSearchVal] = useState("");
  const [id,setId] = useState(data.length + 1);

  const handleAddData = () => {
      setId(id+1);
      setData([...data,{id:id,name:nameData,age:Number(age),email:email,address:address}])
      setNameData("");
      setAddress("");
      setAge("");
      setEmail("");
  }

  const handleSearch = (e) => {
      let val = e.target.value;
      setSearchVal(val);
      let filterArr = Data.filter((e)=>e.name.toLowerCase().includes(val.toLowerCase()));
      setData(filterArr);
  }



  return (
    <>
    <UserForm nameData={nameData} setNameData={setNameData} age={age} setAge={setAge} email={email} setEmail={setEmail} address={address} setAddress={setAddress} handleAddData={handleAddData}/>
    <DataBox data={data} searchVal={searchVal} handleSearch={handleSearch}/>
    </>
  )
}

export default App
