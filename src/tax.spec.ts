import { calculateSalesTaxForItem } from "./tax";

describe("tax", () => {
  it("should calculate sales tax for item", () => {
    // Arrange
    const items = [
      { quantity: 1, name: "music CD", price: 14.99, output: 1.5 },
      {
        quantity: 1,
        name: "imported box of chocolates",
        price: 10.0,
        output: 0.5,
      },
      {
        quantity: 1,
        name: "imported bottle of perfume",
        price: 47.5,
        output: 7.15,
      },
      { quantity: 1, name: "bottle of perfume", price: 18.99, output: 1.9 },
      { quantity: 1, name: "packet of headache pills", price: 9.75, output: 0 },
    ];
    const output = 1.5;

    // Act
    items.forEach((item) => {
      const result = calculateSalesTaxForItem(item);
      // Assert
      expect(result).toBe(item.output);
    });
  });
});
