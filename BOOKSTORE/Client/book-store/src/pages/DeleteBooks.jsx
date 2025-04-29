import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import BackButton from '../componets/BackButton'
import Spinners from '../componets/Spinners'
import { useSnackbar } from 'notistack'
import { useNavigate, useParams } from 'react-router-dom';
import "./DeleteBook.css"

const DeleteBooks = () => {
const[loading,setLoading]=useState(false)
const navigate = useNavigate()
const {enqueueSnackbar} =useSnackbar()
const{id}=useParams()
const handleDelete=()=>{
  setLoading(true)
  axios.delete(`http://localhost:3434/books/book/${id}`)
  .then(() => {
    setLoading(false);
    enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
    navigate('/');
  })
  .catch((error) => {
    setLoading(false);
    // alert('An error happened. Please Chack console');
    enqueueSnackbar('Error', { variant: 'error' });
    console.log(error);
  });

}

  return (
    <div className="container">
  <BackButton/>
  <h1 className="heading">Delete Book</h1>
  {loading ? <Spinners/> : ''}
  <div className="delete-box">
    <h3 className="delete-text">Are You Sure You want to delete this book?</h3>
    <button className="delete-button" onClick={handleDelete}>
      Yes, Delete it
    </button>
  </div>
</div>
  )
}

export default DeleteBooks
