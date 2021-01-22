import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserDash from "./components/User/UserDash";
import AdminDash from "./components/Admin/AdminDash";
import TransporterDash from "./components/Transporter/TransporterDash";
import LandingPage from "./components/LandingPage/LandingPage";
// import SignIn from "./components/SignIn/SignIn";
// import SignUp from "./components/SignUp/SignUp";



const App = () => {
    
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/userdash" component={UserDash} />
                <Route exact path="/admindash" component={AdminDash} />
                <Route exact path="/transporterdash" component={TransporterDash} />
                {/* <Route exact path="/login" component={SignIn} />
                <Route exact path="/signup" component={SignUp} /> */}
            </Switch>
        </Router>
    );
}

export default App;