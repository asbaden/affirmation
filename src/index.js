import React from "react";
import ReactDOM from "react-dom";


function Greeting (){
  return <h4>This is Gus and this is not my first component</h4>;
}


ReactDOM.render(<Greeting />,document.getElementById('root'))