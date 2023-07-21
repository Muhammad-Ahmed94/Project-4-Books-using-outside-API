import { createContext, useState } from "react";
import axios from "axios";
const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const handleCreate = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const editedBook = books.map((book) => {
      if (book.id === id) {
        return { ...books, ...response.data };
      }
      return book;
    });
    setBooks(editedBook);
  };

  const valueToShare = {
    books,
    handleCreate,
    editBookById,
    deleteBookById,
    fetchBooks,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export default BookContext;
export { Provider };