import { calculateSalesTaxForItem } from "./tax";

import { Item } from "./types";

const getItemFromBasketLine = (line: string): Item => {
  // Get the quantity from first item in string
  const [quantity, ...rest] = line.split(" ");

  // Get the price from last item in string
  const price = parseFloat(rest.pop() || "0");

  rest.pop(); // Remove "at"

  // Get the name from the rest of the string
  const name = rest.join(" ");

  return { quantity: parseInt(quantity), name, price };
};

export const processBasket = (basket: string): string => {
  // Read each line of the basket
  const lines = basket.split("\n");

  const items = lines.map((line) => getItemFromBasketLine(line));

  let totalSalesTax = 0;

  // Process each item
  items.forEach((item) => {
    const salesTax = calculateSalesTaxForItem(item);
    totalSalesTax += salesTax;

    item.price = item.quantity * (item.price + salesTax);
  });

  const receiptLines = items.map((item) => {
    return item.quantity + " " + item.name + ": " + item.price.toFixed(2);
  });

  // Add sales tax and total to receipt
  receiptLines.push("Sales Taxes: " + totalSalesTax.toFixed(2));
  receiptLines.push(
    "Total: " + items.reduce((acc, item) => acc + item.price, 0).toFixed(2)
  );

  return receiptLines.join("\n");
};
