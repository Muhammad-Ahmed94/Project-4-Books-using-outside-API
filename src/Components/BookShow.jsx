import { useState, useContext } from "react";
import BooksContext from "../Context/BooksContext";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [editBook, setEditBook] = useState(false);
  const { deleteBookById } = useContext(BooksContext);

  const handleDeleteBook = () => {
    deleteBookById(book.id);
  };

  const handleEditBook = () => {
    setEditBook(!editBook);
  };

  const handleSubmit = () => {
    setEditBook(false);
  };

  let bookTitle = <h3>{book.title}</h3>;
  if (editBook) {
    bookTitle = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {bookTitle}
      <div className="actions">
        <button onClick={handleEditBook}>Edit</button>
        <button className="delete" onClick={handleDeleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
