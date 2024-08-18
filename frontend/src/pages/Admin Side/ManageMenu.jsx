import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing Icons
import { IoSearch, IoAdd } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md";

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    axios
      .get("/food-menu")
      .then((response) => {
        setMenuItems(response.data);
        setFilteredItems(response.data);
        console.log("Are you getting menu items??");
      })
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterItems(e.target.value, selectedCategory);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    filterItems(searchQuery, category);
  };

  const filterItems = (query, category) => {
    // Start with the full menuItems array
    let filtered = Array.isArray(menuItems) ? [...menuItems] : [];

    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (query) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setShowPopup(true);
  };

  const handleDelete = (id) => {
    axios
      .delete(`/food-menu/${id}`)
      .then(() => {
        setMenuItems(menuItems.filter((item) => item._id !== id));
        setFilteredItems(filteredItems.filter((item) => item._id !== id));
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  const handleAddNew = () => {
    setCurrentItem(null);
    setShowPopup(true);
  };

  const handleSave = (newItem) => {
    if (currentItem) {
      axios
        .put(`/food-menu/${currentItem._id}`, newItem)
        .then((response) => {
          setMenuItems(
            menuItems.map((item) =>
              item._id === currentItem._id ? response.data : item
            )
          );
          setFilteredItems(
            filteredItems.map((item) =>
              item._id === currentItem._id ? response.data : item
            )
          );
        })
        .catch((error) => console.error("Error updating item:", error));
    } else {
      axios
        .post("/food-menu", newItem)
        .then((response) => {
          setMenuItems([...menuItems, response.data]);
          setFilteredItems([...filteredItems, response.data]);
        })
        .catch((error) => console.error("Error adding item:", error));
    }
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen px-8 text-tertiaryColor">
      {/* Search bar and Button area */}
      <div className="flex justify-between items-center my-4">
        {/* Search Bar */}
        <div className="w-full relative text-secondaryColor">
          <input
            type="text"
            placeholder="Search for a menu item"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full h-16 p-2 border rounded pl-10"
          />
          <IoSearch className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Add new button */}
        <div className="ml-4 font-normal rounded-md py-3 px-4 border hover:bg-primaryColor hover:text-tertiaryColor hover:border-transparent hover:font-semibold">
          <div
            onClick={handleAddNew}
            className="flex items-center justify-center md:justify-start md:space-x-5"
          >
            <span>
              <IoAdd size={24} />
            </span>
            <span className="text-sm text-center hidden md:flex">
              Add New Item
            </span>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => handleCategoryFilter("")}
          className="p-2 rounded hover:bg-primaryColor"
        >
          All
        </button>
        <button
          onClick={() => handleCategoryFilter("Main Course")}
          className="text-tertiary py-2 px-4 rounded hover:bg-primaryColor"
        >
          Main Course
        </button>
        <button
          onClick={() => handleCategoryFilter("Beverages")}
          className="text-tertiary p-2 rounded hover:bg-primaryColor"
        >
          Beverages
        </button>
        <button
          onClick={() => handleCategoryFilter("Salad")}
          className="text-tertiary p-2 rounded hover:bg-primaryColor"
        >
          Salads
        </button>
        <button
          onClick={() => handleCategoryFilter("Dessert")}
          className="text-tertiary p-2 rounded hover:bg-primaryColor"
        >
          Desserts
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.isArray(filteredItems) &&
          filteredItems.map((item) => (
            <div
              key={item._id}
              className="bg-tertiaryColor text-secondaryColor p-4 shadow rounded relative"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">
                  {item.isVeg ? (
                    <span className="text-2xl text-greenHighlight mr-2">
                      &#x25C9;
                    </span>
                  ) : (
                    <span className="text-2xl text-redHighlight mr-2">
                      &#x25C9;
                    </span>
                  )}
                  {item.name}
                </h3>
                <p className="text-xs font-extralight text-tertiaryColor bg-secondaryColor rounded-full py-1 px-4">
                  {item.category}
                </p>
              </div>
              <p className="text-sm text-secondary my-2">{item.description}</p>
              <div className="flex gap-6 items-center">
                <p className="font-black text-2xl">₹ {item.price.toFixed(2)}</p>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-tertiaryColor bg-secondaryColor p-4 rounded-md"
                  >
                    <AiFillEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-secondaryColor text-tertiaryColor rounded-md p-4"
                  >
                    <MdDeleteSweep size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {showPopup && (
        <PopupForm
          item={currentItem}
          onClose={() => setShowPopup(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

const PopupForm = ({ item, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    item || {
      name: "",
      description: "",
      price: 0,
      category: "",
      image: "",
      isVeg: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-secondaryColor bg-opacity-90">
      <div className="bg-tertiaryColor text-secondaryColor p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">
          {item ? "Edit Item" : "Add New Item"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Veg/Non-Veg
            </label>
            <select
              name="isVeg"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="true">Veg</option>
              <option value="false">Non-Veg</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-lightGrey text-darkGrey p-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primaryColor text-tertiaryColor py-2 px-4 rounded"
            >
              {item ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageMenu;
