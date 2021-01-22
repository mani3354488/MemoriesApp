import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserDash from "./components/User/UserDash";
import AdminDash from "./components/Admin/AdminDash";
import LandingPage from "./components/LandingPage/LandingPage";



const App = () => {
    
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/userdash" component={UserDash} />
                <Route exact path="/admindash" component={AdminDash} />
            </Switch>
        </Router>
    );
}

export default App;