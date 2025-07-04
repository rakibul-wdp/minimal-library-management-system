import { useState } from "react";
import { useGetBooksQuery } from "../api/bookApi";
import BookTable from "../components/books/BookTable";
import { useToast } from "../hooks/useToast";
import ConfirmationDialog from "../components/ui/ConfirmationDialog";
import { useDeleteBookMutation } from "../api/bookApi";
import Toast from "../components/ui/Toast";
import Pagination from "../components/ui/Pagination";

export default function BookList() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const { data, isLoading, isError } = useGetBooksQuery({ page, filter });
  const [deleteBook] = useDeleteBookMutation();
  const { toast, showToast, hideToast } = useToast();

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await deleteBook(deleteId).unwrap();
      showToast("Book deleted successfully", "success");
    } catch (error) {
      showToast("Failed to delete book", "error");
      console.log(error);
    } finally {
      setDeleteId(null);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading books</div>;

  return (
    <div className="space-y-4">
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Book List</h1>
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(1);
          }}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Genres</option>
          <option value="FICTION">Fiction</option>
          <option value="NON_FICTION">Non-Fiction</option>
          <option value="SCIENCE">Science</option>
          <option value="HISTORY">History</option>
          <option value="BIOGRAPHY">Biography</option>
          <option value="FANTASY">Fantasy</option>
        </select>
      </div>

      <BookTable books={data?.books || []} onDelete={setDeleteId} />

      <Pagination
        currentPage={page}
        totalPages={data?.pages || 1}
        onPageChange={setPage}
      />

      <ConfirmationDialog
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Delete Book"
        message="Are you sure you want to delete this book?"
      />
    </div>
  );
}
