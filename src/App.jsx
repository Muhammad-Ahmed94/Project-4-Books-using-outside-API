import "./index.css";
import { useEffect, useContext } from "react";
import BooksContext from "./Context/BooksContext";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
