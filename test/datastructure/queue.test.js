
import Queue from '../../src/datastructure/queue';

describe('queue', () => {
  test('new', () => {
    const queue = new Queue();
    expect(queue.toArray()).toStrictEqual([]);
  });
  test('enqueue()', () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.toArray()).toStrictEqual([10,20,30]);
  });
  test('enqueue() > dequeue()', () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.toArray()).toStrictEqual([30]);
  });
});