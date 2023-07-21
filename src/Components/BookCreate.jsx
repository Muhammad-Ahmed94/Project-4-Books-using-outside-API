import { useState, useContext } from "react";
import BooksContext from "../Context/BooksContext";

function BookCreate() {
  const { handleCreate } = useContext(BooksContext);

  const [title, setTitle] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleCreate(title);
    setTitle("");
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h1>Add a Book</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          className="input"
          value={title}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </div>
  );
}

export default BookCreate;
