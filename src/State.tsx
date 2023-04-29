import { useState } from "react";

function State() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // do like this
  // NOTES: avoid redundant state variable, group related variable inside object, avoid deeply nested object
  // const [person, setPerson] = useState({
  //   firstName: "",
  //   lastName: "",
  // });
  const [drink, setDrink] = useState({ title: "Americano", price: 5 });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default State;
