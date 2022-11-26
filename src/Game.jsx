import { useContext } from "react";
import "./styles.css"
import "./Game-styles.css"

const Game = () => {
    const [option] = useContext() 

    console.log(option)
    
    return (
        <body>
            <div className="game">
                <div className="row icon-row">
                    <div>
                        <img src="./assets/icon-x.svg" alt="icon-x" />
                        <img src="./assets/icon-o.svg" alt="icon-o" />
                    </div>
                    <div className="turn">
                        <img  src="./assets/icon-x-silver.svg" alt="icon-x" />
                        <p>TURN</p>
                    </div>
                    <button className="restart">
                    <img  src="./assets/icon-restart.svg" alt="restart-icon" />
                    </button>
                </div>  

                <div className="game-board">
                    <div className="row">
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <div className="row">
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <div className="row">
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className="game-info row">
                    <div className="player1">
                        <p className="text">X (YOU)</p>
                        <p className="value">20</p>
                    </div>
                    <div className="ties">
                        <p className="text">TIES</p>
                        <p className="value">20</p>
                    </div>
                    <div className="player2">
                        <p className="text">O (PC)</p>
                        <p className="value">20</p>
                    </div>
                </div>
            </div>
        </body>

    );
};


export default Game;