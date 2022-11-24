import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Button from './assets/button';
import Home from "./pages/home";
import Game from "./pages/game"

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>

  <Route path="/game" element={<Home/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
