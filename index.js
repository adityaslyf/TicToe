let items = document.querySelectorAll("td");
let currentStatus = "X";
 let row1 = document.querySelectorAll("tr")[0]
let row2 = document.querySelectorAll("tr")[1];

items.forEach(function (item) {
  item.addEventListener("click", function () {
    item.innerHTML = currentStatus;
    currentStatus = currentStatus === "X" ? "O" : "X";
    let row1Cells = row1.querySelectorAll("td");
    let cell1 = row1Cells[0].innerHTML;
    let cell2 = row1Cells[1].innerHTML;
    let cell3 = row1Cells[2].innerHTML;
    



    let row1Cells2 = row2.querySelectorAll("td");
    let cellf = row1Cells2[0].innerHTML;
    let cells = row1Cells2[1].innerHTML;
    let cellt = row1Cells2[2].innerHTML;
   
      if (cellf === "X" && cells === "X" && cellt === "X") {
        console.log("X is the winner");
      } else {
        console.log("no");
      }
      if (cell1 === "X" && cell2 === "X" && cell3 === "X") {
        console.log("X is the winner");
      } else {
        console.log("no");
      }
    
    
  });
});
