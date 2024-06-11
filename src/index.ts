const world = "world";

export const hello = (who: string = world): string => {
  return `Hello ${who}!`;
};
