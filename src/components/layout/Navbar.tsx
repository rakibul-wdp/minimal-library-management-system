import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-blue-100 transition-colors"
          >
            Library Management
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link
              to="/books"
              className="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Books
            </Link>
            <Link
              to="/books/new"
              className="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Add Book
            </Link>
            <Link
              to="/borrow-summary"
              className="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Borrow Summary
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-100 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                /* Close icon (X) */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger menu icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
          <Link
            to="/books"
            className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Books
          </Link>
          <Link
            to="/books/new"
            className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Add Book
          </Link>
          <Link
            to="/borrow-summary"
            className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Borrow Summary
          </Link>
        </div>
      </div>
    </nav>
  );
}
