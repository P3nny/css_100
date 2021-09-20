let highlighted = []


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function highlight(num, color) {
  console.log(highlighted);
  let audio = new Audio(`${num}.wav`); audio.play()
  let numbers = document.getElementsByClassName("box");
  for (number of numbers) {
    if (number.textContent % num == 0 && number.textContent <= num * 10) {
      console.log(highlighted.includes(parseInt(number.textContent, 10)));
      highlighted.includes(parseInt(number.textContent, 10)) ? number.style.borderColor = `orange` : number.style.borderColor = `${color}`;
      await sleep(1700)
      highlighted.push(parseInt(number.textContent, 10));
    }
  }
}
