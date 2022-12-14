const X_WIN = ["X", "X", "X"];
const O_WIN = ["O", "O", "O"];

function hasSomeoneWon(
  boardValues,
  setShowModal,
  setModalVariant,
  setWinner,
  player1,
  setTies
) {
  for (let i = 0; i <= 2; i++) {
    whoWon(boardValues[i]);
  }

  for (let i = 0; i <= 2; i++) {
    let col = boardValues.map((value) => value[i]);
    whoWon(col);
  }

  let diagonal1 = [];
  let diagonal2 = [];
  for (let i = 0; i < 3; i++) {
    diagonal1.push(boardValues[i][i]);
    diagonal2.push(boardValues[i][2 - i]);
  }

  whoWon(diagonal1);
  whoWon(diagonal2);

  function whoWon(x) {
    x.toString() === X_WIN.toString()
      ? [
          console.log("X WIN"),
          setShowModal(true),
          setModalVariant("xWin"),
          player1 === "X" ? setWinner("player1") : setWinner("player2"),
        ]
      : [
          x.toString() === O_WIN.toString()
            ? [
                console.log("O WIN"),
                setShowModal(true),
                setModalVariant("oWin"),
                player1 === "O" ? setWinner("player1") : setWinner("player2"),
              ]
            : isTied(boardValues, setTies, setShowModal, setModalVariant),
        ];
  }
}
function isTied(boardValues, setTies, setShowModal, setModalVariant) {
  if (!boardValues.some((value) => value.includes(""))) {
    console.log("TIED");
    setTies(+1);
    setShowModal(true);
    setModalVariant("tied");
    return true;
  }
}

export default hasSomeoneWon;
