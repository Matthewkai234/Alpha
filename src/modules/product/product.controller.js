import slugify from "slugify";
import cloudinary from "../../utls/cloudinary.js";
import productModel from "../../../DB/model/product.model.js";
import { filttering } from "../../utls/filter.js";

export const create=async(req,res)=>{
    const {name,price,image,dicount,description,slug,finalPrice,typecar,picecType,supplement}=req.body;
    req.body.slug=slugify(name);
    req.body.finalPrice=price-(price*((dicount||0)/100))

    const { secure_url, public_id } = await cloudinary.uploader.upload(req.file.path, {
        folder: "product"
    });
    req.body.image={secure_url,public_id};
    const product = await productModel.create(req.body);
    if(!product){
        return res.status(404).json({message:"Failed to create product"});
    }
    return res.json({message:"success",product});
} 

export const getAllProducts = async (req, res) => {
    try {
        let { page, limit, ...filters } = req.query;  // Destructure with let for mutability and separate filters
        page = page && page > 0 ? parseInt(page) : 1;  // Ensure page is a positive integer
        limit = limit && limit > 0 ? parseInt(limit) : 3;  // Ensure limit is a positive integer
        const skip = (page - 1) * limit;

        // Convert filter operators to MongoDB format
        const queryStr = JSON.stringify(filters).replace(
            /\b(gt|gte|lt|lte|in|nin|eq|neq)\b/g,
            match => `$${match}`
        );
        const query = JSON.parse(queryStr);

        // Fetch the filtered products with pagination
        const products = await productModel.find(query).limit(limit).skip(skip);

        res.json({ message: "success", products });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch products", error: error.message });
    }
};
