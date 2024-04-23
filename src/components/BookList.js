import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderdBooks = books.map((book) => {
    return (    <BookShow onEdit={onEdit} 
        onDelete={onDelete} key={book.id} book={book} />);

  });

  return <div className="book-list">{renderdBooks}</div>;
}

export default BookList;
