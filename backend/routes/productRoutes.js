const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} = require('../controllers/productController.js');

const { protect, admin } = require('../middleware/authMiddleware.js');

router.get('/', getProducts);
router.post('/', protect, admin, createProduct);
router.post('/:id/reviews', protect, createProductReview);
router.get('/top', getTopProducts);
router.get('/:id', getProductById);
router.delete('/:id', protect, admin, deleteProduct);
router.put('/:id', protect, admin, updateProduct);

module.exports = router;
