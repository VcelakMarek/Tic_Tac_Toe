import "./styles.css";
import "./button-styles.css"

function Button(props){
    const myClass = `button ${props.type}`
    return(
    <button 
    className={myClass} 
    onClick={props.handleClick}
    >
    {props.children}
    </button>
    )
}

export default Button;