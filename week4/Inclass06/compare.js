function comparenum() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  document.getElementById("c").value = `A${a > b ? ">" : a === b ? "=" : "<"}B`;
  document.getElementById("d").value = a > b ? a - b : b - a;
}
