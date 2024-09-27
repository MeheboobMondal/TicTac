let box = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let winner = document.getElementById("winner")
let turn0 = true;


let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];



box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerHTML = "0";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
  resetBtn.addEventListener("click", () => {
    box.innerHTML = ""
    box.disabled = false;
    winner.innerHTML = ""
  })
});

const showwinner =(pos1) => {
  winner.innerHTML = `<h2>Winner is ${pos1}</h2>`;
  box.forEach((box) => {
    box.disabled = true
  })

}

const checkWinner = () => {
  for (pattern of winningPattern) {

      let pos1 = box[pattern[0]].innerText;
      let pos2 = box[pattern[1]].innerText;
      let pos3 = box[pattern[2]].innerText;
      if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            showwinner(pos1);
            box.innerHTML = ""
        }
      }

  }
};
