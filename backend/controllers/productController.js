import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModels.js";

// @desc    Fetch all the products
// @route   GET /api/products
// @access  Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

// @desc    Fetch a product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.send(product);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private

const createProduct = asyncHandler(async (req, res) => {
  const products = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample Category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await products.save();
  res.status(200).json(createdProduct);
});

// @desc    Update a Product
// @route   PUT /api/products/:id
// @access  Private/admin

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updateProduct = await product.save();
    res.jason(updateProduct);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProducts, getProductById, createProduct, updateProduct };
