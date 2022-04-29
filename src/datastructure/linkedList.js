
class LinkedListNode {
  value;
  next;

  constructor(value = null) {
    this.value = value;
  }
}

export default class LinkedList {
  _head = new LinkedListNode();
  _length = 0;

  _getNode(index) {
    let curr = this._head;
    while(curr.next && index >= 0) {
      index--;
      curr = curr.next;
    }
    return curr;
  }
  get length() {
    return this._length;
  }
  has(value) {
    let curr = this._head;
    while(curr.next) {
      curr = curr.next;
      if (curr.value === value) return true;
    }
    return false;
  }
  get(index) {
    return index < this._length ? this._getNode(index).value : null;
  }
  add(value, index = this._length) {
    const curr = this._getNode(index - 1);
    const node = new LinkedListNode(value);
    node.next = curr.next;
    curr.next = node;
    this._length++;
  }
  remove(index) {
    const curr = this._getNode(index - 1);
    if (curr.next) {
      const value = curr.next.value;
      curr.next = curr.next.next;
      this._length--;
      return value;
    }
    return null;
  }
  clear() {
    this._head.next = null;
    this._length = 0;
  }
  toArray() {
    const array = new Array(this._length);
    let curr = this._head;
    let index = 0;
    while (curr.next) {
      curr = curr.next;
      array[index++] = curr.value;
    }
    return array;
  }
}