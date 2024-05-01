import BookShow from "./BookShow";
import useBookContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBookContext();


  const renderdBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderdBooks}</div>;
}

export default BookList;
