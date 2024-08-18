import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../utils/CartContext";
import CartItem from "../../components/OrderOnline_Comp/OrderOnlineCartItem";
import axios from "axios";
import Lottie from "react-lottie";

// Function to fetch Lottie JSON data from the URL
const fetchLottieJson = async () => {
  try {
    const response = await fetch(
      "https://lottie.host/4601c844-f6e4-40b9-90f4-543b4862b700/x8FLgejcRM.json"
    );
    return await response.json();
  } catch (error) {
    console.error("Failed to load Lottie animation:", error);
    return null;
  }
};

const OrderOnlineCart = () => {
  const { items, updateQuantity, removeItem, totalAmount, clearCart } =
    useCart();
  const navigate = useNavigate();
  const [popupVisible, setPopupVisible] = useState(false);
  const [lottieData, setLottieData] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    number: "",
    address: "",
    pincode: "",
  });
  const [deliveryType, setDeliveryType] = useState("delivery");

  // Fetch the Lottie JSON when the component mounts
  useEffect(() => {
    const loadLottieAnimation = async () => {
      const data = await fetchLottieJson();
      setLottieData(data);
    };

    loadLottieAnimation();
  }, []);

  useEffect(() => {
    if (popupVisible) {
      const timer = setTimeout(() => {
        navigate("/order-online");
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [popupVisible, navigate]);

  const handleInputChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    const { name, number, address, pincode } = customerInfo;

    if (!name.trim() || !number.trim()) {
      alert("Please enter both customer name and number.");
      return;
    }

    const orderDetails = {
      cartItems: items,
      totalAmount: totalAmount,
      customerName: name,
      customerNumber: number,
      address: address || "", // Ensure address is sent as an empty string if not provided
      pincode: pincode || "", // Ensure pincode is sent as an empty string if not provided
      orderType: "delivery", // Include delivery type
    };

    try {
      const response = await axios.post("/place-order", orderDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        clearCart();
        setPopupVisible(true);
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false); // Close the popup when the close button is pressed
  };

  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: lottieData, // Use fetched Lottie data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col lg:flex-row bg-tertiaryColor rounded-md shadow-lg max-w-screen-lg w-full lg:w-3/4">
        {/* Left Side: Cart Items and Checkout Button */}
        <div className="flex-grow p-4 lg:w-1/2">
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
          <div className="mt-8 text-tertiaryColor font-black text-2xl">
            <h3>Total: ₹ {totalAmount.toFixed(2)}</h3>
          </div>
          <button
            onClick={handlePlaceOrder}
            className={`mt-4 py-3 ${
              items.length > 0
                ? "bg-greenHighlight text-tertiaryColor"
                : "bg-green-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Checkout
          </button>
        </div>
        {/* Right Side: Customer Details and Delivery Type */}
        <div className="p-4 lg:w-1/2 border-l border-gray-300">
          <h3 className="text-xl font-bold mb-4">Customer Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={customerInfo.name}
            onChange={handleInputChange}
            className="block w-full p-4 mb-4 border rounded-md"
          />
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={customerInfo.number}
            onChange={handleInputChange}
            className="block w-full p-4 mb-4 border rounded-md"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={customerInfo.address}
            onChange={handleInputChange}
            className="block w-full p-4 mb-4 border rounded-md"
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={customerInfo.pincode}
            onChange={handleInputChange}
            className="block w-full p-4 mb-4 border rounded-md"
          />
        </div>
      </div>

      {/* Popup for order confirmation */}
      {popupVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-tertiaryColor border rounded p-4 shadow-lg z-50">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={handleClosePopup}
          >
            &#x2715; {/* Close (X) button */}
          </button>
          {lottieData && (
            <Lottie options={lottieOptions} height={150} width={150} />
          )}
          <p className="text-center text-green-600">
            Order placed successfully!
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderOnlineCart;
