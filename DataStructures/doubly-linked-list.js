class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);
    if (this.length == 0) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length == 0) return undefined;
    const oldTail = this.tail;
    if (this.length == 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    const reverseDirection = index > this.length / 2;
    let tempIndex, current;

    if (reverseDirection) {
      tempIndex = this.length - 1;
      current = this.tail;
      while (index !== tempIndex) {
        current = current.prev;
        tempIndex--;
      }
    } else {
      tempIndex = 0;
      current = this.head;
      while (index !== tempIndex) {
        current = current.next;
        tempIndex++;
      }
    }

    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }

    return false;
  }

  print() {
    let tempNode = this.head;
    while (tempNode) {
      console.log(tempNode.val);
      tempNode = tempNode.next;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return this.unshift(value);
    if (index == this.length - 1) return this.push(value);

    const newNode = new Node(value);

    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;

    previousNode.next = newNode;
    newNode.prev = previousNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    let foundNode = this.get(index);
    const prevNode = foundNode.prev;
    const nextNode = foundNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode;
  }

  reverse() {
    if (this.length === 0) return this;
    let newHead = this.tail;
    let newTail = this.head;

    let tempPrev = newHead;
    let temp = this.tail.prev;
    while (temp !== null) {
      let nPrev = temp.prev;
      temp.prev = tempPrev;
      tempPrev.next = temp;
      tempPrev = temp;
      temp = nPrev;
    }

    newTail.next = null;
    this.tail = newTail;
    newHead.prev = null;
    this.head = newHead;
    return this;
  }
}

const d = new DoublyLinkedList();
d.push(1);
d.push(12);
d.push(123);
d.push(1234);
d.push(1235);
d.set(3, 33);

d.insert(3, 77);
d.remove(1);
d.print();
console.log(d.get(3));
