import React from 'react'
import Logo from "../assets/Logo.jpg"


const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white bg-opacity-95 backdrop-blur-sm p-4 shadow-lg flex justify-between items-center px-6 md:px-10 rounded-b-2xl">
      {/* Logo */}
      <img
        src={Logo}
        alt="FinWise Logo"
        className="h-10 sm:h-15 w-auto transition-transform duration-300 hover:scale-105 rounded-2xl " // Added hover effect
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/120x40/E0F2FE/1E40AF?text=FinWise'; }} // Fallback image
      />
      <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
        <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">Home</a>
        <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">How It Works</a>
        <a href="#why-choose" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">Why Choose Us</a>
        <a href="#faqs" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">FAQs</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">Contact</a>
        <button className="ml-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-full px-7 py-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">Sign Up</button>
      </nav>
      {/* Mobile menu button (optional, for a full responsive menu) */}
      <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
        <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
         <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">Home</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">How It Works</a>
          <a href="#why-choose" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">Why Choose Us</a>
          <a href="#faqs" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">FAQs</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">Contact</a>
          <button className="ml-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-full px-7 py-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">Sign Up</button>
      </nav>
      </button>
    </header>
  );
};


export default Header
