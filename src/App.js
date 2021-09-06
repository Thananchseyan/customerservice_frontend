import { Route, Switch } from "react-router-dom";

//components
import Header from "./components/header";
import Navbar from './components/navbar';
import Preloader from './components/preloader';

// Pages
import Home from './pages/home';
import AddEmployee from "./pages/addEmployee";
import ViewEmployee from "./pages/viewEmployee";
import Profile from "./pages/profile";
import AssignWorker from "./pages/assignWorker";
import ViewWork from "./pages/viewWork";
import ReviewUpdate from "./pages/changeReview";
import Work from "./pages/work";


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
        <Route exact path='/viewWork'>
          <ViewWork/>
        </Route>
        <Route exact path='/viewFinishedWork'>
          <ViewWork/>
        </Route>
        <Route exact path='/editRating'>
          <ReviewUpdate/>
        </Route>
        <Route exact path='/work'>
          <Work/>
        </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
