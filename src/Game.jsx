import "./styles.css"
import "./Game-styles.css"

const Game = () => {
    return (
        <div className="game">
            <div className="row icon-row">
                <div>
                    <img src="./assets/icon-x.svg" alt="icon-x" />
                    <img src="./assets/icon-o.svg" alt="icon-o" />
                </div>
                <div className="turn">
                    <img  src="./assets/icon-x-silver.svg" alt="icon-x" />TURN
                </div>
                <div className="restart">
                <img  src="./assets/icon-restart.svg" alt="restart-icon" />
                </div>
            </div>

        <div className="game-board">
            <div className="row">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>
            <div className="row">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>
            <div className="row">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>

        </div>
        </div>

    );
};


export default Game;