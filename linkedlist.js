class CustomNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class NodeDoubly {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new CustomNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new CustomNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    if (index < 0 || index > this.length || typeof index !== "number") {
      return false;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  insert(index, value) {
    if (index < 0 || typeof index !== "number") {
      return false; // Invalid index
    }
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new CustomNode(value);
    let current = this.head;

    // Traverse to the node just before the insertion point
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.length++;
    return this;
  }

  delete(index) {
    if (index < 0 || typeof index !== "number") {
      return false;
    }
    const leadNode = this.traverseToIndex(index - 1);
    const deleteNode = leadNode.next;
    leadNode.next = deleteNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new CustomNodeDoubly(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new CustomNodeDoubly(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    if (index < 0 || index > this.length || typeof index !== "number") {
      return false;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  insert(index, value) {
    if (index < 0 || typeof index !== "number") {
      return false; // Invalid index
    }
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new CustomNodeDoubly(value);

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this;
  }

  delete(index) {
    if (index < 0 || typeof index !== "number") {
      return false;
    }
    const leadNode = this.traverseToIndex(index - 1);
    const deleteNode = leadNode.next;
    leadNode.next = deleteNode.next;
    deleteNode.next.prev = leadNode;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
//myLinkedList.append(5);
//myLinkedList.append(16);
//myLinkedList.prepend(1);
//myLinkedList.insert(2, 99);
//myLinkedList.insert(20, 88);
//console.log(myLinkedList.reverse());