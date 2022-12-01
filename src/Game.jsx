import { useContext, useState } from "react";
import { OptionContext } from "./Option.context";
import Button from "./Button";
import "./styles.css"
import "./Game-styles.css"

const Game = () => {
    const [option,setOption] = useContext(OptionContext) ;
    console.log(option);
    
    const [boardValues] = useState([
        ["" ,"" ,""],
        ["", "", ""],
        ["", "", ""]
    ])

    // 00 01 02
    // 10 11 12
    // 20 21 22

    console.log(boardValues)

    function handleCLick(x, y) {
        let boardChange = {...boardValues}
        if (boardChange[x][y] === "") {
            
            boardChange[x][y] = option
            option === "X" ? setOption("O") : setOption("X") 
            console.log(boardValues);

            let diagonal1 = [boardValues[0][0],boardValues[1][1],boardValues[2][2]];
            let diagonal2 = [boardValues[0][2],boardValues[1][1],boardValues[2][0]];

            let xWin = ["X", "X", "X"];
            let OWin = ["O", "O", "O"];

            for (let i=0; i<=2; i++) {
                boardValues[i].toString() === xWin.toString() 
                    ? console.log("X WIN") 
                    : [ boardValues[i].toString() === OWin.toString()
                        ? console.log("O WIN") 
                        : console.log("false")
                    ];
            }

            let column1 = [boardValues[0][0],boardValues[1][0],boardValues[2][0]];
            let column2 = [boardValues[0][1],boardValues[1][1],boardValues[2][1]];
            let column3 = [boardValues[0][2],boardValues[1][2],boardValues[2][2]];

            for (let j=0; j<=2; j++) {
                for (let i=0; i<=2; i++) {
                    console.log("columns", boardValues[i][j]);
                    let array = boardValues[i][j];
                    let columnValue =[];
                    columnValue.push(array)
                    console.log("columnWalue:",columnValue)
                }
            }



            diagonal1.toString() === xWin.toString() 
            ? console.log("X WIN") 
            : [ diagonal2.toString() === OWin.toString()
                ? console.log("O WIN") 
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
                    <Button variant="restart" />
            </div>  

            <div className="game-board">
                <div className="row">
                    <Button
                    onclick={() => handleCLick("0","0")}
                    />
                    <Button
                    onclick={() => handleCLick("0","1")}
                    />
                    <Button
                    onclick={() => handleCLick("0","2")}
                    />
                </div>
                <div className="row">
                <Button
                    onclick={() => handleCLick("1","0")}
                    />
                    <Button
                    onclick={() => handleCLick("1","1")}
                    />
                    <Button
                    onclick={() => handleCLick("1","2")}
                    />
                </div>
                <div className="row">
                <Button
                    onclick={() => handleCLick("2","0")}
                    />
                    <Button
                    onclick={() => handleCLick("2","1")}
                    />
                    <Button
                    onclick={() => handleCLick("2","2")}
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
        </div>

    );
};


export default Game;