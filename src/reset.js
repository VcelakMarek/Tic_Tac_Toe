function reset(setBoardValues, setP1Wins, setP2Wins,setWinner) {
    const images = Array.from(
        document.querySelectorAll('.game-board button img')
      );
  
      images.forEach(element => {
        element.className = 'invisible';

    setBoardValues(([
        ["" ,"" ,""],
        ["", "", ""],
        ["", "", ""]
    ]))
    setP1Wins(0);
    setP2Wins(0);
    setWinner("");
})}

export default reset;