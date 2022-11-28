import { useContext } from "react";
import { OptionContext } from "./Option.context";
import "./styles.css"
import "./ChooseSymbol-styles.css"
import Button from "./Button";

const ChooseSymbol = () => {
    const [option, setOption] = useContext(OptionContext)

    return (
        <div>
            <div className="card">
                <h1>PICK PLAYER 1`S MARK</h1>
                <div className="switch">
                    <div className="switch-option">
                        <button 
                            className={option === "X" ? "active" : "inactive"}
                            onClick={() => setOption("X")}
                            >
                            <img  src="./assets/icon-x-silver.svg" alt="icon-x" />
                        </button> 
                    </div>
                    <div className="switch-option">
                        <button
                            className={option === "Y" ? "active" : "inactive"}
                            onClick={() => setOption("Y")}
                            >
                            <img src="./assets/icon-o-silver.svg" alt="icon-o" />
                        </button>
                    </div>
                </div>
                <h2>REMEMBER: X GOES FIRST</h2>
            </div>
            <div className="new-game-buttons">
                <Button variant="newGameCPU"></Button>
                <Button variant="newGamePlayer" />
            </div>
        </div>
    )
}

export default ChooseSymbol;