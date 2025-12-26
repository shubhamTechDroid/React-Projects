function SearchBox({searchVal,handleSearch}){
    return (
        <>
            <div className="container w-50 mt-3">
                <input type="text" placeholder="Search User..." className="form-control form-control-lg" value={searchVal} onChange={handleSearch}/>
            </div>
        </>
    )
}
export default SearchBox;