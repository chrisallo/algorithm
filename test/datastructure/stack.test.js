
import Stack from '../../src/datastructure/stack';

describe('stack', () => {
  test('new', () => {
    const stack = new Stack();
    expect(stack.toArray()).toStrictEqual([]);
  });
  test('push()', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.toArray()).toStrictEqual([10,20,30]);
  });
  test('push() > pop()', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.pop()).toBe(30);
    expect(stack.pop()).toBe(20);
    expect(stack.toArray()).toStrictEqual([10]);
  });
});