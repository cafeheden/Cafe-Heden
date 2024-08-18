import React, { useState } from "react";
import { useCart } from "../../utils/CartContext"; // Adjust the path as necessary
import { ToastContainer } from "react-toastify";
import { handleError } from "../../utils/ToastMessageUtil";

const MenuItem = ({ item }) => {
  const { addItem } = useCart();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleAddToCart = () => {
    try {
      const itemToAdd = {
        id: item._id?.$oid || item._id, // Adjust as necessary based on item structure
        name: item.name,
        price: item.price,
        quantity: 1,
        description: item.description,
        category: item.category,
        isVeg: item.isVeg,
        image: item.image,
      };
      addItem(itemToAdd);
    } catch (error) {
      handleError("Failed to add item to cart. Please try again.");
    }
  };

  return (
    <div className="bg-tertiaryColor text-secondaryColor p-4 shadow rounded flex flex-col justify-between h-full">
      <div className="mb-4">
        <div className="grid gap-2 grid-cols-[1fr_auto]">
          <h3 className="text-xl font-semibold">
            {item.isVeg ? (
              <span className="text-2xl text-greenHighlight mr-2">
                &#x25C9;
              </span>
            ) : (
              <span className="text-2xl text-redHighlight mr-2">&#x25C9;</span>
            )}
            {item.name}
          </h3>
          <p className="text-xs font-extraLight text-tertiaryColor bg-secondaryColor rounded-full py-1 px-4 self-center">
            {item.category}
          </p>
        </div>
        <p
          className={`text-sm text-secondary my-2 ${
            showFullDescription ? "" : "line-clamp-2"
          }`}
        >
          {item.description}
        </p>
        {item.description.length > 100 && (
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-primaryColor text-sm focus:outline-none"
          >
            {showFullDescription ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <p className="font-black text-2xl">₹ {item.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="px-4 py-1 border-2 border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-tertiaryColor"
        >
          Add Item
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MenuItem;
