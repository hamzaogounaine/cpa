import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link href={'/'}>
                <h1 className="text-xl font-bold text-gray-900">Super Stuff</h1>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Games
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Apps
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Categories
              </Link>
              
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
