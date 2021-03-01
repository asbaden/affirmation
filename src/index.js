import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {books} from "./books"

import "./index.css"






// stateless funcitonal component 
// always return JSX


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



const Book = (props) => {
  console.log(props);
  const {img, title, author} = props
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () =>{
    alert("hello world")
  }
  
  return (
  <article className="book" onMouseOver={()=>{
    console.log(title);
    
  }}>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}></button>
  </article>
  )
}


ReactDOM.render(<BookList />,document.getElementById('root'));