import Container from "react-bootstrap/Container";
import MainWallpaper from "../assets/MainWallpaper.png";
import "./cartGrid.css";
import "./cartPageStyles.css";
import NavBar from "./NavBar.js";
import { useMemo } from "react";
import { BoxSeam, CheckCircle, Headset, Trash3Fill, Trophy } from "react-bootstrap-icons";
import Footer from "./Footer.js";

export default function Cart({ products, removeItem }) {


  const subTotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.price / product.quantity;
    }, 0);
  }, [products]);

  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }, [products]);



  return (
    <>
      <div className="cart-web-container">
        <NavBar />

        {/*<<< The Main Cover >>> */}

        <div className="MainWallpaper">
          <img
            src={MainWallpaper}
            style={{ width: "100%", height: "100%", filter: "blur(6px)" }}
          />
        </div>

        {/*<<< The Card Table >>> */}


        <div className="table-and-cart">
          <div className="cart-table">
            <div className="cart-data-table">
              <table width="1000px" height="auto">
                <thead className="cart-table-head">
                  <tr style={{fontFamily:'arial', fontSize:'20px', borderRadius:'20px'}} align="center">
                    <th width="100px" height="50px"></th>
                    <th width="100px" height="50px">Product</th>
                    <th width="100px" height="50px">Price</th>
                    <th width="100px" height="50px">Quantity</th>
                    <th width="100px" height="50px">Subtotal</th>
                    <th width="100px" height="50px"></th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product, idx) => (
                    <tr align="center" key={idx}>
                      <td>
                        <img
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: 10,
                          }}
                          src={product.image}
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>${product.price.toFixed(2)}</td>
                      <td>{product.quantity}</td>
                      <td>${(product.price / product.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          style={{
                            border: "none",
                            background: "none",
                            color: "brown",
                          }}
                        >
                          <Trash3Fill
                            className="delete-from-cart-button"
                            style={{ height: "20px", width: "20px" }}
                            onClick={()=>removeItem(idx)}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/*<<<The Check Out Card >>> */}

          <div className="checkout-card">
            <div className="checkout-card-div-middle">
              <Container className="cart-total-container">
                <h4 className="cart-checkout-heading-4">Cart Total</h4>
                <br />
                <p className="cart-total-subtotal-total-price">
                  Subtotal{" "}
                  <span className="in-checkout-cart-subtotal">{subTotal}</span>
                </p>
                <p className="cart-total-subtotal-total-price">
                  Total{" "}
                  <span className="in-checkout-cart-pricetotal">
                    {totalPrice}
                  </span>
                </p>
                <button className="cart-check-out-button">Check Out</button>
              </Container>
            </div>
          </div>
        </div>


        {/*<<<The Sliding Sheet >>> */}

        <div className="sliding-area">
          <div className="sliding-box">

            <div className="sliding-box-div-1">
              <Trophy className='sliding-box-div-1-logo'/>
              <div className='sliding-box-div-1-header-description'>
              <h5 className='sliding-box-div-header'>High Quality</h5>
              <p className='sliding-box-div-description'>Crafted from top materials</p>
              </div>
            </div>

            <div className="sliding-box-div-2">
              <CheckCircle className='sliding-box-div-2-logo'/>
            <div className='sliding-box-div-2-header-description'>
              <h5 className='sliding-box-div-header'>Warranty Protection</h5>
              <p className='sliding-box-div-description'>Over 2 years</p>
            </div>  
            </div>
            
            <div className="sliding-box-div-3">
              <BoxSeam className='sliding-box-div-3-logo'/>
            <div className='sliding-box-div-3-header-description'>
              <h5 className='sliding-box-div-header'>Free Shipping</h5>
              <p className='sliding-box-div-description'>Order over 150 $</p>
            </div>
            </div>
            <div className="sliding-box-div-4">
              <Headset className='sliding-box-div-4-logo'/>
            <div className='sliding-box-div-4-header-description'>
              <h5 className='sliding-box-div-header'>24/7 Support</h5>
              <p className='sliding-box-div-description'>Dedicated support</p>
            </div>
            </div>

          </div>
        </div>



        {/*<<<The Footer>>> */}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
