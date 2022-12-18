function reset(setBoardValues, setP1Wins, setP2Wins, setTies, setWinner) {
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
