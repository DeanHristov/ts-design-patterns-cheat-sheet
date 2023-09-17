import { IObserver } from './Observer';

export interface ISubject {
  subscribe(subscriber: IObserver): void;

  unsubscribe(subscriber: IObserver): void;

  publish(): void;
}

export default class Subject implements ISubject {
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

    // console.log('This subscriber is already subscribed!');
  }

  unsubscribe(subscriber: IObserver): void {
    this.subscribers.delete(subscriber);
  }
}
