import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-md p-4 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu Button (Mobile & Tablet) */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
        </button>

        <h1 className="text-purple-700 font-bold text-[24px] sm:text-[30px]">Computershare</h1>
        <select className="border border-gray-300 px-4 py-2 rounded-md text-sm focus:ring-2 focus:ring-purple-500 bg-gray-300 font-bold text-[15px] hidden md:block">
          <option>ABBOTT LABORATORIES AFFILIATE ESPP</option>
        </select>
      </div>

      {/* Right Section (Icons) */}
      <div className="hidden md:flex items-center space-x-4 text-gray-600">
        <button className="hover:text-purple-700">
          <i className="fas fa-search text-2xl"></i>
        </button>
        <button className="hover:text-purple-700">
          <i className="fas fa-thumbs-up text-2xl"></i>
        </button>
        <button className="hover:text-purple-700">
          <i className="fas fa-lightbulb text-2xl"></i>
        </button>
        <button className="hover:text-purple-700">
          <i className="fas fa-cog text-2xl"></i>
        </button>
        <button className="hover:text-purple-700">
          <i className="fas fa-bell text-2xl"></i>
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
          KB
        </div>
      </div>

      {/* Mobile & Tablet Left Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-600">
            <XIcon className="h-8 w-8" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col items-start space-y-4 p-4">
          <select className="border border-gray-300 px-4 py-2 rounded-md text-sm focus:ring-2 focus:ring-purple-500 bg-gray-300 font-bold text-[15px] w-full">
            <option>ABBOTT LABORATORIES AFFILIATE ESPP</option>
          </select>
          <button className="hover:text-purple-700 flex items-center space-x-2">
            <i className="fas fa-search text-2xl"></i>
            <span>Search</span>
          </button>
          <button className="hover:text-purple-700 flex items-center space-x-2">
            <i className="fas fa-thumbs-up text-2xl"></i>
            <span>Likes</span>
          </button>
          <button className="hover:text-purple-700 flex items-center space-x-2">
            <i className="fas fa-lightbulb text-2xl"></i>
            <span>Ideas</span>
          </button>
          <button className="hover:text-purple-700 flex items-center space-x-2">
            <i className="fas fa-cog text-2xl"></i>
            <span>Settings</span>
          </button>
          <button className="hover:text-purple-700 flex items-center space-x-2">
            <i className="fas fa-bell text-2xl"></i>
            <span>Notifications</span>
          </button>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
            KB
          </div>
        </div>
      </div>

      {/* Overlay (closes menu on click) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
