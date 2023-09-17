import { IIterator } from './iteratorTypes';

export default class ListIterator<T> implements IIterator<T> {
  private readonly collection: T[];
  private currentPosition: number;

  constructor(collection: T[]) {
    this.collection = collection;
    this.currentPosition = 0;
  }

  current(): T {
    return this.collection[this.currentPosition];
  }

  hasNext(): boolean {
    return this.collection[this.currentPosition + 1] !== undefined;
  }

  next(): T | null {
    if (this.hasNext()) {
      return this.collection[++this.currentPosition];
    }
    return null;
  }
}
