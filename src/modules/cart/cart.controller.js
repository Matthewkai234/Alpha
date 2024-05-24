import cartModel from "../../../DB/model/cart.model.js";
import productModel from "../../../DB/model/product.model.js"

export const create = async (req, res) => {
    const { productId, quantity } = req.body; // Getting productId and quantity from request body
    const product = await productModel.findById(productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    try {
        const cart = await cartModel.findOne({ userId: req.user.id });

        if (!cart) {
            // If no cart exists, create a new one
            const newCart = await cartModel.create({
                userId: req.user.id,
                products: [{ productId, quantity: quantity || 1 }]
            });
            return res.status(201).json({ message: 'success', cart: newCart });
        } else {
            // If a cart already exists, add the new product to it
            // Check if the product is already in the cart
            const productIndex = cart.products.findIndex(item => item.productId.equals(productId));
            if (productIndex > -1) {
                // If product is already in the cart, increase the quantity
                cart.products[productIndex].quantity += quantity || 1;
                await cart.save();
                return res.status(200).json({ message: 'Product quantity updated', cart });
            } else {
                // Add new product to the cart
                cart.products.push({ productId, quantity: quantity || 1 });
                await cart.save();
                return res.status(200).json({ message: 'success', cart });
            }
        }
    } catch (error) {
        console.error("Error accessing or updating the cart:", error);
        return res.status(500).json({ message: "Error accessing or updating the cart", error: error.message });
    }
};
export const getCart = async (req, res) => {
    try {
        // Retrieve the cart and populate product details including images and finalPrice
        const cart = await cartModel.findOne({ userId: req.user._id }).populate({
            path: 'products.productId',
            select: 'name price description categoryId image finalPrice startDate endDate'  // Include finalPrice in the selection
        });

        if (!cart) {
            return res.status(404).json({ message: "No cart found for this user" });
        }

        // Transforming cart data to include detailed product info, image URLs, and final price
        const detailedCart = {
            ...cart._doc,
            products: cart.products.map(p => ({
                name: p.productId.name,
                description: p.productId.description,
                categoryId: p.productId.categoryId,
                image: p.productId.image.secure_url, // Assuming the image data includes a secure URL
                finalPrice: p.productId.finalPrice,  // This should now reflect the final price
                startDate:p.productId.startDate,
                endDate:p.productId.endDate,
            }))
        };

        res.status(200).json({ message: 'success', cart: detailedCart });
    } catch (error) {
        console.error("Error fetching the cart:", error);
        return res.status(500).json({ message: "Error fetching the cart", error: error.message });
    }
};
