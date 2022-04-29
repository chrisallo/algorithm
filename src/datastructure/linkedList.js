
class LinkedListNode {
  value;
  next;

  constructor(value = null) {
    this.value = value;
  }
}

export default class LinkedList {
  head = new LinkedListNode();
  length = 0;

  _getNode(index) {
    let curr = this.head;
    while(curr.next && index >= 0) {
      index--;
      curr = curr.next;
    }
    return curr;
  }
  has(value) {
    let curr = this.head;
    while(curr.next) {
      curr = curr.next;
      if (curr.value === value) return true;
    }
    return false;
  }
  get(index) {
    return index < this.length ? this._getNode(index).value : null;
  }
  add(value, index = this.length) {
    const curr = this._getNode(index - 1);
    const node = new LinkedListNode(value);
    node.next = curr.next;
    curr.next = node;
    this.length++;
  }
  remove(index) {
    const curr = this._getNode(index - 1);
    if (curr.next) {
      curr.next = curr.next.next;
      this.length--;
      return true;
    }
    return false;
  }
  clear() {
    this.head.next = null;
    this.length = 0;
  }
  toArray() {
    const array = new Array(this.length);
    let curr = this.head;
    let index = 0;
    while (curr.next) {
      curr = curr.next;
      array[index++] = curr.value;
    }
    return array;
  }
}