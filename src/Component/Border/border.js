import React from "react";
import "./border.css"; // Import the CSS file

function Border(props) {
  return (
    <>
      <div className="border-container"> 
        {props.children}
      </div>
    </>
  );
}

export default Border;
