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

const Button = ( props ) => {

    let baseClasses = [
        color[props.variant],
        size[props.variant],
        border[props.variant]
    ]

    if (props.variant != "gameButton"){
        return(
            <button
            className={baseClasses.join(" ")}>
            {props.children}
            </button>
            )

    }  else {

    return (

        <button
        className={baseClasses.join(" ")}>
        <p>{text[props.variant]}</p>
        </button>
    )

}
}

export default Button;