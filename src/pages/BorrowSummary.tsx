import { useGetBorrowSummaryQuery } from "../api/borrowApi";

export default function BorrowSummary() {
  const { data: summary, isLoading, isError } = useGetBorrowSummaryQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading borrow summary</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Borrow Summary</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Book Title</th>
              <th className="py-2 px-4 border">ISBN</th>
              <th className="py-2 px-4 border">Total Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {summary?.map((item) => (
              <tr key={item._id}>
                <td className="py-2 px-4 border">{item.book.title}</td>
                <td className="py-2 px-4 border">{item.book.isbn}</td>
                <td className="py-2 px-4 border">{item.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
