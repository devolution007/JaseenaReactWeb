import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white p-[10px] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://magnetmakerz.com/wp-content/uploads/2025/01/cropped-logo-1.png"
            alt="Jaseena International"
            className="w-[40%]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex border-[3px] border-[#BDA10E] py-[13px] rounded-[20px]">
          <ul className="flex space-x-6 text-sm font-semibold">
            <li className="px-[20px] transform transition-transform duration-300 ease-in-out hover:scale-[1.2]">
              <Link to="/" className="hover:text-yellow-400 text-[12px]">
                HOME
              </Link>
            </li>
            <li className="px-[20px] transform transition-transform duration-300 ease-in-out hover:scale-[1.2]">
              <Link to="#" className="hover:text-yellow-400 text-[12px]">
                SERVICES
              </Link>
            </li>
            <li className="px-[20px] transform transition-transform duration-300 ease-in-out hover:scale-[1.2]">
              <Link to="#" className="hover:text-yellow-400 text-[12px]">
                BRANDS
              </Link>
            </li>
            <li className="px-[20px] transform transition-transform duration-300 ease-in-out hover:scale-[1.2]">
              <Link to="#" className="hover:text-yellow-400 text-[12px]">
                DISTRIBUTORS
              </Link>
            </li>
            <li className="px-[20px] transform transition-transform duration-300 ease-in-out hover:scale-[1.2]">
              <Link to="#" className="hover:text-yellow-400 text-[12px]">
                ABOUT&nbsp;US
              </Link>
            </li>
            <li className="px-[20px] transform transition-transform duration-300 ease-in-out hover:scale-[1.2]">
              <Link to="#" className="hover:text-yellow-400 text-[12px]">
                MEDIA
              </Link>
            </li>
            <li className="px-[20px] transform transition-transform duration-300 ease-in-out hover:scale-[1.2]">
              <Link to="#" className="hover:text-yellow-400 text-[12px]">
                TEAM
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-yellow-500 mt-2">
          <ul className="flex flex-col text-center py-4 space-y-2">
            <li>
              <Link to="/" className="block py-2 hover:text-yellow-400">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 hover:text-yellow-400">
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/brands" className="block py-2 hover:text-yellow-400">
                BRANDS
              </Link>
            </li>
            <li>
              <Link
                to="/distributors"
                className="block py-2 hover:text-yellow-400"
              >
                DISTRIBUTORS
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 hover:text-yellow-400">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/media" className="block py-2 hover:text-yellow-400">
                MEDIA
              </Link>
            </li>
            <li>
              <Link to="/team" className="block py-2 hover:text-yellow-400">
                TEAM
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
