import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // items = [];

  // in JSX, we don't have for loop
  // remember, inside JSX, we can't use if statement, unless have curly brackets

  // () => {} : function without parameters

  // how to avoid null >>> {items.length === 0 ? <p>No item found</p> : null}
  // ex: {items.length === 0 && <p>No item found</p>}
  // if result is true && 'Mosh', i will return 'Mosh'
  // if result is false && 'Mosh', i will return false

  // Event handler
  // const handleClick = (e: MouseEvent) => console.log(e);

  // hook
  // selectedIndex = variable state
  // setSelectedIndex = function
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // just handleClick instead handleClick()
            // just pass reference
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
