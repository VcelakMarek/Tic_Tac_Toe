import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { OptionContext } from "./Option.context";
import "./css/styles.css";
import "./css/button-styles.css";

const color = {
  newGameCPU: "yellow",
  newGamePlayer: "blue",
  silver: "silver",
  yellow: "yellow box-shadow-4px",
  restart: "silver",
  gameButton: "dark-navy",
};

const size = {
  newGameCPU: "long",
  newGamePlayer: "long",
  restart: "small",
  gameButton: "game-button-size",
  silver: "height-52px",
  yellow: "height-52px",
};

const border = {
  newGameCPU: "border-radius-15px",
  newGamePlayer: "border-radius-15px",
  silver: "border-radius-10px",
  yellow: "border-radius-10px",
  restart: "border-radius-5px",
  gameButton: "border-radius-15px",
};

const text = {
  newGameCPU: "NEW GAME  (VS CPU)",
  newGamePlayer: "NEW GAME  (VS PLAYER)",
};

const Button = ({ variant = "gameButton", value, children, ...props }) => {
  const [option] = useContext(OptionContext);
  const [hoverX, setHoverX] = useState("invisible");
  const [hoverO, setHoverO] = useState("invisible");

  let baseClasses = [color[variant], size[variant], border[variant]];

  if (variant === "restart") {
    return (
      <button className={baseClasses.join(" ")} onClick={props.onClick}>
        <img src="/icon-restart.svg" alt="restart-icon" />
      </button>
    );
  } else if (variant === "gameButton") {
    return (
      <button
        onMouseEnter={() =>
          !props.vsCPU
            ? [option === "X" ? setHoverX("visible") : setHoverO("visible")]
            : [
                props.playerMark === "X"
                  ? setHoverX("visible")
                  : setHoverO("visible"),
              ]
        }
        onMouseLeave={() => {
          setHoverX("invisible");
          setHoverO("invisible");
        }}
        onClick={(e) => {
          props.onClick(e);
          setHoverX("invisible");
          setHoverO("invisible");
        }}
        className={baseClasses.join(" ")}
      >
        {value === "X" && (
          <img className="visible" src="/icon-x.svg" alt="icon-x" />
        )}
        {value === "O" && (
          <img className="visible" src="/icon-o.svg" alt="icon-o" />
        )}

        {value === "" && hoverX === "visible" && (
          <img
            className="visible"
            src="/icon-x-outline.svg"
            alt="icon-x-hover"
          />
        )}
        {value === "" && hoverO === "visible" && (
          <img
            className="visible"
            src="/icon-o-outline.svg"
            alt="icon-o-hover"
          />
        )}
      </button>
    );
  } else if (variant === "newGameCPU" || variant === "newGamePlayer") {
    return (
      <button className={baseClasses.join(" ")} onClick={props.onClick}>
        <p>{text[variant]}</p>
      </button>
    );
  } else {
    return (
      <Link to={props.link}>
        <button
          className={baseClasses.join(" ")}
          onClick={props.onClick}
          {...props}
        >
          {children}
        </button>
      </Link>
    );
  }
};

export default Button;
