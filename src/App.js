import React from "react";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        {/* <!-- Sidebar --> */}
        <Sidebar />

        {/* <!-- Main Content --> */}
        <main className="flex-1 p-6 bg-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h2 className="text-[25px] font-semibold mb-4 lg:mb-0">
              Hi Karan, Good Afternoon!
            </h2>
            <span className="text-gray-500 text-sm">
              Updated on 27 Jan, 2025
            </span>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-6">
            {/* First Card */}
            <div className="bg-white p-4 shadow-md rounded-md w-full">
              <h3 className="text-gray-500">Total Holders</h3>
              <p className="text-lg font-bold">-</p>
              <p className="text-lg font-bold">- MoM</p>
            </div>

            {/* Second Card */}
            <div className="bg-white p-4 shadow-md rounded-md w-full">
              <h3 className="text-gray-500">Issued Shares</h3>
              <p className="text-lg font-bold">-</p>
              <p className="text-lg font-bold">- MoM</p>
            </div>

            {/* Third Card */}
            <div className="bg-white p-4 shadow-md rounded-md w-full">
              <h3 className="text-gray-500">eConsents</h3>
              <p className="text-lg font-bold">-</p>
              <p className="text-lg font-bold">- (-)</p>
            </div>

            {/* Last Card with full width on small screens and col-span-5 on large screens */}
            <div className="bg-white p-5 shadow-lg rounded-md border border-gray-200 flex justify-between lg:col-span-2 w-full">
              <div className="flex flex-col justify-between space-y-4 text-gray-700 text-sm">
                <span className="font-medium">-</span>
                <span className="font-medium">-</span>
                <span className="font-medium">- (-)</span>
              </div>

              <div className="flex flex-col justify-between items-end w-0">
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a7 7 0 100 14A7 7 0 009 2zm0 12a5 5 0 110-10 5 5 0 010 10zM2 9a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 100 10A5 5 0 009 4zm0 8a3 3 0 110-6 3 3 0 010 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold">
                    No data available
                  </span>
                </div>

                <div className="flex justify-end mt-2 text-xs font-semibold space-x-4">
                  <span className="text-purple-700 border-b-2 border-purple-700 pb-1 cursor-pointer">
                    5D
                  </span>
                  <span className="text-gray-600 hover:text-purple-700 cursor-pointer">
                    1M
                  </span>
                  <span className="text-gray-600 hover:text-purple-700 cursor-pointer">
                    6M
                  </span>
                  <span className="text-gray-600 hover:text-purple-700 cursor-pointer">
                    YTD
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow rounded-lg text-[20px] font-semibold relative w-full">
              <div className="absolute top-4 right-4 w-32"></div>
              Work Request (Raised Requests)
              <p className="text-gray-500 text-sm">
                All raised requests are shown in chronological order
              </p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg text-[20px] font-semibold w-full">
              Top Holders
            </div>
          </div>

          {/* Footer */}
        </main>
      </div>
    <Footer/>
    </div>
  );
};

export default App;
