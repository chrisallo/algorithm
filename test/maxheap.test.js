
import MaxHeap from '../src/maxheap';

describe('maxheap', () => {
  test('new', () => {
    new MaxHeap();
  });
  test('push()', () => {
    const list = [10,5,3,8,14,22];
    const maxheap = new MaxHeap();
    list.forEach(n => maxheap.push(n));
    expect(maxheap.heap).toStrictEqual([null,22,10,14,5,8,3]);
    expect(maxheap.peek()).toBe(22);
  });
  test('push() > pop()', () => {
    const list = [10,5,3,8,14,22];
    const maxheap = new MaxHeap();
    list.forEach(n => maxheap.push(n));

    expect(maxheap.pop()).toBe(22);
    expect(maxheap.pop()).toBe(14);
    expect(maxheap.heap).toStrictEqual([null,10,8,3,5]);
    expect(maxheap.peek()).toBe(10);
  });
});