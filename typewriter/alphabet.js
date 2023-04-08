// function A(x, y) {
//   triangle(x + letterSize / 2, y, x, y + letterSize, x + letterSize, y + letterSize);
// }

class A {
  constructor() {
    this.color = getRandomColorFromColorPalette();
  }

  show(x, y) {
    push();
    fill(this.color);
    triangle(x + letterSize / 2, y, x, y + letterSize, x + letterSize, y + letterSize);
    pop();
  }
};

// function B(x, y) {
//   rect(x, y, letterSize / 2, letterSize);
//   circle(x + letterSize / 2 + letterSize / 4, y + letterSize / 4, letterSize / 2);
//   circle(x + letterSize / 2 + letterSize / 4, y + letterSize / 2 + letterSize / 4, letterSize / 2);
// }

class B {
  constructor() {
    this.color1 = getRandomColorFromColorPalette();
    this.color2 = getRandomColorFromColorPalette();
    this.color3 = getRandomColorFromColorPalette();
  }

  show(x, y) {
    push();
    fill(this.color1);
    rect(x, y, letterSize / 2, letterSize);
    pop();

    push();
    fill(this.color2);
    circle(x + letterSize / 2 + letterSize / 4, y + letterSize / 4, letterSize / 2);
    pop();
    push();
    fill(this.color3);
    circle(x + letterSize / 2 + letterSize / 4, y + letterSize / 2 + letterSize / 4, letterSize / 2);
    pop();
  }
};

function C(x, y) {
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, HALF_PI, PI + HALF_PI, CHORD);
  triangle(x + letterSize / 2, y, x + letterSize, y, x + letterSize * 3 / 4, y + letterSize / 2);
  triangle(x + letterSize / 2, y + letterSize, x + letterSize * 3 / 4, y + letterSize / 2, x + letterSize, y + letterSize);
}

function D(x, y) {
  rect(x, y, letterSize / 2, letterSize);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, PI + HALF_PI, HALF_PI, CHORD);
}

function E(x, y) {
  rect(x, y, letterSize, letterSize / 3);
  rect(x, y + letterSize / 3, letterSize, letterSize / 3);
  rect(x, y + letterSize / 3 * 2, letterSize, letterSize / 3);
}

function F(x, y) {
  triangle(x, y, x + letterSize, y, x, y + letterSize / 2);
  triangle(x, y + letterSize / 2, x + letterSize, y + letterSize / 2, x, y + letterSize);
}

function G(x, y) {
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, HALF_PI, PI + HALF_PI, CHORD);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, 0, HALF_PI, PIE);
}

function H(x, y) {
  rect(x, y, letterSize / 2, letterSize / 2);
  rect(x + letterSize / 2, y, letterSize / 2, letterSize / 2);
  rect(x, y + letterSize / 2, letterSize / 2, letterSize / 2);
  rect(x + letterSize / 2, y + letterSize / 2, letterSize / 2, letterSize / 2);
}

function I(x, y) {
  rect(x, y, letterSize / 2, letterSize);
  rect(x + letterSize / 2, y, letterSize / 2, letterSize);
}

function J(x, y) {
  rect(x + letterSize / 2, y, letterSize / 2, letterSize / 2);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, 0, PI, CHORD);
}

function K(x, y) {
  rect(x, y, letterSize / 2, letterSize);
  triangle(x + letterSize / 2, y, x + letterSize, y, x + letterSize / 2, y + letterSize / 2);
  triangle(x + letterSize / 2, y + letterSize / 2, x + letterSize / 2, y + letterSize, x + letterSize, y + letterSize);
}

function L(x, y) {
  rect(x, y, letterSize / 2, letterSize);
  triangle(x + letterSize / 2, y + letterSize, x + letterSize, y + letterSize / 2, x + letterSize, y + letterSize);
}

function M(x, y) {
  rect(x, y + letterSize / 2, letterSize, letterSize / 2);
  triangle(x, y, x, y + letterSize / 2, x + letterSize / 2, y + letterSize / 2);
  triangle(x + letterSize / 2, y + letterSize / 2, x + letterSize, y, x + letterSize, y + letterSize / 2);
}

function N(x, y) {
  triangle(x, y, x, y + letterSize, x + letterSize, y + letterSize);
  triangle(x, y, x + letterSize, y, x + letterSize, y + letterSize);
}

function O(x, y) {
  circle(x + letterSize / 2, y + letterSize / 2, letterSize);
}

function P(x, y) {
  rect(x, y, letterSize / 2, letterSize);
  triangle(x + letterSize / 2, y, x + letterSize, y, x + letterSize / 2, y + letterSize / 2);
}

function Q(x, y) {
  rect(x + letterSize / 2, y + letterSize / 2, letterSize / 2, letterSize / 2);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, HALF_PI, 0, PIE);
}

function R(x, y) {
  rect(x, y, letterSize / 2, letterSize);
  triangle(x + letterSize / 2, y + letterSize / 2, x + letterSize / 2, y + letterSize, x + letterSize, y + letterSize);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, PI + HALF_PI, 0, PIE);
}

function S(x, y) {
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, PI, PI + HALF_PI, PIE);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, 0, HALF_PI, PIE);
}

function T(x, y) {
  rect(x, y, letterSize, letterSize / 2);
  rect(x + letterSize / 4, y + letterSize / 2, letterSize / 2, letterSize / 2);
}

function U(x, y) {
  triangle(x, y, x, y + letterSize / 2, x + letterSize / 2, y + letterSize / 2);
  triangle(x + letterSize / 2, y + letterSize / 2, x + letterSize, y, x + letterSize, y + letterSize / 2);
  arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, 0, PI, CHORD);
}

function V(x, y) {
  triangle(x, y, x + letterSize, y, x + letterSize / 2, y + letterSize);
}

function W(x, y) {
  rect(x, y, letterSize, letterSize / 2);
  triangle(x, y + letterSize / 2, x, y + letterSize, x + letterSize / 2, y + letterSize / 2);
  triangle(x + letterSize / 2, y + letterSize / 2, x + letterSize, y + letterSize / 2, x + letterSize, y + + letterSize);
}

function X(x, y) {
  triangle(x, y, x + letterSize / 2, y + letterSize / 2, x, y + letterSize);
  triangle(x + letterSize / 2, y + letterSize / 2, x + letterSize, y, x + letterSize, y + letterSize);
}

function Y(x, y) {
  triangle(x, y, x + letterSize, y, x + letterSize / 2, y + letterSize / 2);
  rect(x + letterSize / 4, y + letterSize / 2, letterSize / 2, letterSize / 2);
  //   triangle(x + letterSize, y, x, y + letterSize, x + letterSize, y + + letterSize);
}

function Z(x, y) {
  rect(x, y, letterSize, letterSize / 2);
  triangle(x, y + letterSize, x + letterSize, y + + letterSize / 2, x + letterSize, y + letterSize);
}