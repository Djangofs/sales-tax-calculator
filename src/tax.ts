import { isItemBasicSalesTaxExempt, isItemImported } from "./exemptions";
import { Item } from "./types";

const SALES_TAX_PCT = 0.1;
const IMPORT_TAX_PCT = 0.05;

const roundTaxToNearestPt5 = (tax: number): number => {
  return Math.ceil(tax * 20) / 20;
};

const calculateBasicSalesTax = (price: number): number => {
  const salesTax = price * SALES_TAX_PCT;
  return roundTaxToNearestPt5(salesTax);
};

const calculateImportTax = (price: number): number => {
  const importTax = price * IMPORT_TAX_PCT;
  return roundTaxToNearestPt5(importTax);
};

export const calculateSalesTaxForItem = (item: Item): number => {
  let totalSalesTax = 0;

  // Add import tax to imported items
  if (isItemImported(item.name)) {
    const importTax = calculateImportTax(item.price);
    totalSalesTax += importTax;
  }

  // Add basic sales tax to non-exempt items
  if (!isItemBasicSalesTaxExempt(item.name)) {
    const salesTax = calculateBasicSalesTax(item.price);
    totalSalesTax += salesTax;
  }

  return totalSalesTax;
};
