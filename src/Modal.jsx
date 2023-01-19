import CreateModal from "./CreateModal";
import Button from "./Button";
import reset from "./reset";
import nextRound from "./nextRound";
import "./css/Modal-styles.css";

const text = {
  xWin: "TAKES THE ROUND",
  oWin: "TAKES THE ROUND",
  tied: "ROUND TIED",
  restartGame: "RESTART GAME",
};

const color = {
  xWin: "color-light-blue",
  oWin: "color-light-yellow",
};

const img = {
  xWin: <img src="/Tic_Tac_Toe/icon-x.svg" alt="icon-x"></img>,
  oWin: <img src="/Tic_Tac_Toe/icon-o.svg" alt="icon-o"></img>,
};

const winInfo = {
  lost: "OH NO, YOU LOST…",
  won: "YOU WON!",
  player1: "PLAYER 1 WINS!",
  player2: "PLAYER 2 WINS!",
};

const Modal = ({
  variant,
  setBoardValues,
  setP1Wins,
  setP2Wins,
  setTies,
  setWinner,
  ...props
}) => {
  return (
    <CreateModal>
      <div className="content">
        <div className={color[variant]}>
          <h2>{winInfo[props.winner]}</h2>
          <h1>
            <p>{img[variant]}</p>
            <p>{text[variant]}</p>
          </h1>
          <div className="buttons">
            {variant != "restartGame" && (
              <>
                <Button
                  link="/Tic_Tac_Toe/"
                  variant="silver"
                  onclick={props.onclick}
                >
                  <p>QUIT</p>
                </Button>
                <Button
                  link="/game"
                  variant="yellow"
                  onClick={() => {
                    nextRound(setBoardValues, setWinner);
                    props.onClick();
                  }}
                >
                  <p>NEXT ROUND</p>
                </Button>
              </>
            )}
            {variant === "restartGame" && (
              <>
                <Button variant="silver" onClick={props.onClick}>
                  <p>NO, CANCEL</p>
                </Button>
                <Button
                  variant="yellow"
                  onClick={() => {
                    reset(
                      setBoardValues,
                      setP1Wins,
                      setP2Wins,
                      setTies,
                      setWinner
                    );
                    props.onClick();
                  }}
                >
                  <p>YES, RESTART</p>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </CreateModal>
  );
};

export default Modal;
