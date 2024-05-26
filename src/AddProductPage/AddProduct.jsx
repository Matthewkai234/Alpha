//Add Product Page (Front End+Send Post Request By axios).
import React from "react";
import axios from "axios";
import "./style.css";

class AddProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            quantity: 1,
            date: "",
            images: [],
            carType: "",
            price: "",
            pieceType: "engine",
            supplement: "GPS",
            error: "",
            success: "",
        };
    }
//معالجة تغيرات الصور 
    handleImageChange(event) {
        const files = [...event.target.files];
        this.setState({ images: files });
    }
//السحب
    handleDragOver(event) {
        event.preventDefault();
    }
//الاسقاط
    handleDrop(event) {
        event.preventDefault();
        this.setState({ images: Array.from(event.dataTransfer.files) });
    }
//
    handleSubmit(event) {
        event.preventDefault();
        const { name, description, quantity, date, images, carType, price, pieceType, supplement } = this.state;
//اذا كانت الحقول فاضية وقام بالاضافة أعطي خطأ
        if ([name, description, date, carType, price].some((val) => !val.trim())) {
            this.setState({ error: "All fields are required." });
            return;
        }
//ارسال البيانات
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("quantity", quantity);
        formData.append("date", date);
        formData.append("carType", carType);
        formData.append("price", price);
        formData.append("pieceType", pieceType);
        formData.append("supplement", supplement);
        images.forEach((image) => {
            formData.append("image", image);
        });
//ارسال الطلب بشكل محلي (local) 
        axios.post("http://localhost:4000/product", formData)
            .then((response) => {
                this.setState({
                    success: "Product added successfully!",
                    error: "",
                    name: "",
                    description: "",
                    quantity: 1,
                    date: "",
                    images: [],
                    carType: "",
                    price: "",
                    pieceType: "engine",
                    supplement: "GPS",
                });
            })
            .catch((error) => {//اذا حدث خطأ بالتقديم
                this.setState({ error: "Error adding product." });
            });
    }

    handleFieldChange(field, value) {
        this.setState({ [field]: value });
    }

    render() {
        const { name, description, quantity, date, carType, price, pieceType, supplement, images, error, success } = this.state;

        return (
            <div className="add-product-page">
                <div className="form-and-preview">
                    <div className="container">
                        <div className="Add-Product">Add New Product</div>

                        <div className="form-container">
                            <div className="product-info">
                                <div className="field">
                                    <label>Product Name:</label>
                                    <input
                                        type="text"
                                        className={`input-box ${error && !name.trim() && "red-border"}`}
                                        value={name}
                                        onChange={(e) => this.handleFieldChange("name", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <label>Description:</label>
                                    <input
                                        type="text"
                                        className={`input-box ${error && !description.trim() && "red-border"}`}
                                        value={description}
                                        onChange={(e) => this.handleFieldChange("description", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <label>Available Quantity:</label>
                                    <div className="quantity-controls">
                                        <button type="button" onClick={() => this.setState({ quantity: quantity + 1 })}>+</button>
                                        <span>{quantity}</span>
                                        <button type="button" onClick={() => this.setState({ quantity: Math.max(quantity - 1, 1) })}>-</button>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Product Date:</label>
                                    <input
                                        type="date"
                                        className={`input-box ${error && !date.trim() && "red-border"}`}
                                        value={date}
                                        onChange={(e) => this.handleFieldChange("date", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <label>Upload Image:</label>
                                    <input
                                        type="file"
                                        multiple
                                        name="image"
                                        onChange={this.handleImageChange.bind(this)}
                                        onDragOver={this.handleDragOver.bind(this)}
                                        onDrop={this.handleDrop.bind(this)}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <label>Type Of Car:</label>
                                    <select
                                        value={carType}
                                        onChange={(e) => this.handleFieldChange("carType", e.target.value)}
                                        required
                                    >
                                        <option value="">Select Car Type</option>
                                        <option value="BMW">BMW</option>
                                        <option value="KIA">KIA</option>
                                        <option value="FORD">FORD</option>
                                        <option value="MERCEDES">MERCEDES</option>
                                        <option value="TOYOTA">TOYOTA</option>
                                        <option value="HYUNDAI">HYUNDAI</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label>Price:</label>
                                    <input
                                        type="number"
                                        className={`input-box ${error && !price.trim() && "red-border"}`}
                                        value={price}
                                        onChange={(e) => this.handleFieldChange("price", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <label>Type Of Piece:</label>
                                    <select
                                        value={pieceType}
                                        onChange={(e) => this.handleFieldChange("pieceType", e.target.value)}
                                        required
                                    >
                                        <option value="engine">Engine</option>
                                        <option value="turbo">Turbo</option>
                                        <option value="exhaust">Exhaust</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label>Supplement:</label>
                                    <select
                                        value={supplement}
                                        onChange={(e) => this.handleFieldChange("supplement", e.target.value)}
                                        required
                                    >
                                        <option value="GPS">GPS</option>
                                        <option value="seats">Seats</option>
                                        <option value="tires">Tires</option>
                                    </select>
                                </div>
                                <button className="submit-button" onClick={(e) => this.handleSubmit(e)}>Add Product</button>
                                {error && <div className="error-message">{error}</div>}
                                {success && <div className="success-message">{success}</div>}
                            </div>
                        </div>
                    </div>

                    <div className="product-preview">
                    <div className="product-card">
                        <div className="preview-image-container">
                            {images.length === 0 ? (
                                <p>No image uploaded</p>
                            ) : (
                                images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={URL.createObjectURL(image)}
                                        alt={`Product Image ${index + 1}`}
                                        className="product-image"
                                    />
                                ))
                            )}
                        </div>
                        <div className="product-details">
                            <h3 className="product-name">{name || "Product Name"}</h3>
                            <p className="product-description">{description || "Product Description"}</p>
                            <p className="product-price">{price ? `$${price}` : "Price"}</p>
                            <p className="product-quantity">{quantity ? `Quantity: ${quantity}` : "Quantity"}</p>
                            <p className="product-date">{date || "Product Date"}</p>
                            <p className="product-car-type">{carType || "Car Type"}</p>
                            <p className="product-piece-type">{pieceType || "Piece Type"}</p>
                            <p className="product-supplement">{supplement || "Supplement"}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
}

export default AddProduct;
