const express = require('express');
const router = express.Router();
const Order = require('../Models/AdminOrder'); // Adjust the path as needed

router.post('/', async (req, res) => {
  try {
    const { cartItems, customerName, customerNumber, totalAmount } = req.body;

    // Validate required fields
    if (!Array.isArray(cartItems) || cartItems.length === 0 || !customerName || !customerNumber || totalAmount === undefined) {
      return res.status(400).json({ success: false, message: 'Missing required fields or invalid data' });
    }

    // Validate and convert customerNumber
    const formattedCustomerNumber = parseInt(customerNumber, 10);
    if (isNaN(formattedCustomerNumber)) {
      return res.status(400).json({ success: false, message: 'Customer number must be a valid number' });
    }

    // Validate each item in cartItems
    cartItems.forEach(item => {
      if (!item.id || !item.name || item.price === undefined || item.quantity === undefined) {
        return res.status(400).json({ success: false, message: `Invalid item data: ${JSON.stringify(item)}` });
      }
    });

    // Create a new order
    const newOrder = new Order({
      customerName,
      customerNumber: formattedCustomerNumber, // Save as number
      cartItems,
      totalAmount
    });

    await newOrder.save();

    res.status(200).json({ success: true, message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Fetch all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }
});

// Update order status
router.patch('/orders/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus } = req.body;
    const order = await Order.findByIdAndUpdate(
      id,
      { orderStatus },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.json({ success: true, order });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ success: false, message: 'Failed to update order status' });
  }
});



module.exports = router;
