
import "./App.css";
import NavBar from "./Components/Common/NavBar";
import MainWallpaper from "./assets/MainWallpaper.png";
import SlidingArea from "./Components/SlidingArea/SlidingArea";
import Footer from "./Components/Common/Footer";
import ProductList from "./Components/ProductList";
import { CartConterxtProvider } from "./Components/cartContext.js"
function App() {
  return (
    <>
      <CartConterxtProvider>
        <NavBar />
        <div className="MainWallpaper">
          <img
            alt="MainWallpaper"
            src={MainWallpaper}
            style={{ width: "100%", height: "100%", filter: "blur(6px)" }}
          />
        </div>

        <ProductList />
        <SlidingArea />
        <Footer />


      </CartConterxtProvider>


    </>
  );
}

export default App;
