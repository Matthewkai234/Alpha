import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Pruduct from "./Components/Product/Pruduct";
import NavBar from "./Components/Common/NavBar";
import Footer from "./Components/Common/Footer";
import SlidingArea from "./Components/SlidingArea/SlidingArea";
function App() {
 
  return (
    <>
    <NavBar/>
    < Pruduct/>
    <SlidingArea/>
    <Footer/>
      
    </>
  );
}

export default App;
