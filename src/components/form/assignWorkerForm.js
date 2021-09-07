const AssignForm = () => {
    return ( 
        <form>
            <div className="form-group">
                <label htmlFor="workerId">Work ID</label>
                <input type="text" className="form-control" id="workerId"  placeholder="Worker ID" required/>
                <small id="workerIdError" className="error form-text text-muted">Enter a workerId</small>
            </div>
            <div className="form-group">
                <label htmlFor="workerId">Worker ID</label>
                <input type="text" className="form-control" id="workerId" placeholder="Worker ID" required/>
                <small id="workerIdError" className="error form-text text-muted">Enter a workerId</small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>                                                    
        </form>
     );
}
 
export default AssignForm;