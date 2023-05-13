import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  // remember, without second argument, it will be inifine rendered
  // so to make it render only once, put empty bracket
  // if check console, it will show two log result, reason because using Strict Mode
  // Strict Mode only for development, it wont happen on production
  // no [], run many time
  // with [], run once
  // with [values], run when have that value either props or state
  useEffect(() => {
    console.log("Fetching products", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
