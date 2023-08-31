## Adapter Design Pattern

An Adapter is a structural design pattern that allows objects with
incompatible interfaces to collaborate with each other. This design pattern uses inheritance and composition. Usually,
the adapter inherits the client code and uses composition to the third-party library. An UML diagram can be
found [here](https://refactoring.guru/images/patterns/diagrams/adapter/structure-object-adapter.png?id=33dffbe3aece294162440c7ddd3d5d4f)

### A Great fit when:

1. When our service is incompatible with thrid-party piece of code
2. Avoid big refactor when switching between DBs (Example MySQL -> MongoDB)

etc...

### Example:

The client service

```ts
export interface IClient {
  request(...): void;
}

export default class ClientService implements IClient {
  request(...): void {
    //TODO Add your business logic here...
  }

....
}
```

The third party service implementation

```ts
export interface IThirdPartyService {
  specificAction(...): void;
}

export default class ThirdPartyService implements IThirdPartyService {
  specificAction(...): void {
    // Add your logic here...
  }

....
}
```

The whole magic is happening here - An Adapter class

```ts
// Inheriting the client and encapsulate the composition
export default class ClientAdapter extends Client {
  private readonly thirdPartyService: ThirdPartyService;

  constructor(thirdPartyService: ThirdPartyService) {
    super();
    this.thirdPartyService = ThirdPartyService;
  }

  public request(...): number {
    return this.externalService.specificAction(...);
  }

....
}
```

More info can be found on the [wiki](https://en.wikipedia.org/wiki/Adapter_pattern) page.