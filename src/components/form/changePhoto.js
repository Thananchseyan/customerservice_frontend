const PhotoUpdate  = () => {
    return ( 
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="photo">Upload photo</label>
                    <input type="text" className="form-control" value="" id="photo" placeholder="Photo" required/>
                    <small id="photoError" className="error form-text text-muted error "> </small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>                                                                        
            </form>
            <div>
                <img src="assets/images/user/profile.jpg" alt="Preview Profile Photo" style={{display:'block',height:'200px',width:'250px',margin:'auto',paddingTop:'15px',justifyContent:'center'}}/> 
            </div>
        </div>
     );
}
 
export default PhotoUpdate ;