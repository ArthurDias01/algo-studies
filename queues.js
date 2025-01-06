class CustomNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new CustomNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }

  printQueue() {
    const array = [];
    let currentNode = this.first;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myQueue = new Queue();
// Joy
// Matt
// Pavel
// Samir

// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("Pavel");
// myQueue.enqueue("Samir");
// console.log(myQueue.printQueue());
// myQueue.dequeue();
// console.log(myQueue.printQueue());
// myQueue.dequeue();
// console.log(myQueue.printQueue());
// myQueue.dequeue();
// console.log(myQueue.printQueue());