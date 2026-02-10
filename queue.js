export class Queue {
  constructor() {
    this.queue = [];
    this.queueFront = 0;
    this.queueEnd = 0;
  }

  enqueue(item) {
    this.queue[this.queueEnd] = item;
    this.queueEnd++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.queue[this.queueFront];
    delete this.queue[this.queueFront];
    this.queueFront++;
    return item;
  }

  isEmpty() {
    return this.queueFront === this.queueEnd;
  }
}

// const knightMovesQueue = new Queue();
// console.log(knightMovesQueue);
// knightMovesQueue.enqueue([0, 0]);
// console.log(knightMovesQueue);
// const dequeuedArray = knightMovesQueue.dequeue();
// console.log(dequeuedArray);
// const sub2XAdd1Y = [
//   dequeuedArray,
//   [dequeuedArray[0] - 2, dequeuedArray[1] + 1],
// ];
// console.log(sub2XAdd1Y);
// knightMovesQueue.enqueue(sub2XAdd1Y);
// console.log(knightMovesQueue);
// const dequeuedArray2 = knightMovesQueue.dequeue();
// console.log(dequeuedArray2);
// const sub2XAdd1Y2 = [
//   ...dequeuedArray2,
//   [
//     dequeuedArray2[dequeuedArray2.length - 1][0] - 2,
//     dequeuedArray2[dequeuedArray2.length - 1][1] + 1,
//   ],
// ];
// console.log(sub2XAdd1Y2);
// knightMovesQueue.enqueue(sub2XAdd1Y2);
// console.log(knightMovesQueue);
// const dequeuedArray3 = knightMovesQueue.dequeue();
// console.log(dequeuedArray3);
// const sub2XAdd1Y3 = [
//   ...dequeuedArray3,
//   [
//     dequeuedArray3[dequeuedArray3.length - 1][0] - 2,
//     dequeuedArray3[dequeuedArray3.length - 1][1] + 1,
//   ],
// ];
// console.log(sub2XAdd1Y3);
