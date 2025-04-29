import React from 'react'
import BooksSingleCard from './BooksSignleCard'
import "./BooksCard.css"
 

const BooksCard = ({books}) => {
  return (
    <div className="grid-container">
    {books.map((item) => (
      <BooksSingleCard key={item._id} book={item} />
    ))}
  </div>

  )
}

export default BooksCard
