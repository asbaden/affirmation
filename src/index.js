import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {books} from "./books"

import Book from "./Book"


import "./index.css"



//JSX RULES
// return single element 
// div / section / article or Fragment
// use camelCase for html attribute 
// className instead of classclose every element 
// formatting


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