export function knightMoves(array1, array2) {
  //   Below if statement checks that the arguments passed are arrays of 2 digits.

  if (
    !Array.isArray(array1) ||
    !Array.isArray(array2) ||
    (Array.isArray(array1) && array1.length !== 2) ||
    (Array.isArray(array2) && array2.length !== 2)
  ) {
    throw new Error(
      'Please provide two arrays each with an x and y coordinate. Example: ([x, y], [x, y])'
    );
  }
  // Below if statement checks that the coordinates of the arrays are between 0 and 7
  if (array1[0] < 0 || array1[0] > 7 || array2[0] < 0 || array2[0] > 7) {
    throw new Error(
      'Please ensure the x and y coordinates are between 0 and 7'
    );
  }
}

knightMoves([0, 1], [0, 1]);
