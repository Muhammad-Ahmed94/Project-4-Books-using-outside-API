import { useState, useContext } from "react";
import BooksContext from "../Context/BooksContext";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, newTitle);
  };

  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={newTitle} onChange={handleChange} autoFocus />
        <button>Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
