## Chain of Responsibility Design Pattern

A Chain of Responsibility is a behaviour design pattern that let us transform particular behaviour
into single stand-alon object called **handler**. Each handler decides whether to proceed further
or reject the request. A simple UML diagram can be seen [here](https://shorturl.at/hzFLV)

### A Great fit when:

1. It's essential to execute several handlers in a particular order
2. Allow us to remove, insert, re-order the handlers dynamically

### Example:

#### Creating the baseHandler class

```ts
abstract class BaseHandler {
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
```

#### Creating a custom handler class

```ts
class CustomHandler extends BaseHandler {
  handle<T>(request: T): BaseHandler | string {
    const shouldMoveFurther: boolean = true;

    if (shouldMoveFurther) {
      // Moving one step further
      return super.handle(request);
    }

    // Rejecting the process further.
    return 'Error! ....';
  }
}

```

##### Code in action

```ts
const handler = new CustomHandler();
handler
  .setNext(new AuthHandler(...))
  .setNext(new AccessHandler(...))
  .setNext(new OtherHandler(...));


handler.handle({ .... })
```

More info can be found on the [wiki](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern) page.
