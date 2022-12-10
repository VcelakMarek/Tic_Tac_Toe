function reset(setBoardValues, setP1Wins, setP2Wins, setWinner) {
  const images = Array.from(
    document.querySelectorAll(".game-board button img")
  );

  setBoardValues([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  setP1Wins(0);
  setP2Wins(0);
  setWinner("");

  // images.forEach((element) => {
  //   element.className = "invisible";
  //   console.log("element", element);
  // });
}

export default reset;
