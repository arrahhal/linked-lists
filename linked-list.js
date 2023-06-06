class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
  setNext(newNext) {
    this.next = newNext;
  }
}

class LinkedList {
  constructor() {
    this.start = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.start === null) {
      this.start = newNode;
      return;
    }
    let temp = this.start;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.setNext(newNode);
  }
  prepend(value) {
    const newNode = new Node(value, this.start);
    this.start = newNode;
  }
  size() {
    let total = 0;
    let temp = this.start;
    while (temp !== null) {
      temp = temp.next;
      total += 1;
    }
    return total;
  }
  head() {
    return this.start;
  }
  tail() {
    let temp = this.start;
    while (temp !== null && temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }
  at(index) {
    let temp = this.start;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  pop() {
    let temp = this.start;
    while (temp !== null && temp.next !== null && temp.next.next !== null) {
      temp = temp.next;
    }
    if (this.size() <= 1) {
      this.start = null;
      return;
    }
    temp.next = null;
  }
  contains(value) {
    let temp = this.start;
    while (temp !== null) {
      if (temp.value === value) return true;
      temp = temp.next;
    }
    return false;
  }
  find(value) {
    let index = 0;
    let temp = this.start;
    while (temp !== null) {
      if (temp.value === value) return index;
      temp = temp.next;
      index += 1;
    }
    return null;
  }
  toString() {
    let temp = this.start;
    let string = '';
    while (temp !== null) {
      string += `( ${temp.value} ) -> `;
      temp = temp.next;
    }
    string += `null`;
    return string;
  }
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.size()) {
      this.append(value);
      return;
    }
    const prevNode = this.at(index - 1);
    const newNode = new Node(value, prevNode.next);
    prevNode.setNext(newNode);
  }
  removeAt(index) {
    if (index === 0) {
      if (this.start !== null) this.start = this.start.next;
      return;
    }
    if (index >= this.size()) {
      this.pop();
      return;
    }
    const prevNode = this.at(index - 1);
    prevNode.setNext(prevNode.next.next);
  }
}

const list = new LinkedList();
list.append('first');
list.append('second');
list.append('thirdNode');
list.prepend('before first');
console.log(`list.size(): ${list.size()}`);
console.log('list.head():');
console.log(list.head());
console.log('list.tail():');
console.log(list.tail());
console.log('list.at(1):');
console.log(list.at(1));
console.log('full linked list:');
console.log(list.toString());

console.log('list.pop()');
list.pop();
console.log(list.toString());

console.log('list.contains():');
console.log(list.contains('before first'));

console.log('list find("first"):');
console.log(list.find('first'));

console.log('insertAt("before second", 2)');
list.insertAt('before second', 2);
console.log(list.toString());

console.log('insertAt(overNode, 3):');
list.insertAt('over Node', 3);
console.log(list.toString());
console.log('removeAt(3):');
list.removeAt(3);
console.log(list.toString());
