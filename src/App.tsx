import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // do like this
  // NOTES: avoid redundant state variable, group related variable inside object, avoid deeply nested object
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  return <div></div>;
}

export default App;

// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";
// import { BsFillCalendarFill } from "react-icons/bs";
// import Like from "./components/Like";

// function App() {
//   const [alertVisible, setAlertVisible] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
//       )}
//       <Button onClick={() => setAlertVisible(true)}>My Button</Button>
//       <BsFillCalendarFill color="red" size="40" />
//       <Like onClick={() => console.log("Clicked!")} />
//     </div>
//   );
// }

// export default App;

// import ListGroup from "./components/ListGroup";

// function App() {
//   const items = ["New York", "Tokyo", "Paris", "Beijing", "San Francisco"];

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="List group"
//         onSelectItem={(items) => console.log("Clicked!")}
//       />
//     </div>
//   );
// }

// export default App;
