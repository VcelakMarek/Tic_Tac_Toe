import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { OptionContext } from "./Option.context";
import { MyContext } from "./MyContext";

import "./styles.css";
import "./button-styles.css"

const color = {
    newGameCPU: "yellow",
    newGamePlayer: "blue",
    silver: "silver",
    yellow: "yellow box-shadow-4px",
    restart: "silver",
    gameButton: "dark-navy"
}

const size = {
    newGameCPU: "long",
    newGamePlayer: "long",
    restart: "small",
    gameButton: "game-button-size",
    silver: "height-52px",
    yellow: "height-52px"
}

const border = {
    newGameCPU: "border-radius-15px",
    newGamePlayer: "border-radius-15px",
    silver: "border-radius-10px",
    yellow: "border-radius-10px",
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
    // const [displayX] = useContext(MyContext);

    let baseClasses = [
        color[variant],
        size[variant],
        border[variant]
    ]

    if (variant === "restart"){
        return(
            <button
            className={baseClasses.join(" ")}
            onClick={props.onClick}>
            <img  src="./assets/icon-restart.svg" alt="restart-icon" />
            </button>
            )

    }  else if (variant === "gameButton") { 
        return(
            <button 
            // value={props.value}
            disabled = {false}
            onMouseEnter={() => option === "X" ? setHoverX("visible") : setHoverO("visible")}
            onMouseLeave={() => option === "X" ? setHoverX("invisible") : setHoverO("invisible")}
            onClick={(e) => {props.onclick(e);props.disabled="true" }}
            // {...props.allowHover}
            className={baseClasses.join(" ")}>
                <img className="invisible" src="./assets/icon-x.svg" alt="icon-x"></img>
                <img className="invisible" src="./assets/icon-o.svg" alt="icon-o"></img>
                <img className={hoverX} src="./assets/icon-x-outline.svg" alt="icon-x-hover"></img>
                <img className={hoverO} src="./assets/icon-o-outline.svg" alt="icon-o-hover"></img>
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
            <Link to={props.link}>
                <button
                className={baseClasses.join(" ")}
                onClick={props.onclick}>
                    {children}
                </button>
            </Link>
        )
    }
}

export default Button;