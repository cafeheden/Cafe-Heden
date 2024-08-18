import React from 'react';
import { useCart } from '../../utils/CartContext';
import { Link } from 'react-router-dom';

// Importing Images
import BrandLogo from '../../assets/logo/Logo-Text.svg'
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
  const { items } = useCart();
  
  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <header className="sticky top-0 bg-secondaryColor z-10 flex justify-between items-center px-8 py-6">
      <Link to="/">
        <img src={BrandLogo} alt="Brand Logo" className="h-10" />
      </Link>
      <Link to="/order-online/cart" className="relative">
        <span className="text-lg text-tertiaryColor hover:text-primaryColor"><FaShoppingBag size={28}/></span>
        <span className="absolute -top-2 -right-2 bg-lightGrey text-secondaryColor font-bold rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
          {getTotalItems()}
        </span>
      </Link>
    </header>
  );
};

export default Header;
