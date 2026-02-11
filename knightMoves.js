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

  // Below we create the queue and enqueue the first argument array passed.
  const knightMovesQueue = new Queue();
  knightMovesQueue.enqueue(array1);

  // Below while loop runs until queue is empty or base case hits (reaching 2nd argument array coordinates)
  while (!knightMovesQueue.isEmpty()) {
    const dequeuedArray = knightMovesQueue.dequeue();
    // Below is the base case to exit loop and return function
    if (
      dequeuedArray[dequeuedArray.length - 1][0] === array2[0] &&
      dequeuedArray[dequeuedArray.length - 1][1] === array2[1]
    ) {
      console.log(
        `You made it in ${dequeuedArray.length} moves. Here's your path:`
      );
      // console.log(dequeuedArray);
      return dequeuedArray.forEach((item) => console.log(item));
    }
    /* This if statement check is important as the first time an array is added is different codes then subsequent passes
   so the same sub2XAdd1Y item is listed twice.
    */
    if (!dequeuedArray.some((el) => Array.isArray(el))) {
      const sub2XAdd1Y = [
        dequeuedArray,
        [dequeuedArray[0] - 2, dequeuedArray[1] + 1],
      ];
      if (
        sub2XAdd1Y[sub2XAdd1Y.length - 1][0] >= 0 &&
        sub2XAdd1Y[sub2XAdd1Y.length - 1][0] <= 7 &&
        sub2XAdd1Y[sub2XAdd1Y.length - 1][1] >= 0 &&
        sub2XAdd1Y[sub2XAdd1Y.length - 1][1] <= 7
      ) {
        knightMovesQueue.enqueue(sub2XAdd1Y);
      }
      const add1XAdd2Y = [
        dequeuedArray,
        [dequeuedArray[0] + 1, dequeuedArray[1] + 2],
      ];
      if (
        add1XAdd2Y[add1XAdd2Y.length - 1][0] >= 0 &&
        add1XAdd2Y[add1XAdd2Y.length - 1][0] <= 7 &&
        add1XAdd2Y[add1XAdd2Y.length - 1][1] >= 0 &&
        add1XAdd2Y[add1XAdd2Y.length - 1][1] <= 7
      ) {
        knightMovesQueue.enqueue(add1XAdd2Y);
      }
    } else {
      const sub2XAdd1Y = [
        ...dequeuedArray,
        [
          dequeuedArray[dequeuedArray.length - 1][0] - 2,
          dequeuedArray[dequeuedArray.length - 1][1] + 1,
        ],
      ];
      if (
        sub2XAdd1Y[sub2XAdd1Y.length - 1][0] >= 0 &&
        sub2XAdd1Y[sub2XAdd1Y.length - 1][0] <= 7 &&
        sub2XAdd1Y[sub2XAdd1Y.length - 1][1] >= 0 &&
        sub2XAdd1Y[sub2XAdd1Y.length - 1][1] <= 7
      ) {
        knightMovesQueue.enqueue(sub2XAdd1Y);
      }
      const add1XAdd2Y = [
        ...dequeuedArray,
        [
          dequeuedArray[dequeuedArray.length - 1][0] + 1,
          dequeuedArray[dequeuedArray.length - 1][1] + 2,
        ],
      ];
      if (
        add1XAdd2Y[add1XAdd2Y.length - 1][0] >= 0 &&
        add1XAdd2Y[add1XAdd2Y.length - 1][0] <= 7 &&
        add1XAdd2Y[add1XAdd2Y.length - 1][1] >= 0 &&
        add1XAdd2Y[add1XAdd2Y.length - 1][1] <= 7
      ) {
        knightMovesQueue.enqueue(add1XAdd2Y);
      }
    }
    // console.log(knightMovesQueue.dequeue());
  }
}

// knightMoves([0, 0], [3, 3]);
// knightMoves([3, 3], [1, 4]);
knightMoves([3, 3], [5, 7]);
