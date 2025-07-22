import React from 'react'
import Logo from "../../src/assets/Logo.jpg"

const Footer = () => {
  return (
    <footer className="bg-[#1a202c] text-gray-300 py-8 px-4 sm:px-6 lg:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-5 border-b border-gray-700"> {/* Removed text-center here */}

        {/* Column 1: Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start text-left"> {/* Changed md:text-left to text-left for mobile */}
          <img
            src={Logo} // Using the provided logo image
            alt="FinWise Logo"
            className="h-16 w-auto mb-4"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/120x60/1A202C/E2E8F0?text=FinWise'; }} // Fallback for logo
          />
          <div className="flex space-x-4">
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.267 0-5.188 1.953-5.188 5.602v2.398z"></path></svg>
            </a>
            {/* Twitter */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.407 0-6.17 2.76-6.17 6.169 0 .484.055.954.129 1.404-5.144-.252-9.692-2.723-12.742-6.468-.5.857-.778 1.841-.778 2.889 0 2.132 1.084 4.008 2.724 5.123-.798-.024-1.549-.245-2.217-.607v.08c0 2.986 2.127 5.474 4.925 6.042-.516.135-1.059.208-1.612.208-.395 0-.779-.038-1.15-.109.782 2.443 3.056 4.22 5.764 4.267-2.116 1.657-4.515 2.641-7.256 2.641-1.176 0-2.324-.069-3.44-.202 2.754 1.765 6.02 2.793 9.534 2.793 11.455 0 17.68-9.483 17.68-17.68 0-.267-.008-.53-.02-.795z"></path></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M22.239 0H1.761C.787 0 0 .787 0 1.761v20.478C0 23.213.787 24 1.761 24h20.478c.974 0 1.761-.787 1.761-1.761V1.761C24 .787 23.213 0 22.239 0zM7.18 20.45H3.61V9.11h3.57V20.45zM5.395 7.63c-1.22 0-2.21-.99-2.21-2.21s.99-2.21 2.21-2.21 2.21.99 2.21 2.21-.99 2.21-2.21 2.21zM20.45 20.45h-3.57v-5.56c0-1.32-.47-2.22-1.66-2.22-1.21 0-1.93.82-2.25 1.61-.12.28-.15.67-.15 1.06v5.09h-3.57V9.11h3.57v1.54c.48-.77 1.39-1.87 3.22-1.87 2.35 0 4.1 1.54 4.1 4.86v7.31z"></path></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.071 1.17.055 1.84.249 2.323.435.653.245 1.144.572 1.627 1.054.483.483.81 1.026 1.054 1.627.186.483.38 1.153.435 2.323.059 1.266.071 1.646.071 4.85s-.012 3.584-.071 4.85c-.055 1.17-.249 1.84-.435 2.323-.245.653-.572 1.144-1.054 1.627-.483.483-1.026.81-1.627 1.054-.483.186-1.153.38-2.323.435-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.071c-1.17-.055-1.84-.249-2.323-.435-.653-.245-1.144-.572-1.627-1.054-.483-.483-.81-1.026-1.054-1.627-.186-.483-.38-1.153-.435-2.323-.059-1.266-.071-1.646-.071-4.85s.012-3.584.071-4.85c.055-1.17.249-1.84.435-2.323.245-.653.572-1.144 1.054-1.627.483-.483 1.026-.81 1.627-1.054.186-.483.38-1.153.435-2.323.059-1.266.071-1.646.071-4.85zM12 4.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5 7.5-3.358 7.5-7.5-3.358-7.5-7.5-7.5zm0 2.5c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm6.5-.5c0 .717-.583 1.3-1.3 1.3s-1.3-.583-1.3-1.3.583-1.3 1.3-1.3 1.3.583 1.3 1.3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Company */}
        <div className="text-left"> {/* Removed md:text-left and kept text-left for consistency */}
          <h5 className="text-lg font-semibold text-white mb-4">Company</h5>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Partners</a></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="text-left"> {/* Removed md:text-left and kept text-left for consistency */}
          <h5 className="text-lg font-semibold text-white mb-4">Legal</h5>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Grievance Redressal</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="text-left"> {/* Removed md:text-left and kept text-left for consistency */}
          <h5 className="text-lg font-semibold text-white mb-4">Contact Us</h5>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center justify-start"> {/* Changed justify-center to justify-start */}
              <svg className="w-5 h-5 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
              <span>support@finwise.in</span>
            </li>
            <li className="flex items-center justify-start"> {/* Changed justify-center to justify-start */}
              <svg className="w-5 h-5 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z"></path></svg>
              <span>1800 123 4567</span>
            </li>
            <li className="flex items-start justify-start"> {/* Changed justify-center to justify-start */}
              <svg className="w-5 h-5 mr-3 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"></path></svg>
              <address className="not-italic">Sinagrayakonda, Prakasam, AP India - 523101</address>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm pt-3">
        <p>&copy; {new Date().getFullYear()} KVR INFO SOLUTIONS PVT LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;