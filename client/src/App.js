import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserDash from "./components/User/UserDash";
import Auth from "./components/Auth/Auth";


const App = () => {
    
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={UserDash} />
                <Route exact path="/auth" component={Auth} />
            </Switch>
        </Router>
    );
}

export default App;