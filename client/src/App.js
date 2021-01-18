import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserDash from "./components/User/UserDash";
import AdminDash from "./components/Admin/AdminDash";

const App = () => {
    
    return (
        <Router>
            <Route path="/" component={UserDash} />
            <Route path="/admin" component={AdminDash} />
        </Router>
    );
}

export default App;