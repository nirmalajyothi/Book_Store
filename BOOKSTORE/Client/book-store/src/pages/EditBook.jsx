import React from "react";
import { useState,useEffect } from "react";
import axios, { Axios } from "axios";
import BackButton from "../componets/BackButton";
import Spinners from "../componets/Spinners";
import {enqueueSnackbar, useSnackbar} from "notistack"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./EditBook.css"


const EditBook=()=>{
  const [title,setTitle]=useState()
  const [author,setAuthor]=useState()
  const [publishYear,setPublishYear]=useState()
  const [loading,setLoading] = useState()
  const navigate= useNavigate()
  const {id} =useParams()

  useEffect(()=>{
  setLoading(true)
  axios.get(`http://localhost:3434/books/book/${id}`)
  .then((res)=>{
    setTitle(res.data.title)
    setAuthor(res.data.author)
    setPublishYear(res.data.publishYear)
    setLoading(false)

  }).catch((error)=>{
    setLoading(false)
    alert("an error happened plese check console")
    console.log(error)

  })
  },[])

const handleUpadte=()=>{
  const data={
    title,
    author,
    publishYear
  }

  setLoading(true)
  axios.put(`http://localhost:3434/books/book/${id}`,data)
  .then(()=>{
    setLoading(false)
    enqueueSnackbar("Book edited successfully",{variant:"success"})
    navigate("/")
 

  }).catch((error)=>{
    setLoading(false)
    enqueueSnackbar("Book edited successfully",{variant:"error"})
    console.log(error)

  })

}
  return(
    <div className='edit-book-container'>
<BackButton/>
    <h1 className='edit-book-heading'>Edit Book</h1>
    {loading ? <Spinners /> : ''}
    <div className='edit-book-form'>
      <div className='edit-book-field'>
        <label className='edit-book-label'>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='edit-book-input'
        />
      </div>
      <div className='edit-book-field'>
        <label className='edit-book-label'>Author</label>
        <input
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='edit-book-input'
        />
      </div>
      <div className='edit-book-field'>
        <label className='edit-book-label'>Publish Year</label>
        <input
          type='number'
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className='edit-book-input'
        />
      </div>
      <button className='edit-book-button' onClick={handleUpadte}>
        Save
      </button>
    </div>
  </div>
  
  )
}
export default EditBook