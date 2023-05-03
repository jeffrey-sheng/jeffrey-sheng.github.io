// the width of each shape/letter
const letterSize = 100;

const STROKE_WEIGHT = 0;

const startPosition = {
  x: undefined,
  y: NAV_BUTTON_DIMENSION.margin.y + letterSize
};

const margin = {
  x: letterSize,
  y: letterSize
};

const INSTRUCTION_CONTENT = "Start typing... Valid characters are A through Z, spacebar, and ] ' [ , / . ; \\ \nUse left and right arrow key as well as backspace to make adjustments.";

// what user typed
let userEntry = [];

let cursorIndex = 0;

let MontserratFont;

function preload() {
  MontserratFont = loadFont("public/Montserrat-Regular.otf");
}

function setup() {
  startPosition.x = windowWidth * 0.45;
  createCanvas(windowWidth, windowHeight);
  let backButton = createButton("");
  backButton.addClass("icon-left-arrow");
  backButton.position(NAV_BUTTON_DIMENSION.margin.x, NAV_BUTTON_DIMENSION.margin.y);
  backButton.mouseReleased(() => location.href = "./index.html");

  let replayButton = createButton("");
  replayButton.addClass("icon-refresh");
  replayButton.position(windowWidth - 100 - NAV_BUTTON_DIMENSION.margin.x, NAV_BUTTON_DIMENSION.margin.y);
  replayButton.mouseReleased(() => {
    userEntry = [];
    cursorIndex = 0;
  });
  // background(255);
}

function draw() {
  strokeWeight(STROKE_WEIGHT);
  background("black");
  let indexOfUserEntry = 0;

  push();
  textFont(MontserratFont);
  textSize(40);
  fill("white");
  textLeading(70);
  text(INSTRUCTION_CONTENT, NAV_BUTTON_DIMENSION.margin.x + 120, NAV_BUTTON_DIMENSION.margin.y * 5, windowWidth * 0.3, windowHeight / 2);
  pop();

  showFooter(MontserratFont);

  for (let y = startPosition.y; y < windowHeight - letterSize - startPosition.y; y += margin.y) {
    isBreak = false;
    for (let x = startPosition.x; x < windowWidth - letterSize - startPosition.y; x += margin.x) {
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
  push();
  fill(100);
  rect(x, y + letterSize + 5, letterSize, 2);
  pop();
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
  else if (keyCode == 219) {
    // Opening Bracket
    userEntry.splice(cursorIndex, 0, new OpeningBracket());
    cursorIndex++;
  }
  else if (keyCode == 221) {
    // Closing Bracket
    userEntry.splice(cursorIndex, 0, new ClosingBracket());
    cursorIndex++;
  }
  else if (keyCode == 190) {
    // Period
    userEntry.splice(cursorIndex, 0, new Period());
    cursorIndex++;
  }
  else if (keyCode == 222) {
    // Quote
    userEntry.splice(cursorIndex, 0, new Quote());
    cursorIndex++;
  }
  else if (keyCode == 191) {
    // Slash
    userEntry.splice(cursorIndex, 0, new Slash());
    cursorIndex++;
  }
  else if (keyCode == 188) {
    // Comma
    userEntry.splice(cursorIndex, 0, new Comma());
    cursorIndex++;
  }
  else if (keyCode == 186) {
    // Semi-colon
    userEntry.splice(cursorIndex, 0, new SemiColon());
    cursorIndex++;
  }
  else if (keyCode == 220) {
    // Back Slash
    userEntry.splice(cursorIndex, 0, new BackSlash());
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