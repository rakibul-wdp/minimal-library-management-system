import { Link } from "react-router";
import type { IBook } from "../../types/types";
import Button from "../ui/Button";

interface BookTableProps {
  books: IBook[];
  onDelete?: (id: string) => void;
}

export default function BookTable({ books, onDelete }: BookTableProps) {
  return (
    <div className="overflow-x-auto">
      {/* Desktop Table (shown on md screens and larger) */}
      <table className="hidden md:table min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Author</th>
            <th className="py-2 px-4 border">Genre</th>
            <th className="py-2 px-4 border">ISBN</th>
            <th className="py-2 px-4 border">Copies</th>
            <th className="py-2 px-4 border">Available</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td className="py-2 px-4 border">{book.title}</td>
              <td className="py-2 px-4 border">{book.author}</td>
              <td className="py-2 px-4 border">{book.genre}</td>
              <td className="py-2 px-4 border">{book.isbn}</td>
              <td className="py-2 px-4 border">{book.copies}</td>
              <td className="py-2 px-4 border">
                <span
                  className={`inline-block w-6 h-6 rounded-full ${
                    book.available ? "bg-green-500" : "bg-red-500"
                  }`}
                  aria-label={book.available ? "Available" : "Not Available"}
                ></span>
              </td>
              <td className="py-2 px-4 border space-x-2 whitespace-nowrap">
                <Link to={`/books/${book._id}`}>
                  <Button size="sm">View</Button>
                </Link>
                <Link to={`/books/${book._id}/edit`}>
                  <Button size="sm" variant="secondary">
                    Edit
                  </Button>
                </Link>
                <Link to={`/books/${book._id}/borrow`}>
                  <Button size="sm" variant="success">
                    Borrow
                  </Button>
                </Link>
                {onDelete && (
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => onDelete(book._id)}
                  >
                    Delete
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards (shown on screens smaller than md) */}
      <div className="md:hidden space-y-4">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white p-4 rounded-lg shadow border border-gray-200"
          >
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <h3 className="font-semibold">Title</h3>
                <p className="truncate">{book.title}</p>
              </div>
              <div>
                <h3 className="font-semibold">Author</h3>
                <p>{book.author}</p>
              </div>
              <div>
                <h3 className="font-semibold">Genre</h3>
                <p>{book.genre}</p>
              </div>
              <div>
                <h3 className="font-semibold">Status</h3>
                <div className="flex items-center">
                  <span
                    className={`inline-block w-3 h-3 rounded-full mr-2 ${
                      book.available ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {book.available ? "Available" : "Not Available"}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <Link to={`/books/${book._id}`} className="flex-1 min-w-[80px]">
                <Button size="sm" className="w-full">
                  View
                </Button>
              </Link>
              <Link
                to={`/books/${book._id}/edit`}
                className="flex-1 min-w-[80px]"
              >
                <Button size="sm" variant="secondary" className="w-full">
                  Edit
                </Button>
              </Link>
              <Link
                to={`/books/${book._id}/borrow`}
                className="flex-1 min-w-[80px]"
              >
                <Button size="sm" variant="success" className="w-full">
                  Borrow
                </Button>
              </Link>
              {onDelete && (
                <div className="flex-1 min-w-[80px]">
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => onDelete(book._id)}
                    className="w-full"
                  >
                    Delete
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
