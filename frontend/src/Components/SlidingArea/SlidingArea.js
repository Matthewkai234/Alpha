import "./SlidingArea.css";
import { BoxSeam, CheckCircle, Headset, Trophy } from "react-bootstrap-icons";

export default function SlidingArea() {
  return (
    <div className="sliding-area">
      <div className="sliding-box">
        <div className="sliding-box-div-1">
          <Trophy className="sliding-box-div-1-logo" />
          <div className="sliding-box-div-1-header-description">
            <h5 className="sliding-box-div-header">High Quality</h5>
            <p className="sliding-box-div-description">
              Crafted from top materials
            </p>
          </div>
        </div>

        <div className="sliding-box-div-2">
          <CheckCircle className="sliding-box-div-2-logo" />
          <div className="sliding-box-div-2-header-description">
            <h5 className="sliding-box-div-header">Warranty Protection</h5>
            <p className="sliding-box-div-description">Over 2 years</p>
          </div>
        </div>

        <div className="sliding-box-div-3">
          <BoxSeam className="sliding-box-div-3-logo" />
          <div className="sliding-box-div-3-header-description">
            <h5 className="sliding-box-div-header">Free Shipping</h5>
            <p className="sliding-box-div-description">Order over 150 $</p>
          </div>
        </div>
        <div className="sliding-box-div-4">
          <Headset className="sliding-box-div-4-logo" />
          <div className="sliding-box-div-4-header-description">
            <h5 className="sliding-box-div-header">24/7 Support</h5>
            <p className="sliding-box-div-description">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
