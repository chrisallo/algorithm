
import PriorityQueue from '../src/priorityQueue';

describe('priorityQueue', () => {
  test('new', () => {
    new PriorityQueue();
  });
  test('enqueue()', () => {
    const list = [10,5,3,8,14,22];
    const queue = new PriorityQueue();
    list.forEach(n => queue.enqueue(n * 2, n));
    expect(queue.maxheap.heap).toStrictEqual([
      null,
      { item: 44, priority: 22 },
      { item: 20, priority: 10 },
      { item: 28, priority: 14 },
      { item: 10, priority: 5 },
      { item: 16, priority: 8 },
      { item: 6, priority: 3 },
    ]);
  });
  test('dequeue()', () => {
    const list = [10,5,3,8,14,22];
    const queue = new PriorityQueue();
    list.forEach(n => queue.enqueue(n * 2, n));

    expect(queue.dequeue()).toBe(44);
    expect(queue.dequeue()).toBe(28);
    expect(queue.dequeue()).toBe(20);
    expect(queue.maxheap.heap).toStrictEqual([
      null,
      { item: 16, priority: 8 },
      { item: 10, priority: 5 },
      { item: 6, priority: 3 },
    ]);
  });
});