function gameVsCPU(boardChange, playerMark) {
  console.log("option:", playerMark);
  let random0 = Math.floor(Math.random() * (0 + 3));
  let random1 = Math.floor(Math.random() * (0 + 3));

  while (boardChange[random0][random1] != "") {
    random0 = Math.floor(Math.random() * (0 + 3));
    random1 = Math.floor(Math.random() * (0 + 3));
    // if (isTied() === true) {
    //   break;
    // }
  }
  boardChange[random0][random1] = playerMark === "X" ? "O" : "X";
}

export default gameVsCPU;
