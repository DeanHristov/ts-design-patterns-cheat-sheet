export interface IIterator<T> {
  current(): T;

  next(): T | null;

  hasNext(): boolean;
}

export interface IAggregate<T> {
  listIterator(): IIterator<T>;

  bfsIterator(): IIterator<T>;

  dfsIterator(): IIterator<T>;
}
