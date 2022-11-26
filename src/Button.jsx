import "./styles.css";
import "./button-styles.css"

const color = {
    primary: "yellow",
    secondary: "silver"
}

const size = {
    primary: "long" 
}

const border = {
    primary: "border-none"
}

const Button ({ variant = "primary" }) => {

    let baseClasses = [
        color[variant],
        size[variant],
        border[variant]
    ]

    return (
        <button
        className={baseClasses.join(" ")}>
        </button>
    )
}

export default Button;