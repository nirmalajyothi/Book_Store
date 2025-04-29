import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import "./BookModal.css"

const BookModal = ({ book, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-box" onClick={(event) => event.stopPropagation()}>
      <AiOutlineClose className="modal-close-icon" onClick={onClose} />
      <h2 className="modal-year">{book.publishYear}</h2>
      <h4 className="modal-id">{book._id}</h4>
      <div className="modal-row">
        <PiBookOpenTextLight className="modal-icon" />
        <h2>{book.title}</h2>
      </div>
      <div className="modal-row">
        <BiUserCircle className="modal-icon" />
        <h2>{book.author}</h2>
      </div>
      <p className="modal-subtitle">Anything You want to show</p>
      <p className="modal-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
        voluptatum sint...
      </p>
    </div>
  </div>
  
  );
};

export default BookModal;