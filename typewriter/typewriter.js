// the width of each shape/letter
const letterSize = 100;

const STROKE_WEIGHT = 0;

const startPosition = {
  x: 70,
  y: 70
};

const margin = {
  x: letterSize,
  y: letterSize
};

// what user typed
let userEntry = [];

let cursorIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(255);
}

function draw() {
  strokeWeight(STROKE_WEIGHT);
  background("white");
  let indexOfUserEntry = 0;
  for (let y = startPosition.y; y < windowHeight - letterSize - startPosition.y; y += margin.y) {
    isBreak = false;
    for (let x = startPosition.x; x < windowWidth - letterSize - startPosition.x; x += margin.x) {
      // has cursor?
      if (indexOfUserEntry == cursorIndex) {
        drawCursor(x, y);
      }
      // has letter?
      if (indexOfUserEntry == userEntry.length) {
        isBreak = true;
        break;
      }
      // draw
      const currEntry = userEntry[indexOfUserEntry];
      if (currEntry !== " ") {
        // draw the letter 
        // window[currEntry](x, y);
        currEntry.show(x, y);
      }
      indexOfUserEntry++;
    }
    if (isBreak) {
      break;
    }
  }
}

function drawCursor(x, y) {
  rect(x, y + letterSize + 5, letterSize, 2);
}

function keyPressed() {
  if (keyCode == 8) {
    // backspace
    if (cursorIndex != 0) {
      cursorIndex--;
    }
    userEntry.splice(cursorIndex, 1);
  } else if (keyCode == 32) {
    // space
    userEntry.splice(cursorIndex, 0, " ");
    cursorIndex++;
  } else if (keyCode == 37 && cursorIndex > 0) {
    // left arror
    cursorIndex--;
  } else if (keyCode == 39 && cursorIndex < userEntry.length) {
    // right arror
    cursorIndex++;
  }
  else if (keyCode >= 65 && keyCode <= 90) {
    // letter
    userEntry.splice(cursorIndex, 0, eval(`new ${String.fromCharCode(keyCode)}()`));
    cursorIndex++;
  }
  console.log(userEntry);
  console.log("cursorIndex:", cursorIndex);
}

// Don't change this method. This method prevents the page from scrolling when spacebar is pressed.
window.addEventListener('keydown', function (e) {
  if (e.key == " " && e.target == document.body) {
    e.preventDefault();
  }
});