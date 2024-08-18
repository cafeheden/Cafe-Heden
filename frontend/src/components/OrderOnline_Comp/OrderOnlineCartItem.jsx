import React from "react";
import { useCart } from "../../utils/CartContext";

import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";


const OrderOnlineCartItem = ({item}) => {
    const { updateQuantity, removeItem } = useCart(); // Get functions from context

    const handleDecrease = () => {
      if (item.quantity > 1) {
        updateQuantity(item.id, item.quantity - 1);
      } else {
        removeItem(item.id); // Remove item if quantity is 0
      }
    };
  
    const handleIncrease = () => {
      updateQuantity(item.id, item.quantity + 1); // Correctly pass id
    };
  
    return (
      <div className="p-4 bg-tertiaryColor text-secondaryColor mb-2">
        <div className="flex justify-between gap-2">
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-base text-primaryColor font-medium">${item.price * item.quantity}</p>
            </div>
            <div className="flex items-center gap-6">
              <button onClick={handleDecrease} className="rounded-full border p-1 hover:bg-lightGrey">
                <FaMinus />
              </button>
              <span className="text-lg font-medium">{item.quantity}</span>
              <button onClick={handleIncrease} className="rounded-full border p-1 hover:bg-lightGrey">
                <FaPlus />
              </button>
            </div>
          </div>
          <button onClick={() => removeItem(item.id)} className="p-4 text-redHighlight hover:bg-red-200 hover:rounded-full">
            <FaTrash />
          </button>
        </div>
      </div>
    );
}

export default OrderOnlineCartItem