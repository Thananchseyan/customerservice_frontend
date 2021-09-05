import { Route, Switch } from "react-router-dom";


import Header from "./components/header";
import Navbar from './components/navbar';
import Preloader from './components/preloader';

import Home from './pages/home';
import AddEmployee from "./pages/addEmployee";
import ViewEmployee from "./pages/viewEmployee";
import Profile from "./pages/profile";
import AssignWorker from "./pages/assignWorker";


function App() {
  return (
    <div>
      {/* [ Pre-loader ] start */}
      <Preloader/>
      { /* [ Pre-loader ] End 
        [ navigation menu ] start */}
       <Navbar/>
       {/* </div> [ navigation menu ] end 
       [ Header ] start */}
       <Header/>
       {/*<!-- [ Header ] end --> */}
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/addModerator'>
          <AddEmployee type="Moderator"/>
        </Route>
        <Route exact path='/addWorker'>
          <AddEmployee type="Worker"/>
        </Route>
        <Route exact path='/viewWorker'>
          <ViewEmployee type="Worker"/>
        </Route>
        <Route exact path='/viewModerator'>
          <ViewEmployee type="Moderator"/>
        </Route>
        <Route exact path='/profile'>
          <Profile/>
        </Route>
        <Route exact path='/assignWorker'>
          <AssignWorker/>
        </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
