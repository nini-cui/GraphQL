import logo from './logo.svg';
import './App.css';
import CharactersList from "./pages/CharactersList";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/Character";
import Search from './pages/Search';

// in app.js file, Character file is imported and called,
// result is returned

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CharactersList/>} />
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/:id" element={<Character/>} />
      </Routes>
    </div>
  );
}

export default App;
