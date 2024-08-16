import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MenuItem from "../Billing/MenuItem";
import { useCart } from "../../../utils/CartContext"; // Context for cart management

const Home_FoodMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addItem } = useCart(); // Using context to manage cart

  const categories = [
    "",
    "Fit Bowls & Combos",
    "Main Course",
    "Kebab & Starters",
    "Breads",
    "Chinese",
    "Rice & Noodles",
    "Biryani",
    "Burgers & Sandwich",
    "Beverages",
    "Salad",
    "Dessert",
  ];

  const menuRef = useRef(null);

  useEffect(() => {
    axios
      .get("/food-menu")
      .then((response) => {
        setMenuItems(response.data);
        setFilteredItems(response.data);
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
    let filtered = [...menuItems];

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

  const scrollLeft = () => {
    menuRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    menuRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="home-foodMenu container min-h-[600px]">
      <div className="my-2">
        <div className="menu-header text-center m-16 text-2xl font-semibold text-tertiaryColor">
          Select Items from Menu
        </div>

        {/* Search Bar */}
        <div className="w-full relative text-secondaryColor">
          <input
            type="text"
            placeholder="Search for a menu item"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full h-16 p-2 border pl-10"
          />
          <IoSearch className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Category Menu */}
      <div className="flex items-center my-8 relative">
        {/* Left Arrow */}
        <button onClick={scrollLeft} className="p-1 rounded-full border-2 text-tertiaryColor items-center">
          <IoIosArrowBack size={24} />
        </button>

        {/* Categories */}
        <div
          ref={menuRef}
          className="flex overflow-x-hidden space-x-4 scrollbar-hide px-4"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryFilter(category)}
              className={`${
                selectedCategory === category
                  ? "bg-tertiaryColor text-secondaryColor"
                  : "text-tertiaryColor"
              } px-4 py-2 whitespace-nowrap hover:bg-tertiaryColor hover:text-secondaryColor transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={scrollRight} className="p-1 rounded-full border-2 text-tertiaryColor items-center">
          <IoIosArrowForward size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(filteredItems) &&
          filteredItems.map((item) => (
            <MenuItem
              key={item._id}
              item={item}
              onAddToCart={() => addItem(item)} // Add item to cart
            />
          ))}
      </div>
    </div>
  );
};

export default Home_FoodMenu;
