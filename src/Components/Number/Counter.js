import React from "react";
import "../Number/Counternumber.css";

export default function Counter() {
  return (
    <div className="frame">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">1</div>
          </div>
        </div>
        <div className="group">
          <div className="overlap">
            <div className="text-wrapper-2">2</div>
          </div>
        </div>
        <div className="group">
          <div className="overlap">
            <div className="text-wrapper-2">3</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="div-wrapper">
            <div className="text-wrapper-3">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};
