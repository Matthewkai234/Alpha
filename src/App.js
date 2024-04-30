
import "./App.css";
import NavBar from "./Components/Common/NavBar";
import MainWallpaper from "./assets/MainWallpaper.png";
import Nu from "./Components/Number/Nu";
import Counter from "./Components/Number/Counter";
import SlidingArea from "./Components/SlidingArea/SlidingArea";
import Footer from "./Components/Common/Footer";
import ProductList from "./Components/ProductList";
function App() {
  return (
    <>
  <NavBar/>
  <div className="MainWallpaper">
        <img
          alt="MainWallpaper"
          src={MainWallpaper}
          style={{ width: "100%", height: "100%", filter: "blur(6px)" }}
        />
      </div>
      <Nu/>
    
      <ProductList/>
<Counter/>
<SlidingArea/>
<Footer/>

 

    </>
  );
}

export default App;
