import React, { Fragment } from "react";
import ReactDOM from "react-dom";

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
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
  )
}
const Book = () => {
  return (
  <article className="book">
    <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt=""/>
    
    <h1>I love you to the moon and back</h1>
    <h4>Amelia Hepworth</h4>
  </article>
  )
}


ReactDOM.render(<BookList />,document.getElementById('root'));