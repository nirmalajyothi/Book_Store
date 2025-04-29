import React from 'react'
import { useState } from 'react'
import Spinners from '../componets/Spinners'
import BackButton from '../componets/BackButton'
import axios from "axios"
import "./CreateBooks.css"
import {useNavigate} from "react-router-dom"
import { useSnackbar} from "notistack"


const CreateBooks = () => {
  const [title,setTitle] =useState('')
  const [author,setAuthor] =useState('')
  const [publishYear,setPublishYear] =useState('')
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate()
  const {enqueueSnackbar}= useSnackbar()

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:3434/books/book', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="create-book-container">
  <BackButton className="back-button" />
  <h1 className="create-book-title">Create Book</h1>
  {loading && <Spinners />}
  <div className="book-form">
    <div className="form-group">
      <label className="form-label">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label className="form-label">Author</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label className="form-label">Publish Year</label>
      <input
        type="number"
        value={publishYear}
        onChange={(e) => setPublishYear(e.target.value)}
        className="form-input"
      />
    </div>
    <button className="save-button" onClick={handleSaveBook}>
      Save
    </button>
  </div>
</div>

  );
}

export default CreateBooks
