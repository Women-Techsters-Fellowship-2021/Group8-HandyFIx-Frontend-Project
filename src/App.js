import React from "react";
import SignUp from  './Pages/signup';
import Login from './Pages/login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './Pages/landing';

function App() {
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={ LandingPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/login" component={Login} /> 
        </Switch>
    </Router>


  );
}
export default App;
