function reset(setBoardValues) {
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
})}

export default reset;