## Singleton Design Pattern

A **Singleton** is a creational design pattern that lets us ensure that a class has only one instance and at the same
time it provides a global access point to this instance.

### A Great fit when:

1. We need kind of global state
2. Cross-component sharing data
3. Single database connection within entire app
4. Config maneger

etc...

### Template

```ts
export default class Singleton {
  private static instance: Singleton;

  private constructor() {
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      this.instance = new Singleton();
    }

    return this.instance;
  }

  // Rest of the logic starts from here....
}
```
