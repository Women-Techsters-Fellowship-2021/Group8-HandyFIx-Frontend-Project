import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import AppState from './Pages/appState'
import Login from './Pages/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppState>
      <Route path="/login" component={Login} />
      </AppState>
      </BrowserRouter>
    </div>
  );
}

export default App;
