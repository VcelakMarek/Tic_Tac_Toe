import { useContext, useState, useEffect } from "react";
import { OptionContext } from "./Option.context";
import { vsCpuContext } from "./vsCpu.context";
import Button from "./Button";
import Modal from "./Modal";
import "./css/styles.css";
import "./css/Game-styles.css";
import reset from "./reset";
import hasSomeoneWon from "./hasSomeoneWon";
import gameVsCPU from "./gameVsCPU";

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
  const [ties, setTies] = useState(0);
  const [player1, setPLayer1] = useState(0);
  const [playerMark, setPlayerMark] = useState();

  useEffect(() => {
    winner != ""
      ? [winner === "player1" ? setP1Wins(+1) : setP2Wins(+1)]
      : null;
  }, [winner]);

  useEffect(() => {
    setPLayer1(option);
    setPlayerMark(option);
    console.log("player 1: ", player1);
    setOption("X");
  }, []);

  // 00 01 02
  // 10 11 12
  // 20 21 22

  console.log(boardValues);
  //   let optionForCPU = option;
  function handleCLick(e, x, y) {
    let boardChange = { ...boardValues };
    if (boardChange[x][y] === "") {
      boardChange[x][y] = vsCPU ? playerMark : option;

      console.log(
        vsCPU ? "playerMark" : "option",
        "ionion",
        vsCPU ? playerMark : option
      );

      option === "X" ? setOption("O") : setOption("X");

      //   !vsCPU ? changeOption() : null;
      //   console.log(boardValues);
      //   console.log("option after click", option);
      // e.currentTarget.classList.add("x-win")

      console.log(e.currentTarget);
      if (vsCPU) {
        gameVsCPU(boardChange, playerMark);
      }

      hasSomeoneWon(
        boardValues,
        setShowModal,
        setModalVariant,
        setWinner,
        player1,
        setTies
      );
    }
    function isTied() {
      if (!boardValues.some((value) => value.includes(""))) {
        console.log("TIED");
        setTies(+1);
        setShowModal(true);
        setModalVariant("tied");
        return true;
      }
    }
    // function changeOption() {
    //   option === "X" ? setOption("O") : setOption("X");
    // }
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
              //   reset(
              //     setBoardValues,
              //     setP1Wins,
              //     setP2Wins,
              //     setTies,
              //     setWinner
              //   );
              setShowModal(true),
                setModalVariant("restartGame"),
                setWinner(""),
                setTies(0);
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
              onClick={(e) => handleCLick(e, xIndex, yIndex)}
            />
          ))
        )}
      </div>

      <div className="game-info row">
        <div className="player1">
          {vsCPU && (
            <>
              <p className="text">{player1 === "X" ? "X (YOU)" : "X (CPU)"}</p>
              <p className="value">{player1 === "X" ? p1Wins : p2Wins}</p>
            </>
          )}
          {!vsCPU && (
            <>
              <p className="text">{player1 === "X" ? "X (P1)" : "X (P2)"}</p>
              <p className="value">{player1 === "X" ? p1Wins : p2Wins}</p>
            </>
          )}
          {/* <p className="text">X (P1)</p>
          <p className="value">{p1Wins}</p> */}
        </div>
        <div className="ties">
          <p className="text">TIES</p>
          <p className="value">{ties}</p>
        </div>
        <div className="player2">
          {vsCPU && (
            <>
              <p className="text">{player1 === "X" ? "O (CPU)" : "O (YOU)"}</p>
              <p className="value">{player1 === "X" ? p2Wins : p1Wins}</p>
            </>
          )}
          {!vsCPU && (
            <>
              <p className="text">{player1 === "X" ? "O (P2)" : "O (P1)"}</p>
              <p className="value">{player1 === "X" ? p2Wins : p1Wins}</p>
            </>
          )}
          {/* <p className="text">O (P2)</p>
          <p className="value">{p2Wins}</p> */}
        </div>
      </div>

      {showModal ? (
        <Modal
          variant={modalVariant}
          onClick={() => setShowModal(false)}
          winner={winner}
          reset={[setBoardValues, setP1Wins, setP2Wins, setTies, setWinner]}
          nextRound={{ setBoardValues, setWinner }}
        />
      ) : null}
    </div>
  );
};

export default Game;
