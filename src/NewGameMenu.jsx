import { useContext } from "react";
import { Link } from "react-router-dom";
import "./NewGameMenu-styles.css";
import ChooseSymbol from "./ChooseSymbol";
import Button from "./Button";
import { vsCpuContext } from "./vsCpu.context";

const NewGameMenu = () => {
  const [vsCPU, setVsCPU] = useContext(vsCpuContext);
  return (
    <div>
      <div className="XO-header">
        <img src="./assets/icon-x.svg" alt="icon-x" />
        <img src="./assets/icon-o.svg" alt="icon-o" />
      </div>
      <ChooseSymbol />
      <div className="new-game-buttons">
        <Link to="/game">
          <Button variant="newGameCPU" onClick={() => setVsCPU(true)} />
        </Link>
        <Link to="/game">
          <Button variant="newGamePlayer" onClick={() => setVsCPU(false)} />
        </Link>
      </div>
    </div>
  );
};

export default NewGameMenu;
