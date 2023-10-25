let items = document.querySelectorAll("td");
let currentStatus = "X";

items.forEach(function (item) {
  item.addEventListener("click", function () {
    item.innerHTML = currentStatus;
    currentStatus = currentStatus === "X" ? "O" : "X";

    for (let i = 0; i < item.length; i++) {
      if (item === "X") {
        console.log("X is the winner");
      } else {
        console.log("no");
      }
    }
  });
});
