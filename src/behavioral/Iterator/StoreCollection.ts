import { IAggregate, IIterator } from './iteratorTypes';
import ListIterator from './ListIterator';

export default class StoreCollection<T> implements IAggregate<T> {
  private readonly store: T[];

  constructor(data: T[] = []) {
    this.store = data;
  }

  push(item: T): void {
    this.store.push(item);
  }

  listIterator(): IIterator<T> {
    return new ListIterator(this.store);
  }

  dfsIterator() {
    // TODO dfsIterator() {...}
    return {} as IIterator<T>;
  }

  bfsIterator() {
    // TODO bfsIterator() {...}

    return {} as IIterator<T>;
  }
}
