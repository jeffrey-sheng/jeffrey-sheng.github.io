const borderAlpha = 220;

// the width of each shape/letter
const letterSize = 50

const STROKE_WEIGHT = 1;

const startPosition = {
  x: 70,
  y: 70
}

const margin = {
  x: 1.1 * letterSize,
  y: 1.5 * letterSize
}

// what user typed
let userEntry = [];

let cursorIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(255);
}

function draw() {
  strokeWeight(STROKE_WEIGHT);
  background("black");
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
      const currEntry = userEntry[indexOfUserEntry]
      if (currEntry !== " ") {
        // draw the letter 
        window[currEntry](x, y);
      }
      indexOfUserEntry++;
    }
    if (isBreak) {
      break;
    }
  }

  
  // A(startPosition.x, startPosition.y);
  // A(startPosition.x, startPosition.y + margin.y);
  // A(startPosition.x + margin.x, startPosition.y);
  
  
//   //A border
//   stroke(borderAlpha);
//   strokeWeight(1);
//   rect(70, 70, 140, 140);
  
//   //B border
//   strokeWeight(1);
//   rect(210, 70, 140, 140);
  
//   //C border
//   strokeWeight(1);
//   rect(350, 70, 140, 140);
  
//   //D border
//   strokeWeight(1);
//   rect(490, 70, 140, 140)
  
//   //E border
//   strokeWeight(1);
//   rect(630, 70, 140, 140);
  
//   //F border
//   strokeWeight(1);
//   rect(770, 70, 140, 140);
  
//   //G border
//   strokeWeight(1);
//   rect(910, 70, 140, 140);
  
//   //H border
//   strokeWeight(1);
//   rect(70, 210, 140,140);
  
//   //I border
//   rect(210, 210, 140, 140);
  
//   //J border
//   rect(350, 210, 140, 140);
  
//   //K border
//   rect(490, 210, 140, 140);
  
//   //L border
//   rect(630, 210, 140, 140);
  
//   //M border
//   rect(770, 210, 140, 140);
  
//   //N border
//   rect(910, 210, 140, 140);
  
//   //O border
//   rect(70, 350, 140, 140);
  
//   //P
//   rect(210, 350, 140, 140);
  
//   //Q
//   rect(350, 350, 140, 140);
  
//   //R
//   rect(490, 350, 140, 140);
  
//   //S
//   rect(630, 350, 140, 140);
  
//   //T
//   rect(770, 350, 140, 140);
  
//   //U
//   rect(910, 350, 140, 140);
  
//   //V
  
  
//   stroke(0);
  
//   //A
//   strokeWeight(2);
//   triangle(140, 70, 70, 210, 210, 210);
  
//   //B
//   strokeWeight(2);
//   rect(210, 70, 70, 140);
  
//   // strokeWeight(1);
//   circle(315, 105, 70);
  
//   // strokeWeight(1);
//   circle(315, 175, 70);
  
//   //C
//   // strokeWeight(1);
//   arc(420, 140, 140, 140, HALF_PI, PI+HALF_PI, CHORD);
  
//   triangle(420, 70, 490, 70, 455, 140);
//   triangle(420, 210, 490, 210, 455, 140);
  
//   //D
//   // strokeWeight(1);
//   rect(490, 70, 70, 140);
//   arc(560, 140, 140, 140, PI+HALF_PI, HALF_PI, CHORD);
  
//   //E
//   rect(630, 70, 140, 140/3);
//   rect(630, 70+140/3, 140, 140/3);
//   rect(630, 70+140/3*2, 140, 140/3);
  
//   //F
//   // strokeWeight(1);
//   triangle(770, 70, 910, 70, 770, 140);
//   triangle(770, 140, 910, 140, 770, 210);
  
//   //G
//   // strokeWeight(1);
//   arc(980, 140, 140, 140, HALF_PI, PI+HALF_PI, CHORD);
//   // line(980, 140, 1050, 140);
//   arc(980, 140, 140, 140, 0, HALF_PI, PIE);
  
//   //H
//   rect(70, 210, 70, 70);
//   rect(140, 210, 70, 70);
//   rect(70, 280, 70, 70);
//   rect(140, 280, 70, 70);
  
//   //I
//   rect(210, 210, 70, 140);
//   rect(280, 210, 70, 140);
  
//   //J
//   rect(420, 210, 70, 70);
//   arc(420, 280, 140, 140, 0, PI, CHORD);
  
//   //K
//   rect(490, 210, 70, 140);
//   triangle(560, 210, 560, 280, 630, 210);
//   triangle(560, 280, 560, 350, 630, 350);
  
//   //L
//   rect(630, 210, 70, 140);
//   triangle(700, 350, 770, 280, 770, 350);
  
//   //M
//   rect(770, 280, 140, 70);
//   triangle(770, 280, 770, 210, 840, 280);
//   triangle(840, 280, 910, 280, 910, 210);
  
//   //N
//   triangle(910, 210, 910, 350, 1050, 350);
//   triangle(910, 210, 1050, 350, 1050, 210);
  
//   //O
//   circle(140, 420, 140);
  
//   //P
//   rect(210, 350, 70, 140);
//   triangle(280, 350, 350, 350, 280, 420);
  
//   //Q
//   rect(420, 420, 70, 70);
//   arc(420, 420, 140, 140, HALF_PI, 0, PIE);
  
//   //R
//   rect(490, 350, 70, 140);
//   arc(560, 420, 140, 140, PI+HALF_PI, 0, PIE);
//   triangle(560, 420, 560, 490, 630, 490);
  
//   //S
//   arc(700, 420, 140, 140, PI, PI+HALF_PI, PIE);
//   arc(700, 420, 140, 140, 0, HALF_PI, PIE);
  
//   //T
//   rect(770, 350, 140, 70);
//   rect(770+140/4, 420, 140/2, 70);
  
//   //U
  
  
//   //V
  
  
//   //W
  
  
//   //X
  
  
//   //Y
  
  
//   //Z
}


function A(x, y) {
  triangle(x + letterSize / 2, y, x, y + letterSize, x + letterSize, y + letterSize);
}

function B(x, y) {
  rect(x, y, letterSize / 2, letterSize);
  circle(x + letterSize / 2 + letterSize / 4, y + letterSize / 4, letterSize / 2);
  circle(x + letterSize / 2 + letterSize / 4, y + letterSize / 2 + letterSize / 4, letterSize / 2);
}

function C(x, y){
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, HALF_PI, PI+HALF_PI, CHORD);
  
  triangle(x + letterSize / 2, y, x + letterSize, y, x + letterSize * 3 / 4, y + letterSize / 2);
  triangle(x + letterSize / 2, y + letterSize, x + letterSize * 3 / 4, y + letterSize / 2, x + letterSize, y + letterSize);
}

function D(x, y){
  rect(x, y, letterSize / 2, letterSize);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, PI+HALF_PI, HALF_PI, CHORD);
}

function E(x, y){
  rect(x, y, letterSize, letterSize / 3);
  rect(x, y + letterSize / 3, letterSize, letterSize / 3);
  rect(x, y + letterSize / 3 * 2, letterSize, letterSize / 3)
}

function F(x, y){
  triangle(x, y, x + letterSize, y, x, y + letterSize / 2);
  triangle(x, y + letterSize / 2, x + letterSize, y + letterSize / 2, x, y + letterSize);
}

function G(x, y){
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, HALF_PI, PI+HALF_PI, CHORD);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, 0, HALF_PI, PIE);
}

function H(x, y){
  rect(x, y, letterSize / 2, letterSize / 2);
  rect(x + letterSize / 2, y, letterSize / 2, letterSize / 2);
  rect(x, y + letterSize / 2, letterSize / 2, letterSize / 2);
  rect(x + letterSize / 2, y + letterSize / 2, letterSize / 2, letterSize / 2);
}

function I(x, y){
  rect(x, y, letterSize / 2, letterSize);
  rect(x + letterSize / 2, y, letterSize / 2, letterSize);
}

function J(x, y){
  rect(x + letterSize / 2, y, letterSize / 2, letterSize / 2);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, 0, PI, CHORD);
}

function K(x, y){
  rect(x, y, letterSize / 2, letterSize);
  triangle(x + letterSize / 2, y, x + letterSize, y, x + letterSize / 2, y + letterSize / 2);
  triangle(x + letterSize / 2, y + letterSize / 2, x + letterSize / 2, y + letterSize, x + letterSize, y + letterSize);
}

function L(x, y){
  rect(x, y, letterSize / 2, letterSize);
  triangle(x + letterSize / 2, y + letterSize, x + letterSize, y + letterSize / 2, x + letterSize, y + letterSize);
}

function M(x, y){
  rect(x, y + letterSize / 2, letterSize, letterSize / 2);
  triangle(x, y, x, y + letterSize / 2, x + letterSize / 2, y + letterSize / 2);
  triangle(x + letterSize / 2, y + letterSize / 2, x + letterSize, y, x + letterSize, y + letterSize / 2);
}

function N(x, y){
  triangle(x, y, x, y + letterSize, x + letterSize, y + letterSize);
  triangle(x, y, x + letterSize, y, x + letterSize, y + letterSize);
}

function O(x, y){
  circle(x + letterSize / 2, y + letterSize / 2, letterSize);
}

function P(x, y){
  rect(x, y, letterSize / 2, letterSize);
  triangle(x + letterSize / 2, y, x + letterSize, y, x + letterSize / 2, y + letterSize / 2);
}

function Q(x, y){
  rect(x + letterSize / 2, y + letterSize / 2, letterSize / 2, letterSize / 2);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, HALF_PI, 0, PIE);
}

function R(x, y){
  rect(x, y, letterSize / 2, letterSize);
  triangle(x + letterSize / 2, y + letterSize / 2, x + letterSize / 2, y + letterSize, x + letterSize, y + letterSize);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, PI+HALF_PI, 0, PIE);
}

function S(x, y){
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, PI, PI+HALF_PI, PIE);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, 0, HALF_PI, PIE);
}

function T(x, y){
  rect(x, y, letterSize, letterSize / 2);
  rect(x + letterSize / 4, y + letterSize /2, letterSize / 2, letterSize / 2);
}

function U(x, y){
  triangle(x, y, x, y + letterSize / 2, x + letterSize / 2, y + letterSize / 2);
  triangle(x + letterSize / 2, y + letterSize / 2, x + letterSize, y, x + letterSize, y + letterSize / 2);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, 0, PI, CHORD);
}

function V(x, y){
  triangle(x, y, x + letterSize, y, x + letterSize / 2, y + letterSize);
}

function W(x, y){
  rect(x, y, letterSize, letterSize / 2);
  triangle(x, y + letterSize / 2, x, y + letterSize, x + letterSize / 2, y + letterSize / 2);
  triangle( x + letterSize / 2, y + letterSize / 2, x + letterSize, y + letterSize / 2, x + letterSize, y + + letterSize);
}

function X(x, y){
  triangle(x, y, x + letterSize / 2, y + letterSize / 2, x, y + letterSize);
  triangle(x + letterSize / 2, y + letterSize / 2, x + letterSize, y, x + letterSize, y + letterSize);
}

function Y(x, y){
  triangle(x, y, x + letterSize, y, x + letterSize / 2, y + letterSize / 2);
  rect(x + letterSize / 4, y + letterSize / 2, letterSize / 2, letterSize / 2)
//   triangle(x + letterSize, y, x, y + letterSize, x + letterSize, y + + letterSize);
}

function Z(x, y){
  rect(x, y, letterSize, letterSize / 2);
  triangle(x, y + letterSize, x + letterSize, y + + letterSize / 2, x + letterSize, y + letterSize);
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
  } else if (keyCode == 37 && cursorIndex > 0 ) {
    // left arror
    cursorIndex--;
  } else if (keyCode == 39 && cursorIndex < userEntry.length) {
    // right arror
    cursorIndex++;
  }
  else if (keyCode >= 65 && keyCode <= 90) {
    // letter
    userEntry.splice(cursorIndex, 0, String.fromCharCode(keyCode));
    cursorIndex++;
  }
  console.log(userEntry);
  console.log("cursorIndex:", cursorIndex)
}

// Don't change this method. This method prevents the page from scrolling when spacebar is pressed.
window.addEventListener('keydown', function(e) {
  if(e.key == " " && e.target == document.body) {
    e.preventDefault();
  }
});