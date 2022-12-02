import CreateModal from "./CreateModal"
import Button from "./Button"

const text = {
    xWin: ["X TAKES THE ROUND",],
    oWin: "O TAKES THE ROUND",
    tied: "ROUND TIED",
    restartGame: "RESTART GAME"
}

const Modal = ({variant}) => {
    return (
        <CreateModal>
            <div>
                <h2>text</h2>
                <h1>{text[variant]}</h1>
                <div className="buttons">
                    <Button variant="silver">
                        <p>QUIT</p>
                    </Button>
                    <Button variant="yellow">
                        <p>NEXT ROUND</p>
                    </Button>
                </div>
            </div>
        </CreateModal>
    )
}

export default Modal;