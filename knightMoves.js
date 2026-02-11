import { Queue } from './queue.js';
import {
  knightMoveSubXAddY,
  knightMoveAddXAddY,
  knightMoveSubXSubY,
  knightMoveAddXSubY,
} from './utils.js';

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
        `You made it in ${dequeuedArray.length - 1} moves. Here's your path:`
      );
      // console.log(dequeuedArray);
      return dequeuedArray.forEach((item) => console.log(item));
    }
    /* Below are the eight possible moves that can be taken by the knight on 
    each pass from wherever they are on the chess board */
    knightMoveSubXAddY(knightMovesQueue, dequeuedArray, 2, 1);
    knightMoveSubXSubY(knightMovesQueue, dequeuedArray, 2, 1);
    knightMoveAddXAddY(knightMovesQueue, dequeuedArray, 2, 1);
    knightMoveAddXSubY(knightMovesQueue, dequeuedArray, 2, 1);
    knightMoveSubXAddY(knightMovesQueue, dequeuedArray, 1, 2);
    knightMoveSubXSubY(knightMovesQueue, dequeuedArray, 1, 2);
    knightMoveAddXAddY(knightMovesQueue, dequeuedArray, 1, 2);
    knightMoveAddXSubY(knightMovesQueue, dequeuedArray, 1, 2);
  }
}

// knightMoves([0, 0], [3, 3]);
// knightMoves([3, 3], [1, 4]);
// knightMoves([3, 3], [5, 7]);
// knightMoves([3, 3], [4, 3]);
// knightMoves([0, 0], [3, 3]);
// knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
