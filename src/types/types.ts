export type BookGenre =
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: BookGenre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IBorrow {
  _id: string;
  book: string;
  quantity: number;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface BorrowSummary {
  _id: string;
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

export interface BookListResponse {
  books: IBook[];
  total: number;
  page: number;
  pages: number;
  limit: number;
  data: {
    books: IBook[];
    total: number;
    page: number;
    pages: number;
    limit: number;
  };
}
