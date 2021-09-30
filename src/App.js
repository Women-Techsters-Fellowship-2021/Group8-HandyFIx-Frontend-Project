import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Pages/login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
         
        <Route path="/" component={Login} /> 
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
