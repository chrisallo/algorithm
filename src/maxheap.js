
export default class MaxHeap {
  heap;
  compare;

  constructor(args = {}) {
    this.heap = [null];
    this.compare = args.compare ?? ((a, b) => a - b);
  }
  peek() {
    return this.heap[1] ?? null;
  }
  push(value) {
    this.heap.push(value);
    let curr = this.heap.length - 1;
    while (curr > 1) {
      const parent = Math.floor(curr / 2);
      if (this.compare(this.heap[curr], this.heap[parent]) > 0) {
        [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]];
        curr = parent;
      } else break;
    }
  }
  pop() {
    if (this.heap.length > 1) {
      const value = this.heap[1];
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.pop();
      
      let curr = 1;
      while (curr < this.heap.length) {
        const left = curr * 2;
        const right = curr * 2 + 1;
        if (this.compare(this.heap[curr], this.heap[left]) < 0 || this.compare(this.heap[curr], this.heap[right]) < 0) {
          const swap = this.compare(this.heap[left], this.heap[right]) > 0 ? left : right;
          [this.heap[curr], this.heap[swap]] = [this.heap[swap], this.heap[curr]];
          curr = swap;
        } else break;
      }
      return value;
    }
    return null;
  }
  clear() {
    this.heap = [null];
  }
}