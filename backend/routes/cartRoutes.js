const express = require('express');
const router = express.Router();
const { getCart, addToCart } = require('../controllers/cartController');

router.get('/', getCart); // View cart
router.post('/', addToCart);  // Add item to cart

module.exports = router;

