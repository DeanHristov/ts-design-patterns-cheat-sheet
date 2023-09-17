import { describe, it } from '@jest/globals';
import Subject from './Subject';
import Observer from './Observer';

describe('Behaviours -> Observer design pattern', () => {
  beforeEach(() => jest.resetAllMocks());

  it('Should be able to notify the observer when change has occurred', () => {
    const subject: Subject = new Subject();
    const observer: Observer = new Observer(subject);

    jest.spyOn(observer, 'update').mockImplementation(() => jest.fn());

    subject.publish();

    expect(observer.update).toHaveBeenCalled();
  });

  it('Should be able to notify many observers when change has occurred', () => {
    const subject: Subject = new Subject();
    const observer: Observer = new Observer(subject);
    const observer2: Observer = new Observer();

    jest.spyOn(observer, 'update').mockImplementation(() => jest.fn());
    jest.spyOn(observer2, 'update').mockImplementation(() => jest.fn());

    subject.subscribe(observer2);
    subject.publish();

    expect(observer.update).toHaveBeenCalled();
    expect(observer2.update).toHaveBeenCalled();
  });

  it('Should not be able to subscribe an observer if it is already subscribed', () => {
    const subject: Subject = new Subject();
    const observer: Observer = new Observer(subject);

    jest.spyOn(observer, 'update').mockImplementation(() => jest.fn());

    subject.subscribe(observer);
    subject.publish();

    expect(observer.update).toBeCalledTimes(1);
  });

  it('Should not be able to notify the observer when change has occurred', () => {
    const subject: Subject = new Subject();
    const observer: Observer = new Observer(subject);

    jest.spyOn(observer, 'update').mockImplementation(() => jest.fn());

    subject.unsubscribe(observer);
    subject.publish();

    expect(observer.update).not.toHaveBeenCalled();
  });
});
