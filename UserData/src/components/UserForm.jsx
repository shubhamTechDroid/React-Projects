
function UserForm({nameData,setNameData,age,setAge,email,setEmail,address,setAddress,handleAddData}) {

  return (
    <div className='userDataForm container p-5 position-fixed top-0 start-0 d-flex pt-5 align-items-center flex-column'>
        <h1>User Data Form</h1>
        <div className="container">
            <input type="text" className="form-control fs-5" placeholder='Name' value={nameData} onChange={(e)=>setNameData(e.target.value)}/>
            <input type="number" className="form-control fs-5" placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <input type="email" className="form-control fs-5" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" className="form-control fs-5" placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <button className="btn btn-dark btn-lg mt-3" onClick={handleAddData}>Add Data</button>
    </div>
  )
}

export default UserForm