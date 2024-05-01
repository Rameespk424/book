import { useState } from "react";
import useBookContext from "../hooks/use-books-context";

function BookCreate() {
  const [title, setTite] = useState("");

  const { createBook } = useBookContext();

  const handleChange = (event) => {
    setTite(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTite("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
