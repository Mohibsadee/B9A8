import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation(); // React Router hook to get the current route

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav>
            <div className="flex items-center justify-between p-4">
                {/* Logo / Branding */}
                <div className="flex items-center">
                    <h1 className="text-xl font-bold text-gray-800">Code Crafters</h1>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-4">
                    <Link
                        to="/"
                        className={`text-gray-800 px-4 py-2 rounded-lg ${
                            location.pathname === "/" ? "border-2 border-green-500" : ""
                        } hover:text-gray-600`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/listed-books"
                        className={`text-gray-800 px-4 py-2 rounded-lg ${
                            location.pathname === "/listed-books" ? "border-2 border-green-500" : ""
                        } hover:text-gray-600`}
                    >
                        Listed Books
                    </Link>
                    <Link
                        to="/to-read"
                        className={`text-gray-800 px-4 py-2 rounded-lg ${
                            location.pathname === "/to-read" ? "border-2 border-green-500" : ""
                        } hover:text-gray-600`}
                    >
                        Pages to Read
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    <button
                        id="menu-button"
                        className="focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="btn bg-green-400">Sign In</button>
                    <button className="btn bg-blue-300">Sign Up</button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col space-y-2 p-4">
                        <Link
                            to="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-gray-800 hover:text-gray-600 ${
                                location.pathname === "/" ? "border-l-4 border-green-500 pl-2" : ""
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/listed-books"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-gray-800 hover:text-gray-600 ${
                                location.pathname === "/listed-books" ? "border-l-4 border-green-500 pl-2" : ""
                            }`}
                        >
                            Listed Books
                        </Link>
                        <Link
                            to="/to-read"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-gray-800 hover:text-gray-600 ${
                                location.pathname === "/to-read" ? "border-l-4 border-green-500 pl-2" : ""
                            }`}
                        >
                            Pages to Read
                        </Link>
                    </div>
                    <div className="flex flex-col items-center space-y-4 p-4">
                        <button className="btn bg-green-400">Sign In</button>
                        <button className="btn bg-blue-300">Sign Up</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
