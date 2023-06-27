import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [editBook, setEditBook] = useState(false);

  const handleDeleteBook = () => {
    onDelete(book.id);
  };

  const handleEditBook = () => {
    setEditBook(!editBook);
  };

  const handleSubmit = (id, newTitle) => {
    setEditBook(false);
    onEdit(id, newTitle);
  };

  let booktitle = <h3>{book.title}</h3>;
  if (editBook) {
    booktitle = <BookEdit book={book} key={book.id} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {booktitle}
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
