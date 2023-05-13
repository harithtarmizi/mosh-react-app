import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

const App2 = () => {
  const [category, setCategory] = useState("");

  const connect = () => console.log("Connecting");
  const disconnect = () => console.log("Disconnecting");
  

  // if see console use will see 1. Connecting 2. Disconnecting 3. Connecting
  // 1. strict mode on, react render each component twice
  // 2. react mount component to the screen, and unmount that when no longer needed
  // 3. so when react mount component for sec time, it unmount it at first time, that is cleanup code disconnect executed
  useEffect(() => {
    connect()

    return () => disconnect()
  })

  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App2;
