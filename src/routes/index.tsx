import { createBrowserRouter } from "react-router";
import App from "../App";
import BookList from "../pages/BookList";
import BookDetail from "../pages/BookDetail";
import BookEdit from "../pages/BookEdit";
import BookNew from "../pages/BookNew";
import BorrowBook from "../pages/BorrowBook";
import BorrowSummary from "../pages/BorrowSummary";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "books", element: <BookList /> },
      { path: "books/new", element: <BookNew /> },
      { path: "books/:id", element: <BookDetail /> },
      { path: "books/:id/edit", element: <BookEdit /> },
      { path: "books/:id/borrow", element: <BorrowBook /> },
      { path: "borrow-summary", element: <BorrowSummary /> },
    ],
  },
]);
