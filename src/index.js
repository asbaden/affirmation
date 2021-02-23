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

const author = "Amelia Hepworth";
const title = "I Love You to the Moon and Back";
const img = "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"

function BookList() {
  return (
  <section className="bookList">
    <Book job="developer" />
    
  </section>
  )
}


const Book = (props) => {
  console.log("this is props", props);
  
  return (
  <article className="book">
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  )
}


ReactDOM.render(<BookList />,document.getElementById('root'));