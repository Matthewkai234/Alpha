import { useState } from "react";
import "./App.css";
import Engine from "./assets/Engine.png";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";

function App() {
  const [products, setProducts] = useState([
    {
      image: Engine,
      name: "Product1",
      price: 69,
      quantity: 2,
    },
  ]);

  function removeItem(idx) {
    setProducts((previous) => {
      const newProducts = [...previous];
      newProducts.splice(idx, 1);
      return newProducts;
    });
  }

  return (
    <>
      <Routes>
        <Route
          path="/cart"
          element={<Cart products={products} removeItem={removeItem} />}
        />
      </Routes>
    </>
  );
}

export default App;
