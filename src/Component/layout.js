function Layout({ items }) {
    return (
      <>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {Object.keys(item).map((key) => (
                <div key={key}>
                  <strong>{key}:</strong> {item[key]}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </>
    );
  }
  
  export default Layout;
  