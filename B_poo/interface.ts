interface Named {
  name: string;
  lastName?: string // optional
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number = 30
  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable
user1 = new Person("Ana");

user1.greet("Hi there");

console.log(user1)
