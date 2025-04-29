import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import "./BooksTable.css"

const BooksTable = ({ books }) => {
  return (
    <table className="books-table">
  <thead>
    <tr>
      <th className="books-th">No</th>
      <th className="books-th">Title</th>
      <th className="books-th hide-on-mobile">Author</th>
      <th className="books-th hide-on-mobile">Publish Year</th>
      <th className="books-th">Operations</th>
    </tr>
  </thead>
  <tbody>
    {books.map((book, index) => (
      <tr key={book._id} className="books-tr">
        <td className="books-td">{index + 1}</td>
        <td className="books-td">{book.title}</td>
        <td className="books-td hide-on-mobile">{book.author}</td>
        <td className="books-td hide-on-mobile">{book.publishYear}</td>
        <td className="books-td">
          <div className="action-icons">
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle className=" icon-green" />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className=" icon-yellow" />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className="icon-red" />
            </Link>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

  );
};

export default BooksTable;