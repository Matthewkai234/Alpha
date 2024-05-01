import CircleArrowButton from "./CircleArrowButton";
import accessoriesCategory from "../../Images/accessoriesCategory.png";
import Engine from "../../Images/Engine.png";
import "../Styling/HomepageStyle.css";
import CarScreen from "../../Images/carScreen.jpg";

export default function HomeSlideSheet() {

    return (
        <>
        
            <div className='home-page-sliding-sheet'>

                <div className="home-page-sliding-sheet-header-description-button">
                    <h2 className='home-slide-sheet-header'>Discover Our Latest</h2>
                    <h2 className='home-slide-sheet-header-continue'>Products</h2>
                    <p className='home-slide-sheet-description'>Our designer already made a lot of beautiful <br/> prototipe of rooms that inspire you </p>
                    <button className='home-slide-sheet-explore-more-button'>Explore More</button>
                </div>

                <div className='slide-sheet-gallery-wrap'>
                <CircleArrowButton direction="left" onClick={(evt)=> {
                        const slider = evt.currentTarget.nextElementSibling.querySelector('.slide-sheet-scrolling-for-latest-products-slider-div');
                        if (slider) {
                            evt.currentTarget.nextElementSibling.scrollLeft -= 900;
                        }
                    }} />

                    <div className='slide-sheet-scrolling-for-latest-products' onWheel={(evt) => {
                        evt.preventDefault();
                        evt.currentTarget.scrollLeft += evt.deltaY;
                    }}>

                        <div className="slide-sheet-scrolling-for-latest-products-slider-div">
                            <span><img className='slide-sheet-latest-prodcuts-image' src={Engine} /></span>
                            <span><img className='slide-sheet-latest-prodcuts-image' src={CarScreen} /></span>
                            
                        </div>

                        <div className="slide-sheet-scrolling-for-latest-products-slider-div">
                            <span><img className='slide-sheet-latest-prodcuts-image' src={accessoriesCategory} /></span>
                            <span><img className='slide-sheet-latest-prodcuts-image' src={CarScreen} /></span>
                           
                        </div>
                    </div>

                    <CircleArrowButton direction="right" onClick={(evt)=> {
                        const slider = evt.currentTarget.previousElementSibling.querySelector('.slide-sheet-scrolling-for-latest-products-slider-div');
                        if (slider) {
                            evt.currentTarget.previousElementSibling.scrollLeft += 900;
                        }
                    }}/>
                </div>
            </div>
        
        </>
    );
}