class Jedi {
  constructor() {
    this.forceIsDark = false;
  }
  force() {
    return (
      (this.forceIsDark ? "Join" : "Fear is the path to") + " the dark side"
    );
  }
  say() {
    console.log(this.forceIsDark ? "Yes, Master" : "hello, OB1");
  }
}

class Sith extends Jedi {
  constructor() {
    super();
    this.forceIsDark = true;
  }
}

let yoda = new Jedi();
let darth = new Sith();

yoda.say();
darth.say();

console.log(yoda.forceIsDark);
console.log(darth.forceIsDark);

console.log(yoda.force());
console.log(darth.force());
