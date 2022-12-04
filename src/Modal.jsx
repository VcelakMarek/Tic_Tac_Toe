import { useContext } from "react"
import CreateModal from "./CreateModal"
import Button from "./Button"
import { MyContext } from "./MyContext"
import "./Modal-styles.css"

const text = {
    xWin: "TAKES THE ROUND",
    oWin: "TAKES THE ROUND",
    tied: "ROUND TIED",
    restartGame: "RESTART GAME"
}

const color = {
    xWin: "color-light-blue",
    oWin: "color-light-yellow"
}

const img = {
    xWin: <img src="./assets/icon-x.svg" alt="icon-x"></img>,
    oWin: <img src="./assets/icon-o.svg" alt="icon-o"></img>
}

const Modal = ({variant, ...props}) => {
    return (
        <CreateModal>
            <div className={color[variant]}>
                <h2>{props.text}</h2>
                <h1>
                    <p>{img[variant]}</p>
                    <p>{text[variant]}</p>
                </h1>
                <div className="buttons">
                    <Button 
                        variant="silver" 
                        onclick={props.onclick}>
                        <p>{variant === "restartGame" ? ("NO, CANCEL") : ("QUIT")}</p>
                    </Button>
                    <Button 
                        variant="yellow"
                        onclick={props.onclick}>
                        <p>{variant === "restartGame" ? ("YES, RESTART") : ("NEXT ROUND")}</p>
                    </Button>
                </div>
            </div>
        </CreateModal>
    )
}

export default Modal;