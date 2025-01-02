const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Please login to place an order' });
  }

  const { products, totalAmount, shippingAddress } = req.body;

  const newOrder = new Order({
    user: req.session.user.id,
    products,
    totalAmount,
    shippingAddress,
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: 'Error creating order' });
  }
};

// Get user orders
exports.getUserOrders = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Please login to view your orders' });
  }

  try {
    const orders = await Order.find({ user: req.session.user.id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};
