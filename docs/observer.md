## Observer Design Pattern

The Observer pattern (**Also known as: Pub-Sub pattern**) is a behavioral design pattern that lets us define a
subscription mechanism to notify multiple objects about any events that happen to the object they’re observing. A simple
UML diagram can be seen [here](https://shorturl.at/rATUZ)

### A Great fit when:

1. A one-to-many dependency between objects has to be defined without making the objects tightly coupled.
2. One object can notify multiple other objects.
3. When one object changes state, an open-ended number of dependent objects should be updated automatically

etc...

### Example:

##### Public contracts

```TS
interface ISubject {
  subscribe(subscriber: IObserver): void;

  unsubscribe(subscriber: IObserver): void;

  publish(): void;
}

interface IObserver {
  update(): void;
}

```

##### Simple implementation

```ts
// A class Publisher
class Subject implements ISubject {
  private subscribers: Set<IObserver>;

  constructor() {
    this.subscribers = new Set<IObserver>();
  }

  publish(): void {
    this.subscribers.forEach((item: IObserver) => item.update());
  }

  subscribe(subscriber: IObserver): void {
    const shouldNotExists = !this.subscribers.has(subscriber);

    if (shouldNotExists) {
      this.subscribers.add(subscriber);
      return;
    }

    console.log('This subscriber is already attached!');
  }

  unsubscribe(subscriber: IObserver): void {
    this.subscribers.delete(subscriber);
  }
}

// A class Subscriber
class Observer implements IObserver {
  constructor(subject: ISubject) {
    subject.subscribe(this);
  }

  update(): void {
    // TODO this.update()
    console.log('I have been called!');
  }
}
```

##### Code in action

```ts
const subject: Subject = new Subject();
const observer1: Observer = new Observer(subject);
const observer2: Observer = new Observer(subject);

subject.publish();
// Output:
//   "I have been called!"
//   "I have been called!"
```

More info can be found on the [wiki](https://en.wikipedia.org/wiki/Observer_pattern) page.
