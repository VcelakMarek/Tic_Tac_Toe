import { useState } from "react";
import { Link } from "react-router-dom";
import "./NewGameMenu-styles.css"
import ChooseSymbol from "./ChooseSymbol";
import Button from "./Button";

const NewGameMenu = () => {

    const [vsCPU, setVsCPU] = useState();
    console.log(vsCPU);
    return (
        <div>
            <div className="XO-header">
                <img src="./assets/icon-x.svg" alt="icon-x" />
                <img src="./assets/icon-o.svg" alt="icon-o" />
            </div>
            <ChooseSymbol />
            <div className="new-game-buttons">
                <Link to="/game">
                    <Button 
                        variant="newGameCPU"
                        onclick={() => setVsCPU(true)}
                    />
                </Link>
                <Link to="/game">
                    <Button 
                        variant="newGamePlayer" 
                        onclick={() => setVsCPU(false)}    
                    />
                </Link>
            </div>
        </div>
    )
}

export default NewGameMenu;