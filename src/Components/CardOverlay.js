import "../Styling/CardOverlayStyle.css";
function CardOverlay() {
    return (
      <>
          <div className="product-details">
              <button className="add-to-cart-button">
                  <span className="button-text-p">Add to cart</span>
                  <svg 
                      width="20" 
                      height="22" 
                      viewBox="0 0 20 22" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="button-icon"
                      >
                      <g id="Cart Icon">
                          <path id="Vector" d="M3.97665 0.999939L1 4.96881V18.8599C1 19.3862 1.20907 19.8909 1.58123 20.2631C1.95338 20.6352 2.45813 20.8443 2.98444 20.8443H16.8755C17.4018 20.8443 17.9065 20.6352 18.2787 20.2631C18.6508 19.8909 18.8599 19.3862 18.8599 18.8599V4.96881L15.8833 0.999939H3.97665Z" 
                              stroke="#B88E2F" strokeWidth="1.98444" strokeLinecap="round" strokeLinejoin="round"
                          />
                          <path id="Vector_2" d="M1 4.96869H18.8599" 
                              stroke="#B88E2F" strokeWidth="1.98444" strokeLinecap="round" strokeLinejoin="round"
                          />
                          <path id="Vector_3" d="M13.8987 8.93768C13.8987 9.99029 13.4805 10.9998 12.7362 11.7441C11.9919 12.4884 10.9824 12.9066 9.92981 12.9066C8.8772 12.9066 7.8677 12.4884 7.12339 11.7441C6.37909 10.9998 5.96094 9.99029 5.96094 8.93768" 
                              stroke="#B88E2F" strokeWidth="1.98444" strokeLinecap="round" strokeLinejoin="round"
                          />
                      </g>
                  </svg>
  
              </button>
  
              <div className="product-actions">
  
                  <button className="share-button">                    
                      <svg className="button-icon-s" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="gridicons:share">
                              <path id="Vector" d="M12.2095 11.2496C11.6841 11.2496 11.2095 11.4563 10.8535 11.7876L6.14947 9.04959C6.18281 8.89626 6.20947 8.74293 6.20947 8.58293C6.20947 8.42293 6.18281 8.26959 6.14947 8.11626L10.8495 5.37626C11.2095 5.70959 11.6828 5.91626 12.2095 5.91626C13.3161 5.91626 14.2095 5.02293 14.2095 3.91626C14.2095 2.80959 13.3161 1.91626 12.2095 1.91626C11.1028 1.91626 10.2095 2.80959 10.2095 3.91626C10.2095 4.07626 10.2361 4.22959 10.2695 4.38293L5.56947 7.12293C5.20947 6.78959 4.73614 6.58293 4.20947 6.58293C3.10281 6.58293 2.20947 7.47626 2.20947 8.58293C2.20947 9.68959 3.10281 10.5829 4.20947 10.5829C4.73614 10.5829 5.20947 10.3763 5.56947 10.0429L10.2681 12.7883C10.2306 12.9392 10.2109 13.094 10.2095 13.2496C10.2095 13.6452 10.3268 14.0318 10.5465 14.3607C10.7663 14.6896 11.0787 14.946 11.4441 15.0974C11.8096 15.2487 12.2117 15.2883 12.5997 15.2112C12.9876 15.134 13.344 14.9435 13.6237 14.6638C13.9034 14.3841 14.0939 14.0277 14.171 13.6398C14.2482 13.2518 14.2086 12.8497 14.0572 12.4842C13.9059 12.1188 13.6495 11.8064 13.3206 11.5867C12.9917 11.3669 12.605 11.2496 12.2095 11.2496Z" 
                                  fill="white"/>
                          </g>
                      </svg>
                      <span className="button-text-s">Share</span>
                  </button>
                  
                  <button className="fav-button">                    
                      <svg className="button-icon-s" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="Heart">
                              <path id="Vector" d="M8.20921 14.6191C-5.12386 7.24963 4.20947 -0.750364 8.20921 4.30834C12.2095 -0.750366 21.5428 7.24963 8.20921 14.6191Z" 
                                  stroke="white" 
                                  strokeWidth="1.8"/>
                          </g>
                      </svg>
                      <span className="button-text-s">Add to favorites</span>
                  </button>                    
              </div>
          </div>
      </>
    );
  }
  
  export default CardOverlay;