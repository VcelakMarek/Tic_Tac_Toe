import { useContext, useState, useEffect } from "react";
import { OptionContext } from "./Option.context";
import { vsCpuContext } from "./vsCpu.context";
import Button from "./Button";
import Modal from "./Modal";
import hasSomeoneWon from "./hasSomeoneWon";
import gameVsCPU from "./gameVsCPU";
import "./css/styles.css";
import "./css/Game-styles.css";

const Game = () => {
  const [option, setOption] = useContext(OptionContext);
  const [vsCPU] = useContext(vsCpuContext);
  const [boardValues, setBoardValues] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [showModal, setShowModal] = useState(false);
  const [modalVariant, setModalVariant] = useState("");
  const [winner, setWinner] = useState("");
  const [p1Wins, setP1Wins] = useState(0);
  const [p2Wins, setP2Wins] = useState(0);
  const [ties, setTies] = useState(0);
  const [player1, setPLayer1] = useState(0);
  const [playerMark, setPlayerMark] = useState();
  const boardChange = { ...boardValues };

  useEffect(() => {
    winner != ""
      ? [winner === "player1" ? setP1Wins(+1) : setP2Wins(+1)]
      : null;
  }, [winner]);

  useEffect(() => {
    setPLayer1(option);
    setPlayerMark(option);
    setOption("X");
  }, []);

  if (
    !boardValues.some((value) => value.includes("X")) &&
    !boardValues.some((value) => value.includes("O")) &&
    vsCPU &&
    playerMark === "O"
  ) {
    gameVsCPU(boardChange, playerMark, boardValues);
  }

  function handleCLick(e, x, y) {
    if (boardChange[x][y] === "") {
      boardChange[x][y] = vsCPU ? playerMark : option;

      if (vsCPU) {
        gameVsCPU(boardChange, playerMark, boardValues);
      }

      hasSomeoneWon(
        boardValues,
        setShowModal,
        setModalVariant,
        setWinner,
        player1,
        setTies
      );
      option === "X" ? setOption("O") : setOption("X");
    }
  }

  return (
    <div className="game">
      <div className="row icon-row">
        <div className="XO-icons">
          <img src="/Tic_Tac_Toe/icon-x.svg" alt="icon-x" />
          <img src="/Tic_Tac_Toe/icon-o.svg" alt="icon-o" />
        </div>
        <div className="turn">
          <img
            className={option === "X" ? "visible" : "invisible"}
            src="/Tic_Tac_Toe/icon-x-silver.svg"
            alt="icon-x"
          />
          <img
            className={option === "O" ? "visible" : "invisible"}
            src="/Tic_Tac_Toe/icon-o-silver.svg"
            alt="icon-x"
          />
          <p>TURN</p>
        </div>
        {
          <Button
            variant="restart"
            onClick={() => {
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
              vsCPU={vsCPU}
              playerMark={playerMark}
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
        </div>
      </div>

      {showModal ? (
        <Modal
          variant={modalVariant}
          onClick={() => setShowModal(false)}
          winner={winner}
          setBoardValues={setBoardValues}
          setP1Wins={setP1Wins}
          setP2Wins={setP2Wins}
          setTies={setTies}
          setWinner={setWinner}
        />
      ) : null}
    </div>
  );
};

export default Game;
