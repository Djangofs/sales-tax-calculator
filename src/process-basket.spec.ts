import { processBasket } from "./process-basket";

describe("processBasket", () => {
  it("should process input 1", () => {
    // Arrange
    const basket = `2 book at 12.49\n1 music CD at 14.99\n1 chocolate bar at 0.85`;
    const output = `2 book: 24.98\n1 music CD: 16.49\n1 chocolate bar: 0.85\nSales Taxes: 1.50\nTotal: 42.32`;

    // Act
    const result = processBasket(basket);

    // Assert
    expect(result).toBe(output);
  });

  it("should process input 2", () => {
    // Arrange
    const basket = `1 imported box of chocolates at 10.00\n1 imported bottle of perfume at 47.50`;
    const output = `1 imported box of chocolates: 10.50\n1 imported bottle of perfume: 54.65\nSales Taxes: 7.65\nTotal: 65.15`;

    // Act
    const result = processBasket(basket);

    // Assert
    expect(result).toBe(output);
  });

  it("should process input 3", () => {
    // Arrange
    const basket = `1 imported bottle of perfume at 27.99\n1 bottle of perfume at 18.99\n1 packet of headache pills at 9.75\n3 imported boxes of chocolates at 11.25`;
    const output = `1 imported bottle of perfume: 32.19\n1 bottle of perfume: 20.89\n1 packet of headache pills: 9.75\n3 imported boxes of chocolates: 35.55\nSales Taxes: 6.70\nTotal: 98.38`;

    // Act
    const result = processBasket(basket);

    // Assert
    expect(result).toBe(output);
  });
});
