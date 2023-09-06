import BaseHandler from './BaseHandler';

export default class AuthenticateHandler extends BaseHandler {
  private readonly authUser: string;

  constructor(user: string) {
    super();
    this.authUser = user;
  }

  handle<T>(request: T): BaseHandler | string {
    if (this.authUser === 'admin') {
      return super.handle(request);
    }

    return 'Error! You are not authenticated to perform this action!';
  }
}
