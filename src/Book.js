import React from 'react'

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

export default Book

