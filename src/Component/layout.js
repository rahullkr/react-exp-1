import React from "react";

function Layout({ name, email, gender, id, list }) {
  let listElement;

  switch (list) {
    case "alpha":
      listElement = (
        <ol type="a">
          <li>{id}</li>
          <li>{name}</li>
          <li>{email}</li>
          <li>{gender}</li>
          <li>{list}</li>
        </ol>
      );
      break;
    case "roman":

      listElement = (
        <ol type="i">
          <li>{id}</li>
          <li>{name}</li>
          <li>{email}</li>
          <li>{gender}</li>
          <li>{list}</li>
        </ol>
      );
      break;
    case "numeric":
      listElement = (
        <ol>
          <li>{id}</li>
          <li>{name}</li>
          <li>{email}</li>
          <li>{gender}</li>
          <li>{list}</li>
        </ol>
      );
      break;
    case "big alpha":
      listElement = (
        <ol type="A">
          <li>{id}</li>
          <li>{name}</li>
          <li>{email}</li>
          <li>{gender}</li>
          <li>{list}</li>
        </ol>
      );
      break;
    case "bullets":
      listElement = (
        <ul>
          <li>{id}</li>
          <li>{name}</li>
          <li>{email}</li>
          <li>{gender}</li>
          <li>{list}</li>
        </ul>
      );
      break;
    default:
      listElement = null;
      break;
  }

  return listElement;
}

export default Layout;
