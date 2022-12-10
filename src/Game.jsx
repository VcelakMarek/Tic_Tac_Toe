import { useContext, useState, useEffect } from "react";
import { OptionContext } from "./Option.context";
import { vsCpuContext } from "./vsCpu.context";
import Button from "./Button";
import Modal from "./Modal";
import "./styles.css";
import "./Game-styles.css";
import reset from "./reset";

const X_WIN = ["X", "X", "X"];
const O_WIN = ["O", "O", "O"];

const Game = () => {
  const [option, setOption] = useContext(OptionContext);
  const [vsCPU] = useContext(vsCpuContext);
  const [boardValues, setBoardValues] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  console.log("vsCPU", vsCPU);

  const [showModal, setShowModal] = useState(false);
  const [modalVariant, setModalVariant] = useState("");
  const [winner, setWinner] = useState("");
  const [p1Wins, setP1Wins] = useState(0);
  const [p2Wins, setP2Wins] = useState(0);

  useEffect(() => {
    winner != ""
      ? [winner === "player1" ? setP1Wins(+1) : setP2Wins(+1)]
      : null;
  }, [winner]);

  // 00 01 02
  // 10 11 12
  // 20 21 22

  console.log(boardValues);

  function handleCLick(e, x, y) {
    let boardChange = { ...boardValues };
    if (boardChange[x][y] === "") {
      boardChange[x][y] = option;
      option === "X" ? setOption("O") : setOption("X");
      console.log(boardValues);

      // e.currentTarget.classList.add("x-win")

      console.log(e.currentTarget);

      for (let i = 0; i <= 2; i++) {
        hasSomeoneWon(boardValues[i]);
      }

      for (let i = 0; i <= 2; i++) {
        let col = boardValues.map((value) => value[i]);
        console.log("col0", col);
        hasSomeoneWon(col);
      }

      let diagonal1 = [];
      let diagonal2 = [];
      for (let i = 0; i < 3; i++) {
        diagonal1.push(boardValues[i][i]);
        diagonal2.push(boardValues[i][2 - i]);
      }

      hasSomeoneWon(diagonal1);
      hasSomeoneWon(diagonal2);
    }
    function hasSomeoneWon(x) {
      x.toString() === X_WIN.toString()
        ? [
            console.log("X WIN"),
            setShowModal(true),
            setModalVariant("xWin"),
            setWinner("player1"),
          ]
        : [
            x.toString() === O_WIN.toString()
              ? [
                  console.log("O WIN"),
                  setShowModal(true),
                  setModalVariant("oWin"),
                  setWinner("player2"),
                ]
              : console.log("false"),
          ];
    }
  }

  return (
    <div className="game">
      <div className="row icon-row">
        <div className="XO-icons">
          <img src="./assets/icon-x.svg" alt="icon-x" />
          <img src="./assets/icon-o.svg" alt="icon-o" />
        </div>
        <div className="turn">
          <img
            className={option === "X" ? "visible" : "invisible"}
            src="./assets/icon-x-silver.svg"
            alt="icon-x"
          />
          <img
            className={option === "O" ? "visible" : "invisible"}
            src="./assets/icon-o-silver.svg"
            alt="icon-x"
          />

          <p>TURN</p>
        </div>
        {
          <Button
            variant="restart"
            onClick={() => {
              reset(
                setBoardValues,
                setP1Wins,
                setP2Wins,
                setWinner
              ); /*setShowModal(true), setModalVariant("restartGame"), setWinner("")*/
            }}
          />
        }
      </div>

      <div className="game-board">
        {boardValues.map((x, xIndex) =>
          x.map((y, yIndex) => (
            <Button
              value={boardValues[xIndex][yIndex]}
              key={[xIndex, yIndex]}
              onclick={(e) => handleCLick(e, xIndex, yIndex)}
            />
          ))
        )}
      </div>

      <div className="game-info row">
        <div className="player1">
          <p className="text">X (P1)</p>
          <p className="value">{p1Wins}</p>
        </div>
        <div className="ties">
          <p className="text">TIES</p>
          <p className="value">0</p>
        </div>
        <div className="player2">
          <p className="text">O (P2)</p>
          <p className="value">{p2Wins}</p>
        </div>
      </div>

      {showModal ? (
        <Modal
          variant={modalVariant}
          onclick={() => setShowModal(false)}
          winner={winner}
        />
      ) : null}
    </div>
  );
};

export default Game;
