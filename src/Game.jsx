import { useContext, useState } from "react";
import { OptionContext } from "./Option.context";
import Button from "./Button";
import Modal from "./Modal";
import "./styles.css"
import "./Game-styles.css"
import reset from "./reset";

const Game = () => {
    const [option,setOption] = useContext(OptionContext);
    // const [displayX, setDisplayX] = useContext(MyContext);
    // const [displayO, setDisplayO] = useContext(MyContext);
    // const [showModal, setShowModal] = useContext(MyContext);
    // const {displayX, setDisplayX,
    //     displayO, setDisplayO,
    //    showModal, setShowModal} = useContext(MyContext);
    // console.log(option);
    
    const [boardValues, setBoardValues] = useState([
        ["" ,"" ,""],
        ["", "", ""],
        ["", "", ""]
    ])

    const [showModal, setShowModal] = useState(false);
    const [modalVariant, setModalVariant] = useState("");
    const [winner, setWinner] = useState("")


    // 00 01 02
    // 10 11 12
    // 20 21 22

    console.log(boardValues)

    function handleCLick(e, x, y) {
        let boardChange = {...boardValues}
        if (boardChange[x][y] === "") {

            let childrens = e.currentTarget.children
            let visibleIndex = 0;

            boardChange[x][y] = option
            option === "X" 
            ? (setOption("O"))
            : (setOption("X"),visibleIndex = 1)
            console.log(boardValues);


            // e.currentTarget.classList.add("x-win")
            childrens[visibleIndex].className = "visible";
            childrens[2].remove();
            childrens[2].remove();

        

            let diagonal1 = [boardValues[0][0],boardValues[1][1],boardValues[2][2]];
            let diagonal2 = [boardValues[0][2],boardValues[1][1],boardValues[2][0]];

            let xWin = ["X", "X", "X"];
            let OWin = ["O", "O", "O"];

            for (let i=0; i<=2; i++) {
                boardValues[i].toString() === xWin.toString() 
                    ? [console.log("X WIN"), setShowModal(true), setModalVariant("xWin"), setWinner("player1")]
                    : [ boardValues[i].toString() === OWin.toString()
                        ? [console.log("O WIN"), setShowModal(true), setModalVariant("oWin"), setWinner("player2")] 
                        : console.log("false")
                    ];
            }


            // let column1 = [boardValues[0][0],boardValues[1][0],boardValues[2][0]];
            // let column2 = [boardValues[0][1],boardValues[1][1],boardValues[2][1]];
            // let column3 = [boardValues[0][2],boardValues[1][2],boardValues[2][2]];
            // let columnValue1 = [];
            // let columnValue2 = [];
            // let columnValue3 = [];

            // for (let j=0; j<=2; j++) {
            //     for (let i=0; i<=2; i++) {
            //         console.log("columns", boardValues[i][j]);
            //         let array = boardValues[i][j];
            //         let columnValue = `columnValue${j}`
            //         console.log("columnvalue", columnValue)

            //         columnValue.push(array)
            //         console.log("columnWalue:",columnValue)
            //     }
            // }



            diagonal1.toString() === xWin.toString() 
            ? [console.log("X WIN"), setShowModal(true), setModalVariant("xWin"), setWinner("player1")]
            : [diagonal1.toString() === OWin.toString()
                ? [console.log("O WIN"), setShowModal(true), setModalVariant("oWin"), setWinner("player2")] 
                : console.log("false")];

            
            diagonal2.toString() === xWin.toString() 
            ? [console.log("X WIN"), setShowModal(true), setModalVariant("xWin"), setWinner("player1")]
            : [diagonal2.toString() === OWin.toString()
                ? [console.log("O WIN"), setShowModal(true), setModalVariant("oWin"), setWinner("player2")] 
                : console.log("false")];
        }

    }


    return (
        <div className="game">
            <div className="row icon-row">
                <div>
                    <img src="./assets/icon-x.svg" alt="icon-x" />
                    <img src="./assets/icon-o.svg" alt="icon-o" />
                </div>
                <div className="turn">
                    <img className={option ==="X" ? "visible" : "invisible"} src="./assets/icon-x-silver.svg" alt="icon-x"/>
                    <img className={option ==="O" ? "visible" : "invisible"} src="./assets/icon-o-silver.svg" alt="icon-x"/>

                    <p>TURN</p>
                </div>
                    { <Button variant="restart" onClick={() => {reset(setBoardValues)/*setShowModal(true), setModalVariant("restartGame"), setWinner("")*/}}/> }
            </div>  

            <div className="game-board">
                <div className="row">
                    <Button
                    onclick={(e) => handleCLick(e,"0","0")}
                    />
                    <Button
                    onclick={(e) => handleCLick(e,"0","1")}
                    />
                    <Button
                    onclick={(e) => handleCLick(e,"0","2")}
                    />
                </div>
                <div className="row">
                <Button
                    onclick={(e) => handleCLick(e,"1","0")}
                    />
                    <Button
                    onclick={(e) => handleCLick(e,"1","1")}
                    />
                    <Button
                    onclick={(e) => handleCLick(e,"1","2")}
                    />
                </div>
                <div className="row">
                <Button
                    onclick={(e) => handleCLick(e,"2","0")}
                    />
                    <Button
                    onclick={(e) => handleCLick(e,"2","1")}
                    />
                    <Button
                    onclick={(e) => handleCLick(e,"2","2")}
                    />
                </div>
            </div>
            <div className="game-info row">
                <div className="player1">
                    <p className="text">X (YOU)</p>
                    <p className="value">20</p>
                </div>
                <div className="ties">
                    <p className="text">TIES</p>
                    <p className="value">20</p>
                </div>
                <div className="player2">
                    <p className="text">O (PC)</p>
                    <p className="value">20</p>
                </div>
            </div>

            {
                showModal ?
                (
                    <Modal
                    variant={modalVariant}
                    onclick={() => setShowModal(false)}
                    winner={winner}
                    />
                ) : null
            }

        </div>

    );
};


export default Game;