import express from "express";
import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModels.js"


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        return res.send(product);
    }

    res.status(404);
    throw new Error('Product not Found');

}));

export default router;