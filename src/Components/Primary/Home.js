import "../Styling/homeGrid.css";
import NavBar from "../Common/NavBar.js";
import Footer from "../Common/Footer.js";
import CategoriesSlider from "./CategoriesSlider.js";
import HomeSlideSheet from "../Misc/HomeSlideSheet.js";
import HeadBanner from "./HeadBanner.js";
import SectionHeaderText from "../Misc/SectionHeaderText.js";
import ProductList from "./ProductList.js";

export default function Home() {
  return (
    <>
      <div className="home-web-container">

        <NavBar />

        <div className='home-main-cover'>
          <HeadBanner/>
        </div>

        <div className='categories-slider'>
          <CategoriesSlider />
        </div>

        <div className='home-flash-sales'>
          <SectionHeaderText text="Special Offers"/>
          <ProductList/>
        </div>

        <div className='home-page-sliding-sheet-for-latest-products' >
          <HomeSlideSheet/>
        </div>

        <div className="footer">
          <Footer />
        </div>

      </div>
    </>
  );
}