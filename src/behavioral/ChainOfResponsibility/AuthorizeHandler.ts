import BaseHandler from './BaseHandler';

export default class AuthorizeHandler extends BaseHandler {
  private readonly authUser: string;

  constructor(user: string) {
    super();
    this.authUser = user;
  }

  handle<T = object>(request: T): BaseHandler | string {
    if (this.authUser === 'admin') {
      return super.handle(request);
    }

    return 'Error! You are not authorized to perform this action!';
  }
}
