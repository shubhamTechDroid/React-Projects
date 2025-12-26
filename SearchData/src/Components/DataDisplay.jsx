
function DataDisplay({data}){
    return(
        <div className="container mt-3">
            <div className="row w-100">
            {data && data.map((e)=>(
                <div className="col-md-3 bg-dark text-light p-4 ms-5 mt-3">
                    <p>ID : {e.id}</p>
                    <p> Name : {e.name}</p>
                    <p>Age : {e.age}</p>
                    <p>Email : {e.email}</p>
                    <p>Address : {e.city}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
export default DataDisplay;