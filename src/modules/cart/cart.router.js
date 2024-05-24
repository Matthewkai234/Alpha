import { Router } from "express";
import * as createCart from "./cart.controller.js";
import fileUpload, { fileType } from "../../utls/multer.js";
import { auth } from "../../middleware/auth.js";
const router=Router();

router.post('/',auth(['Admin','User']),createCart.create);
router.get('/getForusers',createCart.getCart);


export default router;