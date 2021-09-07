const PasswordChanger = () => {
    return ( 
        <form>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" value="" id="password" placeholder="Password"  required/>
                <small id="nameError" className="error form-text text-muted error "> </small>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword"  placeholder="Confirm Password" required/>
                <small id="nameError" className="error form-text text-muted error "> </small>
            </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
     );
}
 
export default PasswordChanger;