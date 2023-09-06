import BaseHandler from './BaseHandler';

export default class DeliverHandler extends BaseHandler {
  handle<T = object>(request: T): BaseHandler | string {
    return `The request (${JSON.stringify(request)}) has been delivered!`;
  }
}
