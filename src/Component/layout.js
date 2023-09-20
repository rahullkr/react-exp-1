import React from "react";

function Layout({ id, name, about, address, company, list }) {
  let listElement;

  if (list === "bullet") {
    listElement = <ul>{renderItems()}</ul>;
  } else if (list === "alpha") {
    listElement = <ol type="a">{renderItems()}</ol>;
  } else if (list === "numbered") {
    listElement = <ol>{renderItems()}</ol>;
  } 

  function renderItems() {
    return (
      <>
        <li>{id}</li>
        <li>{name}</li>
        <li>{about}</li>
        <li>{address}</li>
        <li>{company}</li>
      </>
    );
  }

  return listElement;
}

export default Layout;
