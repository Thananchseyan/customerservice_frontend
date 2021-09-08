import { useState } from "react";

const SearchBar = ({placeholder,setCardContent}) => {

    const [id,setId] = useState('');

    const handleSubmit =(e) =>{
        e.preventDefault();

        fetch(`http://localhost:8000/serviceprovider/getEmployee/${id}`)
            .then(res => res.json())
            .then(data => setCardContent(data))
            .catch(err => console.log(err));
         
    }

    return ( 
        <div>
            <div className="row justify-content-center">
                <form className="d-flex justify-content-center" onSubmit={handleSubmit} style={{width:'100%'}}>
                    <div className="col-6 col-sm-6 col-xl-8 search-input" >
                        <input type="text" value={id} className="form-control mb-4" aria-label="search bar" onChange={ e => setId(e.target.value) } placeholder={placeholder} style={{background:"white"}}/>  
                    </div>
                    <div className="search-button">
                        <button type="submit" className="btn btn-md btn-primary" aria-label="search button">
                            Search &nbsp;
                            <i className="fa fa-search"> </i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SearchBar;