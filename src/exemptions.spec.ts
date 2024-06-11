import { isItemBasicSalesTaxExempt, isItemImported } from "./exemptions";

describe("exemptions", () => {
  describe("isItemBasicSalesTaxExempt", () => {
    it("should return true for book", () => {
      // Arrange
      const name = "book";
      // Act
      const result = isItemBasicSalesTaxExempt(name);
      // Assert
      expect(result).toBe(true);
    });
    it("should return true for chocolate", () => {
      // Arrange
      const name = "chocolate";
      // Act
      const result = isItemBasicSalesTaxExempt(name);
      // Assert
      expect(result).toBe(true);
    });
    it("should return true for pills", () => {
      // Arrange
      const name = "pills";
      // Act
      const result = isItemBasicSalesTaxExempt(name);
      // Assert
      expect(result).toBe(true);
    });
    it("should return false for music CD", () => {
      // Arrange
      const name = "music CD";
      // Act
      const result = isItemBasicSalesTaxExempt(name);
      // Assert
      expect(result).toBe(false);
    });
  });

  describe("isItemImported", () => {
    it("should return true for imported box of chocolates", () => {
      // Arrange
      const name = "imported box of chocolates";
      // Act
      const result = isItemImported(name);
      // Assert
      expect(result).toBe(true);
    });
    it("should return true for imported bottle of perfume", () => {
      // Arrange
      const name = "imported bottle of perfume";
      // Act
      const result = isItemImported(name);
      // Assert
      expect(result).toBe(true);
    });
    it("should return false for bottle of perfume", () => {
      // Arrange
      const name = "bottle of perfume";
      // Act
      const result = isItemImported(name);
      // Assert
      expect(result).toBe(false);
    });
  });
});
