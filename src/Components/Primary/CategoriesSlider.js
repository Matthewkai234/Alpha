import "../Styling/HomepageStyle.css";
import CircleArrowButton from "../Misc/CircleArrowButton";

import Engine from "../../Images/Engine.png";
import wheelsCategory from "../../Images/wheelsCategory.png";
import generatorsCategory from "../../Images/generatorsCategory.png";
import accessoriesCategory from "../../Images/accessoriesCategory.png";
import oilCategory from "../../Images/oilCategory.png";
import discsCategory from "../../Images/discsCategory.png";



export default function CategoriesSlider() {
          


  return(
        <> 
          
        <div className="categories-slider">
        
            
          <div className='home-categories-gallery-wrap'>
          <CircleArrowButton direction="left" onClick={(evt)=>{
                  const slider = evt.currentTarget.nextElementSibling.querySelector('.slider');
                  if (slider) {
                  evt.currentTarget.nextElementSibling.scrollLeft -= 2000;
          }}}/>
            <div className="over-slider" onWheel={(evt)=>{
                  evt.preventDefault();
                  evt.currentTarget.scrollLeft += evt.deltaY;
            }}>
                <div className="slider">
                
                <span><img className='slide-sheet-category-generator-image' src={generatorsCategory} /></span>
                <span><img className='slide-sheet-category-image-wheel' src={wheelsCategory} /></span>
                <span><img className='slide-sheet-category-image-accesories' src={accessoriesCategory} /></span>
                </div>
                <div className="slider">
                <span><img className='slide-sheet-category-image-engine' src={Engine} /></span>
                <span><img className='slide-sheet-category-image-oils' src={oilCategory} /></span>
                <span><img className='slide-sheet-category-image-discs' src={discsCategory} /></span>
                </div>
            </div>
            <CircleArrowButton direction="right" onClick={(evt)=>{
                  const slider = evt.currentTarget.previousElementSibling.querySelector('.slider');
                  if (slider) {
                  evt.currentTarget.previousElementSibling.scrollLeft += 2000;
                  }}}/>
          </div>
        </div>

        </>
  );
}