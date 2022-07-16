import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Gallery } from './pages/Gallery';
import { Roadmap } from './pages/Roadmap';
import { Chat } from './pages/Chat';
import { Team } from './pages/Team';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element= {<Home /> }/>
      </Routes>
      <Routes>
      <Route exact path='/roadmap' element= {<Roadmap /> }/>
      </Routes>
      <Routes>
      <Route exact path='/chats' element= {<Chat/> }/>
      </Routes>
      <Routes>
      <Route exact path='/gallery' element= {<Gallery /> }/>
      </Routes>
      <Routes>
      <Route exact path='/team' element= {<Team /> }/>
      </Routes>
    </Router>
    
  );
}

export default App;
