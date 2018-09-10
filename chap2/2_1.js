class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    let headNode = new Node(value);
    this.head = headNode;
    this.tail = headNode;
  }

  addNode(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
  }

  printLinkedList() {
    let nodes = [];
    let current = this.head;
    while (current) {
      nodes.push(current.value);
      current = current.next;
    }
    console.log(nodes);
  }

  removeDuplicates() {
    let seen = new Set();

    let back = null;
    let current = this.head;
    let front = current.next;
    while (current) {
      if (seen.has(current.value)) {
        back.next = back.next.next;
      } else {
        seen.add(current.value);
        back = current;
      }
      current = front;
      front = front === null ? null : front.next;
    }
  }
}

var x = new LinkedList(10);
x.addNode(20);
x.addNode(25);
x.addNode(35);
x.addNode(20);
x.addNode(50);
x.addNode(25);

x.printLinkedList();
x.removeDuplicates();
x.printLinkedList();
