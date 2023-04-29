import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { BsFillCalendarFill } from "react-icons/bs";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
      <BsFillCalendarFill color="red" size="40" />
    </div>
  );
}

export default App;

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
