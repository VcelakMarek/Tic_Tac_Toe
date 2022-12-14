function gameVsCPU(boardChange, option) {
  console.log("option:", option);
  let random0 = Math.floor(Math.random() * (0 + 3));
  let random1 = Math.floor(Math.random() * (0 + 3));

  while (boardChange[random0][random1] != "") {
    random0 = Math.floor(Math.random() * (0 + 3));
    random1 = Math.floor(Math.random() * (0 + 3));
    // if (isTied() === true) {
    //   break;
    // }
  }
  boardChange[random0][random1] = option === "X" ? "O" : "X";
}

export default gameVsCPU;
