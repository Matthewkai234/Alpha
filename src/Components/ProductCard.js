import { useState } from "react";
import Star from "./Star";
import "./Styling/ProductCard_ProductList_Style.css";
import "./Styling/StarStyle.css";
import CardOverlay from "./CardOverlay";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  // Ensure the rating is between 0 and 5
  const rating = Math.min(Math.max(0, product.rating), 5);

  // Generate an array of Star components based on the rating
  const stars = Array.from({ length: rating }, (_, index) => <Star key={index} fill={true} />);

  // Fill the remaining stars with empty stars
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
        {/* {isHovered && ( */}
          <div className={`overlay ${isHovered ? 'active' : ''}`}>
            {isHovered && <CardOverlay/>}{/* Render the overlay and button within flex container */}
          </div>
        {/* )} */}
    </div>
  );
}

export default ProductCard;
