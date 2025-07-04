import { useNavigate } from "react-router";
import { useCreateBookMutation } from "../api/bookApi";
import BookForm from "../components/books/BookForm";
import type { IBook } from "../types/types";
import { useToast } from "../hooks/useToast";
import Toast from "../components/ui/Toast";

export default function BookNew() {
  const navigate = useNavigate();
  const [createBook] = useCreateBookMutation();
  const { toast, showToast, hideToast } = useToast();

  const handleSubmit = async (
    bookData: Omit<IBook, "_id" | "createdAt" | "updatedAt">
  ) => {
    try {
      await createBook(bookData).unwrap();
      showToast("Book created successfully", "success");
      navigate("/books");
    } catch (error) {
      showToast("Failed to create book", "error");
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Book</h1>
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
}
