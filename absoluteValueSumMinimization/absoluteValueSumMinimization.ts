function absoluteValuesSumMinimization(a: number[]): number {
  //Check if array length is even or odd
  const isEven = a.length % 2 === 0;
  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}
