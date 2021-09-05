import {Link} from 'react-router-dom';

function NotificationBar(){
    return(
    <div className="unread row align-items-end" style={{marginBottom:'15px'}}>
        <div className="col-sm-2 col-md-2 col-xl-3" style={{margin:'10px'}}>
            <img className="rounded-circle" style={{width:"40px"}} src="assets/images/user/avatar-2.jpg" alt="activity-user"/>
        </div>
        <div className="col-sm-9 col-md-5 col-xl-8" style={{margin:'10px'}}>
            <h6 className="mb-1">Albert Andersen</h6>
            <p className="m-0">Lorem Ipsum is simply dummy…</p>
        </div>
        <div className="col-4 col-sm-7 col-md-3 col-xl-7 mr-auto" style={{margin:'10px'}}>
            <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>21 July 12:56</h6>
        </div>
        <div className="col-6 col-sm-4 col-md-12 col-xl-4" style={{margin:'10px'}}>
            <Link to="#" className="label theme-bg2 text-white f-12">Reject</Link>
            <Link to="#" className="label theme-bg text-white f-12"> View Info</Link>
        </div>
    </div>
    )
}

export default NotificationBar;