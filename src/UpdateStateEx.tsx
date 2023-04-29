import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

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
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quibusdam
        praesentium est nisi, cum commodi error cumque quasi sequi soluta
        officiis inventore consequuntur corporis suscipit incidunt quaerat
        doloremque? Cum, eum! Odit molestias et in voluptate amet placeat
        blanditiis laudantium voluptatum eligendi veniam cumque quae veritatis
        ut eum deleniti libero sit magnam, voluptates neque ex obcaecati ducimus
        perferendis? Totam quae nostrum cum iusto, sed, expedita et enim
        similique est distinctio voluptates hic mollitia odio. Dolores,
        laboriosam illo dicta sit quidem, ab veniam, debitis iusto laborum
        suscipit ipsa maiores fuga cum deserunt commodi architecto? Totam enim
        aliquam sequi aperiam eum quaerat quas!
      </ExpandableText>
    </div>
  );
}

export default UpdateStateEx;
