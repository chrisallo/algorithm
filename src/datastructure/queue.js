import LinkedList from './linkedList';

export default class Queue {
  _list = new LinkedList();

  get length() {
    return this._list.length;
  }
  enqueue(value) {
    this._list.add(value);
  }
  dequeue() {
    return this._list.remove(0);
  }
  clear() {
    this._list.clear();
  }
  toArray() {
    return this._list.toArray();
  }
}