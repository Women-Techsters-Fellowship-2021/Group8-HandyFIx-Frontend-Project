import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './Pages/landing';


function App() {
  return (
    <div>
    
     <BrowserRouter>
     
        <LandingPage/>
     </BrowserRouter>
    </div>
  );
}

export default App;
