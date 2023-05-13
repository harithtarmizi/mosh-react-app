import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Socket", amount: 3, category: "Utilities" },
    { id: 2, description: "Airpod", amount: 79, category: "Entertainment" },
    { id: 3, description: "Bulb", amount: 5, category: "Utilities" },
    { id: 4, description: "Strawberry", amount: 10, category: "Groceries" },
  ]);

  const visibleCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleCategory}
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
