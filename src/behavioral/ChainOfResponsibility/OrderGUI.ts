import BaseHandler from './BaseHandler';

export default class OrderGUI extends BaseHandler {
  handle<T>(request: T): BaseHandler | string {
    return super.handle<T>(request);
  }
}
