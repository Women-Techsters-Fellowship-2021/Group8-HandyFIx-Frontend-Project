import React from "react";
import SignUp from  './Pages/signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          
          <Route exact path="/" component={SignUp} />
          
        </Switch>
 
    </Router>
  );
}
export default App;
