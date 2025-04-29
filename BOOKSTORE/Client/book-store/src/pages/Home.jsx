import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinners from "../componets/Spinners";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import "./Home.css"; // Import the CSS file
import BooksTable from "../componets/home/BooksTable";
import BooksCard from "../componets/home/BooksCard";

const Home = () => {
  const [Book, setBook] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [showType,setShowType]= useState()

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3434/books/book")
      .then((res) => {
        setBook(res.data.data);
        console.log(res.data.data)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="buttons">
        <button className="btn1"  onClick={()=>setShowType("table")}>
            Table
        </button>
        
        <button className="btn2" onClick={()=>setShowType("card")}>
          Card
        </button>
        
      </div>
      <div className="header">
        <h1>Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="add-book-btn" />
        </Link>
      </div>
      {Loading ? (
        <Spinners />
      ) : showType === "table" ? (
      <BooksTable books={Book}/>
      ):(<BooksCard books={Book}/>)}
    </div>
  );
};

export default Home;