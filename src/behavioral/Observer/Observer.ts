import { ISubject } from './Subject';

export interface IObserver {
  update(): void;
}

export default class Observer implements IObserver {
  constructor(subject?: ISubject) {
    if (subject) subject.subscribe(this);
  }

  update(): void {
    console.log('I have been called!');
  }
}
