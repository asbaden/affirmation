import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {books} from "./books"

import Book from "./Book"


import "./index.css"




function BookList() {
  
  return (
  <section className="bookList">
   {books.map((book)=>{
     return (
      <Book key={book.id} {...book}></Book>
     )
   })}
  </section>
  )
}






ReactDOM.render(<BookList />,document.getElementById('root'));