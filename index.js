
export default class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  peek() {
    return this.heap[1] ?? null;
  }
  push(value) {
    this.heap.push(value);
    let curr = this.heap.length - 1;
    while (curr > 1) {
      const next = Math.floor(curr / 2);
      if (this.heap[curr] < this.heap[next]) {
        [this.heap[curr], this.heap[next]] = [this.heap[next], this.heap[curr]];
        curr = next;
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
        if (this.heap[curr] > this.heap[left] || this.heap[curr] > this.heap[right]) {
          if (left > right) {
            [this.heap[curr], this.heap[right]] = [this.heap[right], this.heap[curr]];
            curr = right;
          } else {
            [this.heap[curr], this.heap[left]] = [this.heap[left], this.heap[curr]];
            curr = left;
          }
        } else break;
      }
      return value;
    }
    return null;
  }
}