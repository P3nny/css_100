function highlight(num, color) {

  let numbers = document.getElementsByClassName("box");
  for (number of numbers) {
    console.log(number)
    if (number.textContent % num == 0) {
      number.style.borderColor = `${color}`;
    }
  }
}
