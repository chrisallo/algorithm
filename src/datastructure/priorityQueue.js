
import MaxHeap from './maxheap';

export default class PriorityQueue {
  maxheap;
  
  constructor() {
    this.maxheap = new MaxHeap({
      compare: (a, b) => {
        if (a && b) return a.priority - b.priority;
        else if (a) return 1;
        else if (b) return -1;
        else return 0;
      },
    });
  }
  enqueue(item, priority) {
    this.maxheap.push({ item, priority });
  }
  dequeue() {
    const node = this.maxheap.pop();
    return node ? node.item : null;
  }
  clear() {
    this.maxheap.clear();
  }
}