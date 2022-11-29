import { useContext, useState } from "react";
import { OptionContext } from "./Option.context";
import Button from "./Button";
import "./styles.css"
import "./Game-styles.css"

const Game = () => {
    const [option] = useContext(OptionContext) 
    console.log(option)


    const [visible,setVisible] = useState(false);

    return (
        <div className="game">
            <div className="row icon-row">
                <div>
                    <img src="./assets/icon-x.svg" alt="icon-x" />
                    <img src="./assets/icon-o.svg" alt="icon-o" />
                </div>
                <div className="turn">
                    <img  src="./assets/icon-x-silver.svg" alt="icon-x"/>
                    <p>TURN</p>
                </div>
                <Button variant="restart">
                    <img  src="./assets/icon-restart.svg" alt="restart-icon" />
                </Button>
            </div>  

            <div className="game-board">
                <div className="row">
                    <Button variant="gameButton" >
                        <img src="./assets/icon-x.svg" alt="icon-x" />
                    </Button>
                                                
                    <Button variant="gameButton"
                        onClick={() => {
                            setVisible(true);
                        }} >
                        <img src="assets\icon-x-outline.svg" alt="icon-x-outline"
                        className={visible===true ? "visible" : "invisible"}
                        />
                    </Button>
                    <Button variant="gameButton" ></Button>
                </div>
                <div className="row">
                    <Button variant="gameButton" ></Button>
                    <Button variant="gameButton" ></Button>
                    <Button variant="gameButton" ></Button>
                </div>
                <div className="row">
                    <Button variant="gameButton" ></Button>
                    <Button variant="gameButton" ></Button>
                    <Button variant="gameButton" ></Button>
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

    );
};


export default Game;