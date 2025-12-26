import React from "react";

function DataBox({data,searchVal,handleSearch}) {
  
  return (
    <div
      className="userDataDisplay container position-absolute top-0 end-0 bg-dark p-3"
      style={{ minHeight: "100vh", width: "65%" }}
    >
      <div className="container mt-4 font-monospace">
        <input
          type="text"
          placeholder="Search User..."
          className="form-control form-control-lg"
          value={searchVal}
          onChange={handleSearch}
        />
      </div>
      <div className="container mt-4">
        <table className="table w-75 m-auto mt-5">
          <tbody>
            {data &&
              data.map((e,i) => (
                <tr>
                  <td style={(i%2==0)?{background:"#222",color:"#fff"}:{background:"#fff",color:"#222"}}>{e.id}</td>
                  <td style={(i%2==0)?{background:"#222",color:"#fff"}:{background:"#fff",color:"#222"}}>{e.name}</td>
                  <td style={(i%2==0)?{background:"#222",color:"#fff"}:{background:"#fff",color:"#222"}}>{e.age}</td>
                  <td style={(i%2==0)?{background:"#222",color:"#fff"}:{background:"#fff",color:"#222"}}>{e.email}</td>
                  <td style={(i%2==0)?{background:"#222",color:"#fff"}:{background:"#fff",color:"#222"}}>{e.address}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataBox;
