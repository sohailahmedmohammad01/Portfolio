import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/Logo.jpeg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { to: '/', text: 'About' },
    { to: '/experience', text: 'Experience' },
    { to: '/education', text: 'Education' },
    { to: '/skills', text: 'Skills' },
    { to: '/projects', text: 'Projects' },
    { to: '/certifications', text: 'Certifications' },
    { to: '/documents', text: 'Documents' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header
      className="fixed w-full bg-white shadow-md z-50"
      style={{ fontFamily: "'serif', sans-serif" }}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT: Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(true)}
        >
          <FaBars size={22} />
        </button>

        {/* CENTER: Logo + Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover object-[50%_20%] border-2 border-black-600"
          />
          <span className="text-lg md:text-xl font-bold text-gray-800">
            Mohammad Sohail Ahmed
          </span>
        </Link>

        {/* RIGHT: Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative ${location.pathname === item.to
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-blue-600'
                } transition`}
            >
              {item.text}
            </Link>
          ))}
        </div>

        {/* EMPTY div to balance layout */}
        <div className="md:hidden w-6"></div>
      </nav>

      {/* ✅ Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-gray-800">Menu</span>
          <FaTimes
            size={20}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col p-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={`${location.pathname === item.to
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-600'
                } transition`}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}