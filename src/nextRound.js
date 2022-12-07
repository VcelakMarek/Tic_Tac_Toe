function nextRound(setBoardValues,setWinner) {
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
    setWinner("");
})}

export default nextRound;