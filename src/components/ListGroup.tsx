function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  // in JSX, we don't have for loop
  // remember, inside JSX, we can't use if statement, unless have curly brackets

  // how to avoid null >>> {items.length === 0 ? <p>No item found</p> : null}
  // ex: {items.length === 0 && <p>No item found</p>}
  // if result is true && 'Mosh', i will return 'Mosh'
  // if result is false && 'Mosh', i will return false
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
