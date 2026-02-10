class Queue {
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

const knightMovesQueue = new Queue();
console.log(knightMovesQueue);
console.log(knightMovesQueue.dequeue());
knightMovesQueue.enqueue([0, 1]);
knightMovesQueue.enqueue([0, 1]);
knightMovesQueue.enqueue([0, 1]);
knightMovesQueue.enqueue([0, 1]);
console.log(knightMovesQueue.dequeue());
console.log(knightMovesQueue);
