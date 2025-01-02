const Cart = require('../models/Cart');

// Get the cart for the user
exports.getCart = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Please login to view your cart' });
  }

  try {
    const cart = await Cart.findOne({ user: req.session.user.id });
    res.json(cart || { products: [] });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cart' });
  }
};

// Add a product to the cart
exports.addToCart = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Please login to add items to the cart' });
  }

  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: req.session.user.id });
    if (!cart) {
      cart = new Cart({ user: req.session.user.id, products: [] });
    }

    const existingProduct = cart.products.find(p => p.product.toString() === productId);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Error adding to cart' });
  }
};
