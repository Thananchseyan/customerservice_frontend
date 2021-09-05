const SearchBar = () => {
    return ( 
        <div>
            <div className="row justify-content-center">
                <div className="col-6 col-sm-6 col-xl-8 search-input" style={{}}>
                    <input type="text" id="icon-search" className="form-control mb-4" aria-label="search bar" placeholder="Search employee ID. . " style={{background:"white"}}/>  
                </div>
                <div className="search-button">
                    <button type="button" className="btn btn-md btn-primary" aria-label="search button">
                        Search &nbsp;
                        <i className="fa fa-search"> </i>
                    </button>
                </div>
                
            </div>
        </div>
     );
}
 
export default SearchBar;