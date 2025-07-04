import { useParams, useNavigate } from "react-router";
import { useGetBookQuery } from "../api/bookApi";
import { useBorrowBookMutation } from "../api/borrowApi";
import { useToast } from "../hooks/useToast";
import Toast from "../components/ui/Toast";
import { useState } from "react";

export default function BorrowBook() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: book, isLoading, isError } = useGetBookQuery(id || "");
  const [borrowBook] = useBorrowBookMutation();
  const { toast, showToast, hideToast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id || !dueDate) return;

    try {
      await borrowBook({
        book: id,
        quantity,
        dueDate: new Date(dueDate).toISOString(),
      }).unwrap();
      showToast("Book borrowed successfully", "success");
      navigate("/books");
    } catch (error) {
      showToast("Failed to borrow book", "error");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !book) return <div>Error loading book</div>;

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Borrow "{book.title}"</h1>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Available Copies: {book.copies}
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            max={book.copies}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Borrow Book
        </button>
      </form>
    </div>
  );
}
