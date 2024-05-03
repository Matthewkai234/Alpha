
import PropTypes from "prop-types";
import React from "react";


export const MaskGroup = ({
  property1,
  className,
  propertyDefault = "https://c.animaapp.com/ZgDZ3AY7/img/property-1-default.svg",
}) => {
  return (
    <img
      className={`mask-group ${property1} ${className}`}
      alt="Property default"
      src={
        property1 === "variant-2"
          ? "https://c.animaapp.com/ZgDZ3AY7/img/property-1-variant2.svg"
          : property1 === "variant-3"
          ? "https://c.animaapp.com/ZgDZ3AY7/img/property-1-variant3.svg"
          : property1 === "variant-4"
          ? "https://c.animaapp.com/ZgDZ3AY7/img/property-1-variant4.svg"
          : property1 === "variant-5"
          ? "https://c.animaapp.com/ZgDZ3AY7/img/property-1-variant5.svg"
          : propertyDefault
      }
    />
  );
};

MaskGroup.propTypes = {
  property1: PropTypes.oneOf(["default", "variant-5", "variant-2", "variant-3", "variant-4"]),
  propertyDefault: PropTypes.string,
};
