import { useState } from "react";
import { useGetBooksQuery } from "../api/bookApi";
import BookTable from "../components/books/BookTable";
import Pagination from "../components/ui/Pagination";

export default function BookList() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const { data, isLoading, isError } = useGetBooksQuery({ page, filter });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading books</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Book List</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Genres</option>
          <option value="FICTION">Fiction</option>
          <option value="NON_FICTION">Non-Fiction</option>
          {/* Other genres */}
        </select>
      </div>

      <BookTable books={data?.books || []} />

      <Pagination
        currentPage={page}
        totalPages={data?.pages || 1}
        onPageChange={setPage}
      />
    </div>
  );
}
