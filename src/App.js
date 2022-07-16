import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element= {<Home /> }/>
      </Routes>
    </Router>
    
  );
}

export default App;
