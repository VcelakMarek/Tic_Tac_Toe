import { useContext, useState } from "react";
import { OptionContext } from "./Option.context";
import { MyContext } from "./MyContext";

import "./styles.css";
import "./button-styles.css"

const color = {
    newGameCPU: "yellow",
    newGamePlayer: "blue",
    silver: "silver",
    yellow: "yellow",
    restart: "silver",
    gameButton: "dark-navy"
}

const size = {
    newGameCPU: "long",
    newGamePlayer: "long",
    restart: "small",
    gameButton: "game-button-size" 
}

const border = {
    newGameCPU: "border-radius-15px",
    newGamePlayer: "border-radius-15px",
    silver: "border-radius-15px",
    yellow: "border-radius-15px",
    restart: "border-radius-5px",
    gameButton: "border-radius-15px"
}

const text = {
    newGameCPU: "NEW GAME  (VS CPU)",
    newGamePlayer: "NEW GAME  (VS PLAYER)"
}


const Button = ( {variant = "gameButton", children, ...props} ) => {
    
    const [option] = useContext(OptionContext);
    const [hoverX, setHoverX] = useState("invisible");
    const [hoverO, setHoverO] = useState("invisible");
    const [displayX] = useContext(MyContext);
console.log("displayX",displayX)
    let baseClasses = [
        color[variant],
        size[variant],
        border[variant]
    ]

    if (variant === "restart"){
        return(
            <button
            className={baseClasses.join(" ")}>
            <img  src="./assets/icon-restart.svg" alt="restart-icon" />
            </button>
            )

    }  else if (variant === "gameButton") { 
        return(
            <button 
            value={props.value}
            onMouseEnter={() => option === "X" ? setHoverX("visible") : setHoverO("visible")}
            onMouseLeave={() => option === "X" ? setHoverX("invisible") : setHoverO("invisible")}
            onClick={props.onclick}
            className={baseClasses.join(" ")}>
                <img className="invisible" src="./assets/icon-x.svg" alt="icon-x"></img>
                <img className="invisible" src="./assets/icon-o.svg" alt="icon-o"></img>
                <img className={hoverX} src="./assets/icon-x-outline.svg" alt="icon-x-outline"></img>
                <img className={hoverO} src="./assets/icon-o-outline.svg" alt="icon-o-outline"></img>
            </button>
            )
    
    } else if (variant === "newGameCPU" || variant === "newGamePlayer") {
        return (
            <button
            className={baseClasses.join(" ")}>
                 <p>{text[variant]}</p>
            </button>
        )
    } else {
        return (
            <button
            className={baseClasses.join(" ")}>
                {children}
            </button>
        )
    }
}

export default Button;