import React from "react";
import "./style.css";

const ImageUploader = () => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

  };

  return (
    <div className="image-uploader-container">
      <label htmlFor="file-upload" className="upload-button">
        Upload Image
      </label>
      <input
        type="file"
        id="file-upload"
        className="file-input"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ImageUploader;
