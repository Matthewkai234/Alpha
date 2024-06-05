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
import ProductList from "./Components/Card/ProductList";
import Productlist2 from "./Components/Productlist2";
import ProductPage from "./Components/Product/Pruduct";
import { AboutUsPage } from "./Body";
import { Header } from "./Header";
import AddProduct from "./AddProduct";
import NavBar from "./Components/Common/NavBar";
import SlidingArea from "./Components/SlidingArea/SlidingArea";
import Footer from "./Components/Common/Footer";
import MainWallpaper from "./assets/MainWallpaper.png";
import ProfileCard from "./Components/UserProfile/ProfileCard";
import Breadcrumb from "./Components/Breadcrumb/Breadcrumb"
import Home from "./Components/hompage/Primary/Home";
import { CartConterxtProvider } from "./Components/cartContext";
import Checkout from "./Components/Checkout/Checkout";

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
      <Route path="/" element={<Login/>} />
      
      <Route path="/home" element={<Home/>} />
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
       
        <Route path="/about" element={<>
    <NavBar/>
          <AboutUsPage />
          <Footer/>
        </>} />

        <Route path="/add-product" element={<>
          <NavBar />
          <AddProduct />
          <Footer/>
        </>} />
        <Route path="/ProductPage" element={
          <div>
            <NavBar />
            <ProductPage />
           <ProductList/>
            <SlidingArea />
            <Footer />
          </div>

        } />

<Route path="/user" element={
<div>

<Breadcrumb/>
    <ProfileCard/>
    
   
    <Footer/>
</div>
}/>
<Route path="/Shop" element={
<div>

<CartConterxtProvider>
        <NavBar />
        <div className="MainWallpaper">
          <img
            alt="MainWallpaper"
            src={MainWallpaper}
            style={{ width: "100%", height: "100%", filter: "blur(6px)" }}
          />
        </div>

        <Productlist2 />
        <SlidingArea />
        <Footer />


      </CartConterxtProvider>
      </div>
}/>

      <Route path="/Checkout" element={
          <div>
            <NavBar />
           <Checkout/>
            <Footer />
          </div>
      }/>
   

      </Routes>

    </>
  );
}

export default App;
