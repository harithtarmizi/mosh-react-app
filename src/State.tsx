import { useState } from "react";
import produce from "immer";

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
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
    // this is how to update nested objects
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 123456 },
    });

    // Add
    setTags([...tags, "exciting"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));

    // no need brand new copy, only object that need to be modified
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    // use Immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {/* {drink.price} */}
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default State;
