import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);
  /*  */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, newTitle);
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
