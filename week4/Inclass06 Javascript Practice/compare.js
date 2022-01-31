function comparenum() {
  let a = document.getElementById("a").valueAsNumber;
  let b = document.getElementById("b").valueAsNumber;
  document.getElementById("c").value = `A${a == b ? "=" : a > b ? ">" : "<"}B`;
  document.getElementById("d").value = a > b ? a - b : b - a;
  console.log(a, b, c.value, d.value);
}
