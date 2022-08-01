import React,{useState} from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Gallery } from './pages/Gallery';
import { Vision } from './pages/Vision';
import { Chat } from './pages/Chat';
import { Team } from './pages/Team';

function App() {
  const [valid, setValid] = useState(false);
  const [ukey, setUkey] = useState("");
  const setstate=(data,key)=>{
    setValid(data);
    setUkey(key);
  }
  return (
    <Router>
      <Navbar setstate={setstate}/>
      <Routes>
      <Route exact path='/' element= {<Home valid={valid} ukey={ukey}/> }/>
      </Routes>
      <Routes>
      <Route exact path='/vision' element= {<Vision /> }/>
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
