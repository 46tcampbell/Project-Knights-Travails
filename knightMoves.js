import { Queue } from './queue.js';

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

  let test;

  const knightMovesQueue = new Queue();
  knightMovesQueue.enqueue(array1);

  while (!knightMovesQueue.isEmpty()) {
    const dequeuedArray = knightMovesQueue.dequeue();
    if (dequeuedArray.length === 2) {
      const sub2XAdd1Y = [
        dequeuedArray,
        [dequeuedArray[0] - 2, dequeuedArray[1] + 1],
      ];
      if (
        sub2XAdd1Y[0] >= 0 &&
        sub2XAdd1Y[0] < 7 &&
        sub2XAdd1Y[1] >= 0 &&
        sub2XAdd1Y[1] < 7
      ) {
        knightMovesQueue.enqueue(sub2XAdd1Y);
      }
    } else {
      const sub2XAdd1Y = [
        ...dequeuedArray,
        [
          dequeuedArray[dequeuedArray.length - 1][0],
          dequeuedArray[dequeuedArray.length - 1][1],
        ],
      ];
      if (
        sub2XAdd1Y[0] >= 0 &&
        sub2XAdd1Y[0] < 7 &&
        sub2XAdd1Y[1] >= 0 &&
        sub2XAdd1Y[1] < 7
      ) {
        knightMovesQueue.enqueue(sub2XAdd1Y);
      }
    }
    test = knightMovesQueue.dequeue();
  }
  console.log(test);
}

knightMoves([0, 1], [0, 1]);
