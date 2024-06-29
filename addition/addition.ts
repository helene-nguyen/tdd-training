export const handleAddition = (a: number | string, b: number) => {
  if (typeof a === 'number') {
    return a + b;
  }

  if (typeof a === 'string') {
    return 'Impossible';
  }
};
