import {Link} from 'react-router-dom';
import NotificationBar from './notificationBar';


function Notificator(){
    return(
        <div className="col-xl-8 col-md-12">
            <div className="card Notification">
                <div className="card-header">
                    <h5>New Notifications</h5>
                </div>
                <div className="card-block px-0 py-3">
                    <div className="">
                        <div className="">
                            <div class="">
                                <NotificationBar/>
                                <NotificationBar/>
                                <NotificationBar/>        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notificator;