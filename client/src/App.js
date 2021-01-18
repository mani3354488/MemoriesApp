import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserDash from "./components/User/UserDash";

const App = () => {
    
    return (
        <Router>
            <Route path="/userdash" component={UserDash} />
        </Router>
    );
}

export default App;