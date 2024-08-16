import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../utils/CartContext";
import CartItem from "../Billing/CartItem";
import axios from "axios";

const BillingCart = ({ customerName, customerNumber }) => {
  const { items, updateQuantity, removeItem, totalAmount, clearCart } =
    useCart();
  const navigate = useNavigate();
  const [popupVisible, setPopupVisible] = useState(false);

  const handlePlaceOrder = async () => {
    const orderDetails = {
      cartItems: items,
      totalAmount: totalAmount,
      customerName: customerName,
      customerNumber: customerNumber,
    };

    console.log(items);

    try {
      console.log("Came inside try ");
      const response = await axios.post("/place-order", orderDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("First response crossed ");

      if (response.status === 200) {
        clearCart();
        setPopupVisible(true);
        setTimeout(() => {
          navigate('/admin/manage-orders');
        }, 2000); // Display popup for 2 seconds
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <div className="flex flex-col h-full text-tertiaryColor">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-secondaryColor">Cart</h2>
        {items && items.length > 0 ? (
          items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))
        ) : (
          <p className="text-lightGrey text-center">Your cart is empty</p>
        )}
      </div>
      <div className="mx-4 mt-8 flex justify-end items-center text-tertiaryColor font-black text-2xl">
        <h3>Total: ₹ {totalAmount.toFixed(2)}</h3>
      </div>
      <button
        onClick={handlePlaceOrder}
        className={`m-4 py-3 ${
          items.length > 0
            ? "bg-greenHighlight text-tertiaryColor"
            : "bg-green-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Checkout
      </button>

      {/* Popup for order confirmation */}
      {popupVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border rounded p-4 shadow-lg z-50">
          <p className="text-center text-green-600">
            Order placed successfully!
          </p>
        </div>
      )}
    </div>
  );
};

export default BillingCart;
