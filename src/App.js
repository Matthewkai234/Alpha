import { useState } from "react";
import "./App.css";
import Engine from "./assets/Engine.png";
import Cart from "./components/Cart";
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom";

function App() {
  const [products, setProducts] = useState ([ 
    {
      image: Engine,
      name: "Product1",
      price: 69,
      quantity: 2,
    }
  ]);

  function removeItem(idx){
    setProducts((previous)=>{
      const newProducts =[...previous];
      newProducts.splice(idx,1)
      return newProducts
    })
  }

  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/cart" element={<Cart products={products} removeItem={removeItem} />} />
      </Routes>
    </>
  );
}

export default App;
