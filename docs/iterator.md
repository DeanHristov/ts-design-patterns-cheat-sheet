## Iterator Design Pattern

The iterator pattern is a behavioral design pattern that let us traverse elements of a collection without exposing its
underlying representation (list, stack, tree, etc.). A simple UML diagram can be seen [here](https://shorturl.at/iIQU5)

### A Great fit when:

1. Go through each element (without loops) of the collection without accessing the same elements over and over.
2. We have complex data structure under the hood that we want to hide it by exposing a simple abstraction.
3. Reduce duplication of the traversal code across the app

etc...

### Example:

##### A public contracts

```TS
interface IIterator<T> {
  current(): T;

  next(): T | null;

  hasNext(): boolean;
}

interface IAggregate<T> {
  iterator(): IIterator<T>;
}

```

##### Simple implementation

```ts
// Concrete iterator
class ListIterator<T> implements IIterator<T> {
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

// Concrete Aggregate
class Consumer<T> implements IAggregate<T> {
  private readonly store: T[];

  constructor(data: T[] = []) {
    this.store = data;
  }

  push(item: T): void {
    this.store.push(item);
  }

  iterator(): IIterator<T> {
    return new ListIterator(this.store);
  }
}
```

##### Code in action

```ts
interface IProduct {
  uid: string;
  title: string;
  price: number;
}

const products: Consumer<IProduct> = new Consumer<IProduct>();

products.push({ uid: '1', title: 'Iphone X', price: 1009.0 });
products.push({ uid: '2', title: 'Iphone XS', price: 522.0 });

const collection = collection.iterator();

collection.current();
// Output:
//   {
//     uid: '1',
//     title: 'Iphone X',
//     price: 1009.0,
//   }

collection.hasNext();
// Output: True

collection.next();
// Output:
//   {
//     uid: '2',
//     title: 'Iphone XS',
//     price: 522.0,
//   }

collection.hasNext();
// Output: False

collection.next();
// Output: null
```

More info can be found on the [wiki](https://en.wikipedia.org/wiki/Iterator_pattern) page.
