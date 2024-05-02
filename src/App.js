
import "./App.css";

import Pruduct from "./Components/Product/Pruduct";

import NavBar from "./Components/Common/NavBar";
import Footer from "./Components/Common/Footer";
import Showmore from "../src/Components/Card/Showmore"
import SlidingArea from "./Components/SlidingArea/SlidingArea";
import ProductList from "../src/Components/Card/ProductList";
function App() {
 
  return (
    <>
    <NavBar/>
   
            <Pruduct/>
       
  <ProductList/>
  <Showmore/>
    <SlidingArea/>
    <Footer/>
      
    </>
  );
}

export default App;
