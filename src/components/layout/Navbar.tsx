import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Library Management
        </Link>
        <div className="flex space-x-4">
          <Link to="/books" className="hover:underline">
            Books
          </Link>
          <Link to="/books/new" className="hover:underline">
            Add Book
          </Link>
          <Link to="/borrow-summary" className="hover:underline">
            Borrow Summary
          </Link>
        </div>
      </div>
    </nav>
  );
}
