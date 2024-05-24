import { Router } from "express";
import * as createProduct from "./product.controller.js";
import fileUpload, { fileType } from "../../utls/multer.js";
import { auth } from "../../middleware/auth.js";
const router=Router();

router.post('/',fileUpload(fileType.image).single('image'),createProduct.create);
router.get('/',createProduct.getAllProducts);

export default router;