export default abstract class BaseHandler {
  private next: BaseHandler | undefined;

  setNext(handler: BaseHandler): BaseHandler {
    this.next = handler;
    return this.next;
  }

  handle<T = object>(request: T): BaseHandler | string {
    if (this.next) return this.next.handle(request);

    return '';
  }
}
