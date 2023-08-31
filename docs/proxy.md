## Proxy Design Pattern

A Proxy is a structural design pattern that lets us provide a
substitute or placeholder for another object and the proxy controls
access to the original object as well. A simple UML diagram can be seen [here](https://shorturl.at/gETW1)

### A Great fit when:

1. Controlling the access to the original endpoint
2. Filtering incoming requests.
3. Reducing the workload to the original endpoint (Usually, DB)
4. Play as reverse proxy (Hiding the servers)
5. Play as a forward proxy (Hiding the clients)

etc...

### Example:

##### The real subject with his interface

```TS

interface IService {
  request(url: string): void;
}

class Service implements IService {
  request(url: string): void {
    // TODO React on this case
  }
}

```

##### The Proxy service

```ts
class Proxy implements IService {
  private readonly realSubject: IService;

  constructor(realSubject: IService) {
    this.realSubject = realSubject;
  }

  request(url: string): void {
    if (this.hasAccess()) {
      this.realSubject.request(url);
    } else {
      // TODO React on this case
    }
  }

  private hasAccess(): boolean {
    return true;
  }

  // TODO Adding extra logic...
}
```

##### In action

```ts
const server = new Proxy(new Service());
server.request('www.my-site.com');
```

More info can be found on the [wiki](https://en.wikipedia.org/wiki/Proxy_pattern) page.
