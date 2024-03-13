const express = require('express');
const router = express.Router();

const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} = require('../controllers/orderController.js');
const { protect, admin } = require('../middleware/authMiddleware.js');

router.post('/', protect, addOrderItems);
router.get('/', protect, admin, getOrders);
router.get('/myorders', protect, getMyOrders);
router.get('/:id', protect, getOrderById);
router.put('/:id/pay', protect, updateOrderToPaid);
router.put('/:id/deliver', protect, admin, updateOrderToDelivered);

module.exports = router;
