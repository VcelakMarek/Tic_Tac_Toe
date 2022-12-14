import { useContext } from "react";
import { OptionContext } from "./Option.context";
import "./css/styles.css";
import "./css/ChooseSymbol-styles.css";

const ChooseSymbol = () => {
  const [option, setOption] = useContext(OptionContext);

  return (
    <div className="card">
      <h1>PICK PLAYER 1`S MARK</h1>
      <div className="switch">
        <div className="switch-option">
          <button
            className={option === "X" ? "active" : "inactive"}
            onClick={() => setOption("X")}
          >
            <img src="./assets/icon-x-silver.svg" alt="icon-x" />
          </button>
        </div>
        <div className="switch-option">
          <button
            className={option === "O" ? "active" : "inactive"}
            onClick={() => setOption("O")}
          >
            <img src="./assets/icon-o-silver.svg" alt="icon-o" />
          </button>
        </div>
      </div>
      <h2>REMEMBER: X GOES FIRST</h2>
    </div>
  );
};

export default ChooseSymbol;
