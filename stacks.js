class CustomNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new CustomNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    //const holdingPointer = this.top
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

// const myStack = new Stack();
// myStack.push("google");
// myStack.push("udemy");
// myStack.push("discord");
// myStack.peek();
// myStack.pop();
// myStack.pop();
// console.log(myStack.pop())

class StackWithArray {
  constructor() {
    this.array = [];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    return this.array.pop();
  }
  peek() {
    return this.array[this.array.length - 1];
  }
}

// const myStack = new StackWithArray();
// myStack.push("google");
// myStack.push("udemy");
// myStack.push("discord");
// myStack.pop();
// myStack.pop();
// myStack.pop();

// console.log(myStack.peek());