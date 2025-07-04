import { Link } from "react-router";

export default function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to Library Management</h1>
      <p className="text-xl mb-8">
        Manage your books and track borrows efficiently
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/books"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Books
        </Link>
        <Link
          to="/books/new"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Add New Book
        </Link>
      </div>
    </div>
  );
}
