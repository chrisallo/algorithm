
export default class MaxHeap {
  _heap;
  compare;

  constructor(args = {}) {
    this._heap = [null];
    this.compare = args.compare ?? ((a, b) => a - b);
  }
  peek() {
    return this._heap[1] ?? null;
  }
  push(value) {
    this._heap.push(value);
    let curr = this._heap.length - 1;
    while (curr > 1) {
      const parent = Math.floor(curr / 2);
      if (this.compare(this._heap[curr], this._heap[parent]) > 0) {
        [this._heap[curr], this._heap[parent]] = [this._heap[parent], this._heap[curr]];
        curr = parent;
      } else break;
    }
  }
  pop() {
    if (this._heap.length > 1) {
      const value = this._heap[1];
      this._heap[1] = this._heap[this._heap.length - 1];
      this._heap.pop();
      
      let curr = 1;
      while (curr < this._heap.length) {
        const left = curr * 2;
        const right = curr * 2 + 1;
        if (this.compare(this._heap[curr], this._heap[left]) < 0 || this.compare(this._heap[curr], this._heap[right]) < 0) {
          const swap = this.compare(this._heap[left], this._heap[right]) > 0 ? left : right;
          [this._heap[curr], this._heap[swap]] = [this._heap[swap], this._heap[curr]];
          curr = swap;
        } else break;
      }
      return value;
    }
    return null;
  }
  clear() {
    this._heap = [null];
  }
}