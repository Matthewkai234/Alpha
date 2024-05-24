import axios from "axios";
import "../Styling/ProductCard_ProductList_Style.css";
import { useState, useEffect, useContext } from "react";
import { CartConterxt } from "./cartContext";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [current, setCurrent] = useState(1);
  const [title, setTitle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCartContext } = useContext(CartConterxt);
  const navigate = useNavigate();

  const [dataTour, setDataTour] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  // State variables for filters with default values "non"
  const [selectedType, setSelectedType] = useState("none");
  const [selectedPieceType, setSelectedPieceType] = useState("none");
  const [selectedSupplement, setSelectedSupplement] = useState("none");

  const getTours = async () => {
    try {
      setIsLoading(true);
      const params = new URLSearchParams();
      params.append("page", current);

      // Add filter parameters only if they are not "non"
      if (selectedType !== "none") params.append("typecar", selectedType);
      if (selectedPieceType !== "none") params.append("picecType", selectedPieceType);
      if (selectedSupplement !== "none") params.append("supplement", selectedSupplement);

      const { data } = await axios.get(`http://localhost:4000/product?${params.toString()}&limit=1`);
      setTitle(data.title);
      setDataTour(data.products);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching tour data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTours();
  }, [current, selectedType, selectedPieceType, selectedSupplement]);

  const handlePageClick = (pageNumber) => {
    setCurrent(pageNumber + 1);
  };

  const addToCart = async (productId) => {
    try {
      const res = await addToCartContext(productId);
      if (res.message === "success") {
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="product-list">
      <div className="filters">
        <label>Type:</label>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="none">None</option>
          {["BMW", "KIA", "FORD", "MERCEDES", "TOYOTA", "HYUNDAI"].map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <label>Piece Type:</label>
        <select value={selectedPieceType} onChange={(e) => setSelectedPieceType(e.target.value)}>
          <option value="none">None</option>
          {["engine", "turbo", "exhaust"].map((pieceType) => (
            <option key={pieceType} value={pieceType}>{pieceType}</option>
          ))}
        </select>

        <label>Supplement:</label>
        <select value={selectedSupplement} onChange={(e) => setSelectedSupplement(e.target.value)}>
          <option value="none">None</option>
          {["GPS", "seats", "tires"].map((supplement) => (
            <option key={supplement} value={supplement}>{supplement}</option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="product-cards">
            {dataTour && dataTour.map((product) => (
              <div className="product-card" key={product._id}>
                <img src={product.image.secure_url} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>

                <button className="add-to-cart-btn" onClick={() => addToCart(product._id)}>
                  Add to Cart
                </button>

                <div className="price-container">
                  <div className="original-price">{product.price}$</div>
                  <div className="discounted-price">Discount: {product.dicount}%</div>
                  <div className="final-price">{product.finalPrice}$</div>
                </div>

                <div className="product-details">
                  <button className="add-to-cart-button">
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="button-icon">
                      <g id="Cart Icon">
                        <path id="Vector" d="M3.97665 0.999939L1 4.96881V18.8599C1 19.3862 1.20907 19.8909 1.58123 20.2631C1.95338 20.6352 2.45813 20.8443 2.98444 20.8443H16.8755C17.4018 20.8443 17.9065 20.6352 18.2787 20.2631C18.6508 19.8909 18.8599 19.3862 18.8599 18.8599V4.96881L15.8833 0.999939H3.97665Z" stroke="#B88E2F" strokeWidth="1.98444" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_2" d="M1 4.96869H18.8599" stroke="#B88E2F" strokeWidth="1.98444" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_3" d="M13.8987 8.93768C13.8987 9.99029 13.4805 10.9998 12.7362 11.7441C11.9919 12.4884 10.9824 12.9066 9.92981 12.9066C8.8772 12.9066 7.8677 12.4884 7.12339 11.7441C6.37909 10.9998 5.96094 9.99029 5.96094 8.93768" stroke="#B88E2F" strokeWidth="1.98444" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>
                  </button>
                  <div className="product-actions">
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center my-5">
                <li className={`z-1 page-item ${current === 1 ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => handlePageClick(current - 2)}>
                    Previous
                  </button>
                </li>
                {Array.from({ length: Math.ceil(title / 1) || 0 }).map((_, pageIndex) => {
                  const isCurrent = current === pageIndex + 1;
                  const isWithinRange = pageIndex + 1 >= current - 2 && pageIndex + 1 <= current + 2;

                  if (isWithinRange) {
                    return (
                      <li key={pageIndex} className={`z-1 page-item ${isCurrent ? "active" : ""}`}>
                        <button className="page-link" onClick={() => handlePageClick(pageIndex)}>
                          {pageIndex + 1}
                        </button>
                      </li>
                    );
                  } else if (pageIndex === 0) {
                    return (
                      <li key="ellipsis-before" className="z-1 page-item disabled">
                        <span className="page-link">...</span>
                      </li>
                    );
                  } else if (pageIndex === Math.ceil(title / 1) - 1) {
                    return (
                      <li key="ellipsis-after" className="z-1 page-item disabled">
                        <span className="page-link">...</span>
                      </li>
                    );
                  }
                  return null;
                })}
                <li className={`z-1 page-item ${current === Math.ceil(title / 2) ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => handlePageClick(current)}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductList;
