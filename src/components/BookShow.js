import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

const {deleteBookById} = useBookContext();


  const handleDeleteclick = () => {
    deleteBookById(book.id);
  };

  const handleEditeclick = () => {
    setShowEdit(!showEdit);
  };
 
  const handleSubmit = () => {
    setShowEdit(false);
  
  }


  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit  onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book" />

      <div>{content}</div>

      <div className="actions">
        <button className="edit" onClick={handleEditeclick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteclick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
