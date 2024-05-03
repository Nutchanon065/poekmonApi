import { createContext } from "react";
import Parent from "./components/Parent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pokedex from "./Pokedex";
import './App.css'


function App() {
  return (
    <>
      <Router>
        <nav>
          <Link style={{padding:5}} to="/">Home</Link>
          <Link style={{padding:5}} to="/pokedex/zamazenta">PokeDex</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Parent />} />
          <Route path="/pokedex/:pokeName" element={<Pokedex />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;