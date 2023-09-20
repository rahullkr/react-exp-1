import Layout from "./Component/layout";
import items from "./data/data.js";
import React, { useState, useEffect } from "react";
import './App.css'


function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      {items.map((item) => (
        <Layout
          id={item.id}
          name={item.name}
          email={item.email}
          gender={item.gender}
          list={item.list}
        />
      ))}

      <div className={`App`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
}

export default App;
