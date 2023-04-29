import { useState } from "react";

function UpdateStateEx() {
  const [game, setGame] = useState({ id: 1, player: { name: "John" } });
  const [pizza, setPizza] = useState({
    name: "Pepperoni",
    toppings: ["Mushrooms"],
  });
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });

    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });

    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default UpdateStateEx;
