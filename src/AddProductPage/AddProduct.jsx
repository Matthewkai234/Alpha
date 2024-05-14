import React, { useState } from "react";
import "./style.css";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState(1);
  const [productDate, setProductDate] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [typeOfCar, setTypeOfCar] = useState("");
  const [price, setPrice] = useState("");
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files);
    setProductImages(imagesArray);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const imagesArray = Array.from(files);
    setProductImages(imagesArray);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitClicked(true);

    if (
      productName.trim() === "" ||
      description.trim() === "" ||
      availableQuantity === 0 ||
      productDate.trim() === "" ||
      productImages.length === 0 ||
      typeOfCar.trim() === "" ||
      price.trim() === ""
    ) {
      setErrorMessage("All fields are required.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000); 
      return;
    }

    console.log({
      productName,
      description,
      availableQuantity,
      productDate,
      productImages,
      typeOfCar,
      price,
    });

    setProductName("");
    setDescription("");
    setAvailableQuantity(1);
    setProductDate("");
    setProductImages([]);
    setTypeOfCar("");
    setPrice("");
    setIsSubmitClicked(false);
  };

  return (
    <div className="add-product-page">
      <div className="container">
        <div className="Add-Product">Add New Product</div>

        <div className="div">
        
          <div className="overlap-group">
            <div className="product-info">
              <div className="product-name">Product Name:</div>
              <input
                type="text"
                className={`input-box ${isSubmitClicked && productName.trim() === "" && "red-border"}`}
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              <div className="description">Description:</div>
              <input
                type="text"
                className={`input-box2 ${isSubmitClicked && description.trim() === "" && "red-border"}`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <div className="available-quantity">Available Quantity:</div>
              <div>
                <button
                  className="increment-button"
                  onClick={() => setAvailableQuantity((prev) => prev + 1)}
                >
                  +
                </button>
                <span className="quantity">{availableQuantity}</span>
                <button
                  className="decrement-button"
                  onClick={() => setAvailableQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  -
                </button>
              </div>
              <div className="product-date">Product Date:</div>
              <input
                type="date"
                className={`input-box ${isSubmitClicked && productDate.trim() === "" && "red-border"}`}
                value={productDate}
                onChange={(e) => setProductDate(e.target.value)}
                required
              />
              <div className="image-upload-container">
                <label htmlFor="fileInput" className="upload-button">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="fileInput"
                  multiple
                  onChange={handleImageChange}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="product-details">
              <div className="type-of-car">Type Of Car:</div>
              <input
                type="text"
                className={`input-box4 ${isSubmitClicked && typeOfCar.trim() === "" && "red-border"}`}
                value={typeOfCar}
                onChange={(e) => setTypeOfCar(e.target.value)}
                required
              />
              <div className="price">Price:</div>
              <input
                type="number"
                className={`input-box5 ${isSubmitClicked && price.trim() === "" && "red-border"}`}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <button
                type="submit"
                className="button"
                onClick={handleSubmit}
                disabled={isSubmitClicked && (
                  productName.trim() === "" ||
                  description.trim() === "" ||
                  availableQuantity === 0 ||
                  productDate.trim() === "" ||
                  productImages.length === 0 ||
                  typeOfCar.trim() === "" ||
                  price.trim() === ""
                )}
              >
                Add Product
              </button>
              {errorMessage && (
                <div className="error-message">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
          <div className="product-images-container">

            <div className="product-card">
              <img src={productImages.length > 0 ? URL.createObjectURL(productImages[0]) : "https://via.placeholder.com/150"} alt="Product Preview" className="product-image" />
              <div className="product-details">
                <h3 className="product-title">{productName || "Product Title"}</h3>
                <p className="product-price">{`$${price}` || "$100"}</p>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
