import "./styles.css"
import "./ChooseSymbol-styles.css"
import { useRef, useState } from "react";

const ChooseSymbol = () => {
    const xButton = useRef();
    const oButton = useRef();

    let [optionX, setOptionX] = useState("active");
    let optionO = "inactive";

    function changePickedMark() {

        setOptionX = "inactive";
        
            
        
        console.log("optionX",typeof setOptionX)
        // if (xButton.className === "active") {
        //     xButton.className = "inactive"
        //     oButton.className = "active"
        // } else {
        //     xButton.className = "active"
        //     oButton.className = "inactive"
        // }
    }

    return (
        <div className="card">
            <h1>PICK PLAYER 1`S MARK</h1>
            <div className="switch">
                <div className="switch-option">
                    <button 
                        ref={xButton}
                        className={optionX}
                        onClick={() => {changePickedMark()}}
                        >
                        <img  src="./assets/icon-x-silver.svg" alt="icon-x" />
                    </button> 
                </div>
                <div className="switch-option">
                    <button
                        ref={oButton}
                        className={optionO}
                        onClick={() => {changePickedMark()}}
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