import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 md:w-30 bg-white shadow-md p-5">
      <h1 className="text-[25px] font-bold text-purple-700 mb-6">
        <i className="fa-solid fa-table-columns"></i> Dashboard
      </h1>
      <ul className="text-[20px] font-semibold leading-10 sm:text-center">
        <li className="mb-3">
          <a
            href="#"
            className="flex justify-between items-center text-gray-700 hover:text-purple-700"
          >
            <div className="flex items-center">
              <i className="fa-regular fa-user mr-3"></i>
              <span className="hidden md:block">Holders</span>
            </div>
            <i className="fas fa-chevron-right hidden md:block"></i>
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="flex justify-between items-center text-gray-700 hover:text-purple-700"
          >
            <div className="flex items-center">
              <i className="fa-solid fa-book mr-3"></i>
              <span className="hidden md:block">Reports</span>
            </div>
            <i className="fas fa-chevron-right hidden md:hidden"></i>
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="flex justify-between items-center text-gray-700 hover:text-purple-700"
          >
            <div className="flex items-center">
              <i className="fa-solid fa-bag-shopping mr-3"></i>
              <span className="hidden md:block">Work Request</span>
            </div>
            <i className="fas fa-chevron-right hidden md:block"></i>
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="flex justify-between items-center text-gray-700 hover:text-purple-700"
          >
            <div className="flex items-center">
              <i className="fa-solid fa-file mr-3"></i>
              <span className="hidden md:block">File Sharing</span>
            </div>
            <i className="fas fa-chevron-right hidden md:block"></i>
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="flex justify-between items-center text-gray-700 hover:text-purple-700"
          >
            <div className="flex items-center">
              <i className="fa-solid fa-calendar-days mr-3"></i>
              <span className="hidden md:block">Events</span>
            </div>
            <i className="fas fa-chevron-right hidden md:block"></i>
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="flex justify-between items-center text-gray-700 hover:text-purple-700"
          >
            <div className="flex items-center">
              <i className="fa-solid fa-screwdriver-wrench mr-3"></i>
              <span className="hidden md:block">Tools</span>
            </div>
            <i className="fas fa-chevron-right hidden md:block"></i>
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="flex justify-between items-center text-gray-700 hover:text-purple-700"
          >
            <div className="flex items-center">
              <i className="fa-solid fa-list mr-3"></i>
              <span className="hidden md:block">Product Catalogue</span>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
