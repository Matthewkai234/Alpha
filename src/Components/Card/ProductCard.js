import { useState } from "react";
import Star from "./Star";
import "../Card/ProductCard_ProductList_Style.css";
import "../Card/StarStyle.css";
import CardOverlay from "./CardOverlay";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  
  const rating = Math.min(Math.max(0, product.rating), 5);

  const stars = Array.from({ length: rating }, (_, index) => <Star key={index} fill={true} />);

  
  for (let i = rating; i < 5; i++) {
    stars.push(<Star key={i} fill={false} />);
  }

  return (
   
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        
        <img src={product.image} alt={product.name} className="product-image" />

        <h3 className="product-name">{product.name}</h3>

        <div className="stars-container">
        {stars}
        </div>

        <div className="product-brand">{product.brand}</div>
        <div className="product-code">{product.code}</div>

        <div className="price-container">
            <div className="discounted-price">{product.discountedPrice}$</div>
            <div className="original-price">{product.originalPrice}$</div>            
        </div>

        <div className={`overlay ${isHovered ? 'active' : ''}`}>
          {isHovered && <CardOverlay/>}
        </div>
        
    </div>
    
  );
}

export default ProductCard;