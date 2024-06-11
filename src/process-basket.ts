type Item = {
  quantity: number;
  name: string;
  price: number;
};

const exemptMatches = ["book", "chocolate", "pills"];

export const processBasket = (basket: string): string => {
  // Read each line of the basket
  const lines = basket.split("\n");

  // Fine the quantity, name, and price of each item
  const items: Item[] = lines.map((line) => {
    // Get the quantity from first item in string
    const [quantity, ...rest] = line.split(" ");

    // Get the price from last item in string
    const price = parseFloat(rest.pop() || "0");

    rest.pop(); // Remove "at"

    // Get the name from the rest of the string
    const name = rest.join(" ");

    return { quantity: parseInt(quantity), name, price };
  });

  let totalSalesTax = 0;

  // Process each item
  items.forEach((item) => {
    let totalItemPrice = item.price;
    // Add import tax to imported items
    if (item.name.includes("imported")) {
      const importTax = item.price * 0.05;
      const roundedImportTax = Math.ceil(importTax * 20) / 20;

      totalItemPrice += roundedImportTax;
      totalSalesTax += roundedImportTax;
    }

    // Add basic sales tax to non-exempt items
    if (
      // Refactor to isItemExempt
      !item.name.includes("book") &&
      !item.name.includes("chocolate") &&
      !item.name.includes("pills")
    ) {
      // Calculate sales tax
      const salesTax = item.price * 0.1;
      const roundedSalesTax = Math.ceil(salesTax * 20) / 20;

      totalItemPrice += roundedSalesTax;

      // Increment total sales tax
      totalSalesTax += roundedSalesTax;
    }

    // Calculate total price
    totalItemPrice = item.quantity * totalItemPrice;

    item.price = totalItemPrice;
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
