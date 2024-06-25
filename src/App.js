import './App.css';
import React from "react";
import NavbarHeader from "./components/NavbarHeader";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Landscapes from "./pages/Landscapes";
import Home from "./pages/Home";
import Portraits from "./pages/Portraits";
import Publications from "./pages/Publications";
import Creative from "./pages/Creative";
import Poetry from "./pages/Poetry";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <NavbarHeader/>
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/home" element={<Home/>}/>
        <Route path="/landscapes" element={<Landscapes/>}/>
        <Route path="/portraits" element={<Portraits/>}/>
        <Route path="/publications" element={<Publications/>}/>
        <Route path="/creative" element={<Creative/>}/>
        <Route path="/poetry" element={<Poetry/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;