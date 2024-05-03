import React, { useState } from "react";
import "./style.css";

const AddProductButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="add-product-button-container">
      <button onClick={handleClick} className="add-product-button">
        ADD PRODUCT
      </button>
    </div>
  );
};

export default AddProductButton;
