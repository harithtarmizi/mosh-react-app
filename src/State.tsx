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
  const [customer, setCustomer] = useState({
    name: "John",
    address: { city: "San Francisco", zipCode: 94111 },
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
    // this is how to update nested objects
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 123456 },
    });
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default State;
