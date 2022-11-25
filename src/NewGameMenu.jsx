import "./NewGameMenu-styles.css"
import ChooseSymbol from "./ChooseSymbol";

const NewGameMenu = () => {
    return (
        <div>
            <img src="./assets/icon-x.svg" alt="icon-x" />
            <img src="./assets/icon-o.svg" alt="icon-o" />
            <ChooseSymbol />
        </div>
    )
}

export default NewGameMenu;