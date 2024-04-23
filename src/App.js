import Footer from "./Components/Footer";
import HeadBanner from "./Components/HeadBanner";
import NavBar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import SectionHeaderText from "./Components/SectionHeaderText";
function App() {
  return (
    <>
      <NavBar/>

      <HeadBanner />

      <SectionHeaderText text="Special Offers"/>
      <ProductList/>

      <Footer/>
    </>
  );
}

export default App;
