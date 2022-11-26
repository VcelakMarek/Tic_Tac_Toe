import { useState, useContext } from "react";
import { OptionContext } from "./Option.context";
import "./styles.css"
import "./ChooseSymbol-styles.css"

const ChooseSymbol = () => {
    const [option, setOption] = useContext(OptionContext)

    // X - true, Y - false
    // "OPTIONX | OPTIONY"
    // const [option, setOption] = useState("X");
    // let optionO = "inactive";

    return (
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
    )
}

export default ChooseSymbol;