## Bridge Design Pattern

A Bridge pattern is a structural design pattern that lets us decouple the [Abstraction](#abstraction) from
the [Implementation](#implementation). In other words, this pattern attempts to solve this problem where we meet
exponential inheritances between closely related classes by switching from inheritance to object composition. A simple
UML diagram can be seen [here](https://shorturl.at/mvJK9)

### Abstraction

The Abstraction provides high-level control logic. It relies on the implementation object to do the actual low-level
work.

### Implementation

The Implementation declares the interface that’s common for all concrete implementations. An abstraction can only
communicate with an implementation object via methods that are declared within the **Abstraction** class.

### A Great fit when:

1. Should use the Bridge pattern when we want to divide and organize
   a monolithic class that has several variants of some functionality
   (A class can that works with various database servers).
2. Use it when is need to extend a class in several independent dimensions.
3. Use it when is need to be able to switch implementations at runtime.
4. Avoid exponential inheritances

### Example:

In this example I going to represent delivering a pizza from a restaurant.

##### Restaurants and their types

```ts
interface IRestaurant {
   deliver(): string;
}

abstract class Restaurant implements IRestaurant {
   protected pizza: Pizza;

   protected constructor(pizza: Pizza) {
      this.pizza = pizza;
   }

   public abstract deliver(): string;
}

// Describing the type of the restaurant
// Type = American | Italian | France | Spain ....
class RestaurantType extends Restaurant {
   constructor(pizza: Pizza) {
      super(pizza);
   }

   deliver(): string {
      this.pizza.makeCrust();
      this.pizza.addSauce();
      return `Deliver a pizza (${this.pizza.name}) from American restaurant`;
   }
}
```

##### Pizzas and their types

```ts
interface IPizza {
   name: string;

   addSauce(): void;

   makeCrust(): void;

   addTopping(): void;
}

abstract class Pizza implements IPizza {
   name: string;

   protected constructor(name: string) {
      this.name = name;
   }

   abstract addSauce(): void;

   abstract makeCrust(): void;

   abstract addTopping(): void;
}

// Describing the type of the Pizza
// Type = Pepperoni | Veggie  ....
class PizzaType extends Pizza {
   constructor(name: string) {
      super(name);
   }

   addSauce(): void {
   }

   addTopping(): void {
   }

   makeCrust(): void {
   }
}
```

##### Code in action:

The main point here is, we have Decoupled the types of restaurants from the types of pizzas. That means each type of
restaurant can be developed separately from each type of pizza.

```ts
const restaurant1: RestaurantType1 = new RestaurantType1(
        new PizzaType1('PizzaType1'),
);

const restaurant2: RestaurantType2 = new RestaurantType2(
        new PizzaType2('PizzaType1'),
);

console.log(restaurant1.deliver());
console.log(restaurant2.deliver());
```

More info can be found on the [wiki](https://en.wikipedia.org/wiki/Bridge_pattern) page.
