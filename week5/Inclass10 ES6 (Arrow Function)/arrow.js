class MyMath {
  add = (a, b) => a + b;
  minus = (a, b) => a - b;
  multiply = (a, b) => a * b;
  divide = (a, b) => (b == 0 ? undefined : a / b);
}

var result = new MyMath();
console.log(result.add(2, 3));
console.log(result.minus(2, 3));
console.log(result.multiply(2, 3));
console.log(result.divide(2, 0));
