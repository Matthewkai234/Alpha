import { useState } from "react";
import "./App.css";
import Engine from "./assets/Engine.png";
import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./Components/ForgetPass/forgetPass";
import VerificationCode from "./Components/ForgetPass/code";
import Cart from "./Components/Cart/Cart";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import NewPassword from "./Components/ForgetPass/NewPass";
import Footer from "./Components/footer/Footer";
import Checkout from "./Components/checkout/Checkout";

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
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/codeVer/:email" element={<VerificationCode />} />
        <Route path="/newPass" element={<NewPassword />} />
          <Footer path="/Footer" element={<Footer/>}/>
        <Checkout path="/Checkout" element={<Checkout/>}/>
      </Routes>
    </>
  );
}

export default App;
