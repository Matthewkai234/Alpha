import React, { useState } from 'react';
import './steyle.css'; 
import engineImage from '../../img/engine.png'; 

function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [items, setItems] = useState([]);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const addItem = () => {
        const newItems = Array(quantity).fill('Generator');
        setItems([...items, ...newItems]);
    };

    return (
        <div className="product-page">
            <header className="header">
                <div className="cart-icon-container">
                  
                    <span className="cart-count">{items.length}</span>
                </div>
            </header>
            <div className="product-container">
                <div className="product-image">
                    <img src={engineImage} alt="Generators" />
                </div>
                <div className="product-details">
                    <h1>Generators</h1>
                    <p className="price">$200.00</p>
                    <div className="buttons-row">
                        <div className="quantity-container">
                            <button onClick={handleDecrease} className="button">-</button>
                            <span className="quantity-text">{quantity}</span>
                            <button onClick={handleIncrease} className="button">+</button>
                        </div>
                        <button onClick={addItem} className="add-to-cart-button">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
