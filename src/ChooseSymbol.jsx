import "./styles.css"
import "./ChooseSymbol-styles.css"

const ChooseSymbol = () => {
    return (
        <div className="card">
            <h1>PICK PLAYER 1`S MARK</h1>
            <div className="switch">
                <div className="switch-option">
                    <button 
                        className="active"
                        onClick={(e) => {
                            if (e.target.className === "active")
                            {
                            e.target.className = "inactive";}
                            else {
                                e.target.className = "active";
                            }
                        }
                        }
                        >
                        <img src="./assets/icon-x-silver.svg" alt="icon-x" />
                    </button>
                </div>
                <div className="switch-option">
                    <button
                        className="inactive"
                        onClick={(e) => {
                            if (e.target.className === "active")
                            {
                            e.target.className = "inactive";}
                            else {
                                e.target.className = "active";
                            }
                        }
                        }
                        >
                        <img src="./assets/icon-o-silver.svg" alt="icon-o" />
                    </button>
                </div>
            </div>
            <h2>REMEMBER: X GOES FIRST</h2>
        </div>
    )
}

export default ChooseSymbol;