import LinkedList from './linkedList';

export default class Stack {
  _list = new LinkedList();

  get length() {
    return this._list.length;
  }
  push(value) {
    this._list.add(value);
  }
  pop() {
    return this._list.remove(this._list.length - 1);
  }
  clear() {
    this._list.clear();
  }
  toArray() {
    return this._list.toArray();
  }
}