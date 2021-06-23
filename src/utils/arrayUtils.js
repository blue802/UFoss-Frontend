export const reshapeOne2Two = (array, col = 5) => {
  const newArray = [];
  const copyArray = [...array];

  while (copyArray.length) {
    newArray.push(copyArray.splice(0, col));
  }

  return newArray;
};
