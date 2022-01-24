// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
  //add your code here
  const element = document.querySelectorAll(".quantity");

  let totalCost = 0;
  try {
    element.forEach((val) => {
      if (val.value >= 0) totalCost += parseInt(val.value);
      else throw "input should be >= 0 ";
    });
  } catch (err) {
    alert(err);
    totalCost = 0;
  }
  // Compute the cost

  document.getElementById("cost").value = totalCost;
} //* end of computeCost
