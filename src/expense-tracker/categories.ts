// do as const since have error in zod, const act can still be change value if we do like push array
const categories = ["Groceries", "Utilities", "Entertainments"] as const;

export default categories;
