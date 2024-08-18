const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  isVeg: { type: Boolean, required: true },
  quantity: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerNumber: { type: Number, required: true },
  address: { type: String, default: '' }, // Optional field
  pincode: { type: String, default: '' }, // Optional field
  cartItems: { type: [cartItemSchema], required: true }, // Array of cart items
  totalAmount: { type: Number, required: true },
  orderStatus: { type: String, default: 'order-placed' },
  orderType: { type: String, default: '' } // Default to 'delivery'
});

module.exports = mongoose.model('Order', orderSchema);
