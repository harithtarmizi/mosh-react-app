import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Ball", amount: 10, category: "Sport" },
    { id: 2, description: "Mug", amount: 5, category: "Kitchen" },
    { id: 3, description: "Socks", amount: 8, category: "Attire" },
    { id: 4, description: "Maggie", amount: 3, category: "Food" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        // we set onDelete to arrow function that take id
        // call setExpenses, get all expenses except the one with given id
        // any argument with id === id will be excluded from array of expense
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
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
