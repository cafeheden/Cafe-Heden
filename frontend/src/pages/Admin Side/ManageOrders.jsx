import React, { useState, useEffect } from "react";
import axios from "axios";

import { RiArrowRightLine } from "react-icons/ri";

// Define status mappings
const STATUS_MAP = {
  "order-placed": "Order Placed",
  "in-progress": "In Progress",
  completed: "Completed",
  canceled: "Canceled",
};

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/place-order/orders");
        if (response.data && response.data.orders) {
          setOrders(response.data.orders);
          setFilteredOrders(response.data.orders); // Initialize filteredOrders
        } else {
          setError("No orders found");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch orders");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();

    const filtered = orders.filter((order) => {
      const customerNumberStr = String(order.customerNumber || "");

      const nameMatch = order.customerName
        .toLowerCase()
        .includes(lowercasedQuery);
      const idMatch = order._id.toLowerCase().includes(lowercasedQuery);
      const numberMatch = customerNumberStr
        .toLowerCase()
        .includes(lowercasedQuery);

      return nameMatch || idMatch || numberMatch;
    });

    setFilteredOrders(filtered);
  }, [searchQuery, orders]);

  const handleOpenPopup = (order) => {
    setSelectedOrder(order);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedOrder(null);
  };

  const handleStatusChange = async (newStatus) => {
    if (selectedOrder) {
      try {
        await axios.patch(`/place-order/orders/${selectedOrder._id}`, {
          orderStatus: newStatus,
        });
        setOrders(
          orders.map((order) =>
            order._id === selectedOrder._id
              ? { ...order, orderStatus: newStatus }
              : order
          )
        );
        handleClosePopup(); // Close popup after updating status
      } catch (error) {
        console.error("Error updating order status:", error);
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-tertiaryColor">Orders List</h2>
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by customer name, order ID, or phone number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-4 block w-full bg-tertiaryColor text-secondaryColor border-primaryColor rounded-md shadow-sm"
        />
      </div>
      <div className="grid grid-cols-3 gap-8 mt-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div
              key={order._id}
              className="bg-tertiaryColor border rounded-lg p-8 shadow-md flex flex-row justify-between items-center cursor-pointer"
              onClick={() => handleOpenPopup(order)}
            >
              <div className="">
                <h3 className="text-xl font-bold">{order.customerName}</h3>
                <p className="text-darkGrey">Phone: {order.customerNumber}</p>
                <p className="text-darkGrey font-semibold">Order Status: <span className="uppercase">{order.orderStatus}</span></p>
                <p className="text-gray-500 text-xs mt-4">
                  Order ID: {order._id}
                </p>
              </div>
              <div className="">
                {/* <select
                  value={order.orderStatus}
                  onChange={(e) => handleStatusChange(e.target.value)}
                  className="mt-1 p-4 block w-full bg-secondaryColor text-tertiaryColor border-primaryColor rounded-md shadow-sm"
                >
                  {Object.entries(STATUS_MAP).map(([statusCode, label]) => (
                    <option key={statusCode} value={statusCode}>
                      {label}
                    </option>
                  ))}
                </select> */}

                <button className="bg-secondaryColor, text-tertiaryColor">
                  <RiArrowRightLine size={32} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No orders available</p>
        )}
      </div>

      {/* Overlay and Popup for order details */}
      {popupVisible && selectedOrder && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-40"
            onClick={handleClosePopup}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-tertiaryColor border rounded p-4 shadow-lg z-50 w-3/4 max-w-3xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={handleClosePopup}
            >
              &#x2715; {/* Close (X) button */}
            </button>
            <h3 className="text-xl font-bold">Order Details</h3>
            <div className="flex flex-row justify-between items-start">
              <div className="">
                <p className="mt-2 text-lg">
                  <strong>Customer Name:</strong> {selectedOrder.customerName}
                </p>
                <p>
                  <strong>Phone Number:</strong> {selectedOrder.customerNumber}
                </p>
                <p className="text-sm mt-4 text-gray-600">
                  <strong>Order ID:</strong> {selectedOrder._id}
                </p>
              </div>
              <div className="">
                <h4 className="mt-4 text-lg font-semibold">Items:</h4>
                <ul>
                  {selectedOrder.cartItems.map((item) => (
                    <li key={item.id}>
                      {item.name} - {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <select
              value={selectedOrder.orderStatus}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="mt-4 p-2 block w-full bg-secondaryColor text-tertiaryColor border-primaryColor rounded-md shadow-sm"
            >
              {Object.entries(STATUS_MAP).map(([statusCode, label]) => (
                <option key={statusCode} value={statusCode}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default OrdersList;
