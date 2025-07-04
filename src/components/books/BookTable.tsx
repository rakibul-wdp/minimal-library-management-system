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
      <table className="min-w-full bg-white border border-gray-200">
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
                {book.available ? "Yes" : "No"}
              </td>
              <td className="py-2 px-4 border space-x-2">
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
    </div>
  );
}
