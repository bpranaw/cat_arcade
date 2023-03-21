import './App.css'
import {Link, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Match from './components/Match';
import {useEffect, useState} from "react";
import initialState from "./initialState";
import Leaderboard from './components/Leaderboard';

function App() {


  useEffect(() => {
    console.log("-- App rerenders --");
  });

  return (
    <div className="App">
      <nav>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <a href="/Games/CatJump/game.html">Cat Jump</a>
        </div>
      </nav>
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/leaderboard" element={<Leaderboard/>}/>
            </Routes>
        </div>
    )
}

export default App
