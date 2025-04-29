import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';
import "./BooksSingleCard.css"

const BooksSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
<div className="book-card">
  <h2 className="publish-year">{book.publishYear}</h2>
  <h4 className="book-id">{book._id}</h4>
  
  <div className="book-info">
    <PiBookOpenTextLight className="icon" />
    <h2>{book.title}</h2>
  </div>

  <div className="book-info">
    <BiUserCircle className="icon" />
    <h2>{book.author}</h2>
  </div>

  <div className="actions">
    <BiShow className="action-icon blue" onClick={() => setShowModal(true)} />
    <Link to={`/books/details/${book._id}`}>
      <BsInfoCircle className="action-icon green" />
    </Link>
    <Link to={`/books/edit/${book._id}`}>
      <AiOutlineEdit className="action-icon yellow" />
    </Link>
    <Link to={`/books/delete/${book._id}`}>
      <MdOutlineDelete className="action-icon red" />
    </Link>
  </div>

  {showModal && (
    <BookModal book={book} onClose={() => setShowModal(false)} />
  )}
</div>

  );
};

export default BooksSingleCard;