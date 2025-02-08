class Animal {
  #price;
  constructor(name, age, price) {
    this.name = name;
    this.age = age;
    this.#price = price;
  }
  getPrice() {
    return this.#price;
  }

  makeSound() {
    console.log("The animal makes a sound");
  }
}
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  makeSound() {
    console.log("Woof!");
  }
}

let animal = new Animal("hello", 7, 500);
animal.makeSound();
console.log(animal.getPrice());

let dog = new Dog("Buddy", 3, "Golden Retriever");
dog.makeSound();
console.log(dog.getPrice());
