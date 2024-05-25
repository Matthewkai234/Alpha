import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start text-muted">
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6
                  style={{
                    fontSize: 24,
                    color: "black",
                    fontFamily: "Arial",
                    fontWeight: 700,
                    wordWrap: "break-word",
                  }}
                  className="text-uppercase fw-bold mb-4"
                >
                  PaliParts
                </h6>
                <p style={{ color: "#9F9F9F" }}>
                  To help you get to buy autoparts online, without direct
                  contact or facing merchant-scams.
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Links</h6>
                <p>
                  <Link to="/" className="text-reset">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/shop" className="text-reset">
                    Shop
                  </Link>
                </p>
                <p>
                  <Link to="/about" className="text-reset">
                    About us
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className="text-reset">
                    Contact us
                  </Link>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Help</h6>
                <p>
                  <Link to="/payment-options" className="text-reset">
                    Payment Options
                  </Link>
                </p>
                <p>
                  <Link to="/returns" className="text-reset">
                    Returns
                  </Link>
                </p>
                <p>
                  <Link to="/privacy-policies" className="text-reset">
                    Privacy Policies
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Los Angeles, Avalon
                  Boulevard, US.
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  wolfteam@paliparts.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
