## Builder Design Pattern

The Builder pattern is a creational design pattern that lets us to separate the construction of an object form its
presentation. The pattern allows us to produce different types and representations of an object using the same
construction. A simple UML diagram can be seen [here](https://shorturl.at/cfhsO)

### A Great fit when:

1. Construct complex object step by step
2. Avoid the construction of object with a lot of initial/dynamic params during its creation (instantiation)

### Example:

##### Public contracts

```TS
// Subject = House | car | ship ....
export interface ISubject {
  entityOne: number;
  entityTwo: boolean;
  ...
}
```

##### Simple implementation

```ts
// Subject = House | car | ship ....
class Subject implements ISubject {
  entityOne: number;
  entityTwo: boolean;
....

  constructor(builder: Builder) {
    this.entityOne = builder.entityOne;
    this.entityTwo = builder.entityTwo;
  ...
  }

...
}

// The builder of the Subject
class SubjectBuilder implements ISubject {
  entityOne: number;
  entityTwo: boolean;
...

  constructor() {
    this.entityOne = 1;
    this.entityTwo = false;
  ...
  }

  setEntityOne(value: number) {
    this.entityOne = value;
    return this;
  }

  setEntityTwo(value: boolean) {
    this.entityTwo = value;
    return this;
  }

...

  build(): Subject {
    return new Subject(this);
  }
}

// Encapsulate steps series with a Director class - It is optionally!
class Director {
  private readonly builder: SubjectBuilder;

  constructor(builder: SubjectBuilder) {
    this.builder = builder;
  }

  makeDefaultSubject(): Subject {
    return this.builder.build();
  }

  makeSmartSubject(): Subject {
    return this.builder
      .setEntityOne(2)
      .setEntityTwo(true)
      .build();
  }

...
}
```

##### Code in action

```ts
const builder: SubjectBuilder = new SubjectBuilder();
const director: Director = new Director(builder);

const defaultSubject: Subject = director.makeDefaultSubject();
const smaprtSubject: Subject = director.makeSmartSubject();

const otherSubject: Subject = builder.setEntityOne(2).build();

console.log('defaultSubject', defaultSubject);
console.log('smaprtSubject', smaprtSubject);
console.log('otherSubject', otherSubject);
```

More info can be found on the [wiki](https://en.wikipedia.org/wiki/Builder_pattern) page.
