
import LinkedList from '../../src/datastructure/linkedList';

describe('linkedList', () => {
  test('new', () => {
    const list = new LinkedList();
    expect(list.toArray()).toStrictEqual([]);
  });
  test('add()', () => {
    const list = new LinkedList();
    list.add(10);
    list.add(20);
    list.add(30);
    expect(list.toArray()).toStrictEqual([10,20,30]);
  });
  test('add() index', () => {
    const list = new LinkedList();
    list.add(10);
    list.add(20);
    list.add(30, 1);
    list.add(40, 0);
    list.add(50, 100);
    expect(list.toArray()).toStrictEqual([40,10,30,20,50]);
  });
  test('add() > has()', () => {
    const list = new LinkedList();
    list.add(10);
    list.add(20);
    expect(list.has(10)).toBeTruthy();
    expect(list.has(20)).toBeTruthy();
    expect(list.has(15)).toBeFalsy();
  });
  test('add() > get()', () => {
    const list = new LinkedList();
    list.add(10);
    list.add(20);
    expect(list.get(0)).toBe(10);
    expect(list.get(1)).toBe(20);
    expect(list.get(2)).toBeNull();
  });
  test('add() > remove() > get()', () => {
    const list = new LinkedList();
    list.add(10);
    list.add(20);
    list.add(30);
    list.add(40);
    expect(list.remove(10)).toBeNull();
    expect(list.remove(list.length - 1)).toBe(40);
    expect(list.remove(0)).toBe(10);
    expect(list.get(0)).toBe(20);
    expect(list.get(1)).toBe(30);
    expect(list.get(2)).toBeNull();
    expect(list.toArray()).toStrictEqual([20,30]);
  });
});