import React, { useState } from 'react';
import './steyle.css';

const Product = () => {
    const [quantity, setQuantity] = useState(1); 

 
    const handleAddToCart = () => {
        alert('Added to cart!');
    };

 
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

   
    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleCompare = () => {
        alert('Compare feature coming soon!');
    };

    return (
        <div className="desktop">
            <div className="div">
                <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/xjSigXcI/img/rectangle-50.png" />
                <div className="overlap">
                    <div className="group">
                      
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group">
                                <div className="text-wrapper-2" onClick={decrementQuantity}>-</div>
                                <div className="text-wrapper-4">{quantity}</div>
                                <div className="text-wrapper-3" onClick={incrementQuantity}>+</div>
                            </div>
                        </div>
                        <div className="overlap-wrapper">
                            <div className="div-wrapper" onClick={handleAddToCart}>
                                <div className="text-wrapper-5">Add To Cart</div>
                            </div>
                        </div>
                        <div className="frame-wrapper">
                            <div className="frame" onClick={handleCompare}>
                                <div className="text-wrapper-6">+</div>
                                <div className="text-wrapper-7">Compare</div>
                            </div>
                        </div>
                      
                    </div>
                    <div className="text-wrapper-19">$ .200.00</div>
                </div>
                <div className="text-wrapper-20">Generators</div>
            </div>
        </div>
    );
};

export default Product; 
