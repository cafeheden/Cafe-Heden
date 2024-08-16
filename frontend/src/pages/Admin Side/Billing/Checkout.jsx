import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import { useState } from "react";
import axios from "axios";
import { useCart } from "../../../utils/CartContext";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
//   const { customerName, customerNumber } = location.state;
  const { items, totalAmount, clearCart } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [orderId, setOrderId] = useState('');

  // Function to generate 3-letter order ID
  const generateOrderId = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let orderId = "";
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      orderId += letters[randomIndex];
    }
    return orderId;
  };

  const handleConfirmOrder = async () => {
    // Save order to MongoDB
    const orderData = {
      customerName,
      customerNumber,
      cartItems,
      totalAmount,
      orderStatus: "order-placed",
    };

    try {
      await axios.post("/place-order", orderData);

      // Generate PDF
      const doc = new jsPDF();
      doc.text(`Order for ${customerName}`, 10, 10);
      doc.text(`Number: ${customerNumber}`, 10, 20);
      doc.text(`Items: ${JSON.stringify(cartItems)}`, 10, 30);
      doc.text(`Total Amount: ${totalAmount}`, 10, 40);
      doc.save("order.pdf"); // Save as PDF

      // Print PDF (if needed)
      window.print();

      // Redirect or display success message
      navigate("/admin/billing");
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  const handleCancelOrder = () => {
    clearCart();
    navigate("/admin/billing");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Order ID: {orderId}</p>
      <p>Name: {customerName}</p>
      <p>Number: {customerNumber}</p>
      <p>Items: {JSON.stringify(cartItems)}</p>
      <p>Total Amount: {totalAmount}</p>
      <button onClick={handleConfirmOrder}>Confirm Order</button>
      <button onClick={handleCancelOrder}>Cancel Order</button>
    </div>
  );
};

export default CheckoutPage;
