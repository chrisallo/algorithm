
import MaxHeap from './maxheap';

export default class PriorityQueue {
  _maxheap;
  
  constructor() {
    this._maxheap = new MaxHeap({
      compare: (a, b) => {
        if (a && b) return a.priority - b.priority;
        else if (a) return 1;
        else if (b) return -1;
        else return 0;
      },
    });
  }
  enqueue(item, priority) {
    this._maxheap.push({ item, priority });
  }
  dequeue() {
    const node = this._maxheap.pop();
    return node ? node.item : null;
  }
  clear() {
    this._maxheap.clear();
  }
}