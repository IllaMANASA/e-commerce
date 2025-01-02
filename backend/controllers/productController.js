const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.json(products); // Return products in the response
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' }); // Error handling for fetching
  }
};

// Add a new product (Admin only)
exports.addProduct = async (req, res) => {
  // Check if the user is an admin (session-based access control)
  if (!req.session.user || req.session.user.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized access' }); // Unauthorized access if not admin
  }

  // Destructure the product details from the request body
  const { name, description, price, image, stock } = req.body;

  // Basic validation to check if all required fields are provided
  if (!name || !description || !price || !image || !stock) {
    return res.status(400).json({ message: 'All fields are required' }); // Handle missing fields
  }

  const newProduct = new Product({
    name,
    description,
    price,
    image,
    stock
  });

  try {
    const savedProduct = await newProduct.save(); // Save the new product to the database
    res.status(201).json(savedProduct); // Return the saved product
  } catch (err) {
    res.status(400).json({ message: 'Error adding product' }); // Error handling for product creation
  }
};
