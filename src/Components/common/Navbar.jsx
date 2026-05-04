import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`px-6 py-4 fixed w-full top-0 z-50 transition-all duration-300 
      ${scrolled 
        ? "bg-white shadow-md text-black-500" 
        : "bg-green-600 text-white"}`}
    >
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          ChatZoom
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:opacity-80">Home</Link>
          <Link to="/login" className="hover:opacity-80">Login</Link>
          <Link to="/register" className="hover:opacity-80">Register</Link>
          <Link to="/features" className="hover:opacity-80">Features</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-3 md:hidden font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
          <Link to="/features" onClick={() => setIsOpen(false)}>Features</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;