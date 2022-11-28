import "./styles.css";
import "./button-styles.css"

const color = {
    newGameCPU: "yellow",
    newGamePlayer: "blue",
    silver: "silver",
    yellow: "yellow",
    icon: "silver",
    gameButton: "dark-navy"
}

const size = {
    newGameCPU: "long",
    newGamePlayer: "long",
    icon: "small",
    gameButton: "game-button-size" 
}

const border = {
    newGameCPU: "border-none",
    newGamePlayer: "border-none",
    silver: "border-none",
    yellow: "border-none",
    icon: "border-none",
    gameButton: "border-none"
}

const Button = ( props = "gameButton" ) => {

    let baseClasses = [
        color[props.variant],
        size[props.variant],
        border[props.variant]
    ]

    return (
        <button
        className={baseClasses.join(" ")}>
        </button>
    )
}

export default Button;