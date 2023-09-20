import { describe, it } from '@jest/globals';
import OrderGUI from './OrderGUI';
import AuthenticateHandler from './AuthenticateHandler';
import DeliverHandler from './DeliverHandler';
import AuthorizeHandler from './AuthorizeHandler';

interface IOrderItem {
  name: string;
  amount: string;
}

describe('Behaviours -> Chain of Responsibility Design pattern', () => {
  const request: IOrderItem = { name: 'Apple', amount: '$25.32' };

  it('Should be able to process the order if you are sign-in', () => {
    const order = new OrderGUI();
    const outputMessage = `The request (${JSON.stringify(
      request,
    )}) has been delivered!`;

    order
      .setNext(new AuthenticateHandler('admin'))
      .setNext(new AuthorizeHandler('admin'))
      .setNext(new DeliverHandler());

    const responseMsg = order.handle<IOrderItem>(request);
    expect(responseMsg).toEqual(outputMessage);
  });

  it('Should be able to process the order without auth step', () => {
    const order = new OrderGUI();
    const outputMessage = `The request (${JSON.stringify(
      request,
    )}) has been delivered!`;

    order.setNext(new DeliverHandler());

    const responseMsg = order.handle<IOrderItem>(request);
    expect(responseMsg).toEqual(outputMessage);
  });

  it('Should not be able to process the order if you are not authenticated', () => {
    const order = new OrderGUI();
    const outputMessage =
      'Error! You are not authenticated to perform this action!';

    order
      .setNext(new AuthenticateHandler('admin1'))
      .setNext(new AuthorizeHandler('admin'))
      .setNext(new DeliverHandler());

    const responseMsg = order.handle<IOrderItem>(request);
    expect(responseMsg).toEqual(outputMessage);
  });

  it('Should not be able to process the order if you are not authorized', () => {
    const order = new OrderGUI();
    const outputMessage =
      'Error! You are not authorized to perform this action!';

    order
      .setNext(new AuthenticateHandler('admin'))
      .setNext(new AuthorizeHandler('Pesho1'))
      .setNext(new DeliverHandler());

    const responseMsg = order.handle<IOrderItem>(request);
    expect(responseMsg).toEqual(outputMessage);
  });
});
