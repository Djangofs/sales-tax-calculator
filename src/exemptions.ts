const exemptMatches = ["book", "chocolate", "pills"];

export const isItemBasicSalesTaxExempt = (name: string): boolean => {
  return exemptMatches.some((exemptMatch) => name.includes(exemptMatch));
};

export const isItemImported = (name: string): boolean => {
  return name.includes("imported");
};
