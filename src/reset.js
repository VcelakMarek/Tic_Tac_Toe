function reset(setBoardValues, setP1Wins, setP2Wins, setTies, setWinner) {
  // const images = Array.from(
  //   document.querySelectorAll(".game-board button img")
  // );

  setBoardValues([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  setP1Wins(0);
  setP2Wins(0);
  setTies(0);
  setWinner("");
}

export default reset;
