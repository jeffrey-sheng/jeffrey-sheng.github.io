function coloredTriangle(x1, y1, x2, y2, x3, y3, color) {
  push();
  fill(color);
  triangle(x1, y1, x2, y2, x3, y3);
  pop();
}

function coloredRectangle(x, y, w, h, color) {
  push();
  fill(color);
  rect(x, y, w, h);
  pop();
}

function coloredCircle(x, y, d, color) {
  push();
  fill(color);
  circle(x, y, d);
  pop();
}

function coloredArc(x, y, w, h, start, stop, mode, color) {
  push();
  fill(color);
  arc(x, y, w, h, start, stop, mode);
  pop();
};

class letterWithOneShape {
  constructor() {
    this.color = getRandomColorFromColorPalette();
  }
}

class letterWithTwoShapes {
  constructor() {
    this.color1 = getRandomColorFromColorPalette();
    this.color2 = getRandomColorFromColorPalette();
  }
}

class letterWithThreeShapes {
  constructor() {
    this.color1 = getRandomColorFromColorPalette();
    this.color2 = getRandomColorFromColorPalette();
    this.color3 = getRandomColorFromColorPalette();
  }
}

class letterWithFourShapes {
  constructor() {
    this.color1 = getRandomColorFromColorPalette();
    this.color2 = getRandomColorFromColorPalette();
    this.color3 = getRandomColorFromColorPalette();
    this.color4 = getRandomColorFromColorPalette();
  }
}

class A extends letterWithOneShape {
  constructor() {
    super();
  }

  show(x, y) {
    coloredTriangle(x + letterSize / 2, y, x, y + letterSize, x + letterSize, y + letterSize, this.color);
  }
};

class B extends letterWithThreeShapes {
  constructor() {
    super();
  }

  show(x, y) {
    coloredRectangle(x, y, letterSize / 2, letterSize, this.color1);
    coloredCircle(x + letterSize / 2 + letterSize / 4, y + letterSize / 4, letterSize / 2, this.color2);
    coloredCircle(x + letterSize / 2 + letterSize / 4, y + letterSize / 2 + letterSize / 4, letterSize / 2, this.color3);
  }
};

class C extends letterWithThreeShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredArc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, HALF_PI, PI + HALF_PI, CHORD, this.color1);
    coloredTriangle(x + letterSize / 2, y, x + letterSize, y, x + letterSize * 3 / 4, y + letterSize / 2, this.color2);
    coloredTriangle(x + letterSize / 2, y + letterSize, x + letterSize * 3 / 4, y + letterSize / 2, x + letterSize, y + letterSize, this.color3);
  }
}

class D extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y, letterSize / 2, letterSize, this.color1);
    coloredArc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, PI + HALF_PI, HALF_PI, CHORD, this.color2);
  }
}

class E extends letterWithThreeShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y, letterSize, letterSize / 3, this.color1);
    coloredRectangle(x, y + letterSize / 3, letterSize, letterSize / 3, this.color2);
    coloredRectangle(x, y + letterSize / 3 * 2, letterSize, letterSize / 3, this.color3);
  }
}

class F extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredTriangle(x, y, x + letterSize, y, x, y + letterSize / 2, this.color1);
    coloredTriangle(x, y + letterSize / 2, x + letterSize, y + letterSize / 2, x, y + letterSize, this.color2);
  }
}

class G extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredArc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, HALF_PI, PI + HALF_PI, CHORD, this.color1);
    coloredArc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, 0, HALF_PI, PIE, this.color2);
  }
}

class H extends letterWithFourShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y, letterSize / 2, letterSize / 2, this.color1);
    coloredRectangle(x + letterSize / 2, y, letterSize / 2, letterSize / 2, this.color2);
    coloredRectangle(x, y + letterSize / 2, letterSize / 2, letterSize / 2, this.color3);
    coloredRectangle(x + letterSize / 2, y + letterSize / 2, letterSize / 2, letterSize / 2, this.color4);
  }
}

class I extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y, letterSize / 2, letterSize, this.color1);
    coloredRectangle(x + letterSize / 2, y, letterSize / 2, letterSize, this.color2);
  }
}

class J extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x + letterSize / 2, y, letterSize / 2, letterSize / 2, this.color1);
    coloredArc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, 0, PI, CHORD, this.color2);
  }
}

class K extends letterWithThreeShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y, letterSize / 2, letterSize, this.color1);
    coloredTriangle(x + letterSize / 2, y, x + letterSize, y, x + letterSize / 2, y + letterSize / 2, this.color2);
    coloredTriangle(x + letterSize / 2, y + letterSize / 2, x + letterSize / 2, y + letterSize, x + letterSize, y + letterSize, this.color3);
  }
}

class L extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y, letterSize / 2, letterSize, this.color1);
    coloredTriangle(x + letterSize / 2, y + letterSize, x + letterSize, y + letterSize / 2, x + letterSize, y + letterSize, this.color2);
  }
}

class M extends letterWithThreeShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y + letterSize / 2, letterSize, letterSize / 2, this.color1);
    coloredTriangle(x, y, x, y + letterSize / 2, x + letterSize / 2, y + letterSize / 2, this.color2);
    coloredTriangle(x + letterSize / 2, y + letterSize / 2, x + letterSize, y, x + letterSize, y + letterSize / 2, this.color3);
  }
}

class N extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredTriangle(x, y, x, y + letterSize, x + letterSize, y + letterSize, this.color1);
    coloredTriangle(x, y, x + letterSize, y, x + letterSize, y + letterSize, this.color2);
  }
}

class O extends letterWithOneShape {
  constructor() {
    super();
  }
  show(x, y) {
    coloredCircle(x + letterSize / 2, y + letterSize / 2, letterSize, this.color);
  }
}

class P extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y, letterSize / 2, letterSize, this.color1);
    coloredTriangle(x + letterSize / 2, y, x + letterSize, y, x + letterSize / 2, y + letterSize / 2, this.color2);
  }
}

class Q extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x + letterSize / 2, y + letterSize / 2, letterSize / 2, letterSize / 2, this.color1);
    coloredArc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, HALF_PI, 0, PIE, this.color2);
  }
}

class R extends letterWithThreeShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y, letterSize / 2, letterSize, this.color1);
    coloredTriangle(x + letterSize / 2, y + letterSize / 2, x + letterSize / 2, y + letterSize, x + letterSize, y + letterSize, this.color2);
    coloredArc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, PI + HALF_PI, 0, PIE, this.color3);
  }
}

class S extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredArc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, PI, PI + HALF_PI, PIE, this.color1);
    coloredArc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, 0, HALF_PI, PIE, this.color2);
  }
}

class T extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y, letterSize, letterSize / 2, this.color1);
    coloredRectangle(x + letterSize / 4, y + letterSize / 2, letterSize / 2, letterSize / 2, this.color2);
  }
}

class U extends letterWithThreeShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredTriangle(x, y, x, y + letterSize / 2, x + letterSize / 2, y + letterSize / 2, this.color1);
    coloredTriangle(x + letterSize / 2, y + letterSize / 2, x + letterSize, y, x + letterSize, y + letterSize / 2, this.color2);
    coloredArc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, 0, PI, CHORD, this.color3);
  }
}

class V extends letterWithOneShape {
  constructor() {
    super();
  }
  show(x, y) {
    coloredTriangle(x, y, x + letterSize, y, x + letterSize / 2, y + letterSize, this.color);
  }
}

class W extends letterWithThreeShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y, letterSize, letterSize / 2, this.color1);
    coloredTriangle(x, y + letterSize / 2, x, y + letterSize, x + letterSize / 2, y + letterSize / 2, this.color2);
    coloredTriangle(x + letterSize / 2, y + letterSize / 2, x + letterSize, y + letterSize / 2, x + letterSize, y + letterSize, this.color3);
  }
}

class X extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredTriangle(x, y, x + letterSize / 2, y + letterSize / 2, x, y + letterSize, this.color1);
    coloredTriangle(x + letterSize / 2, y + letterSize / 2, x + letterSize, y, x + letterSize, y + letterSize, this.color2);
  }
}

class Y extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredTriangle(x, y, x + letterSize, y, x + letterSize / 2, y + letterSize / 2, this.color1);
    coloredRectangle(x + letterSize / 4, y + letterSize / 2, letterSize / 2, letterSize / 2, this.color2);
  }
}

class Z extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y, letterSize, letterSize / 2, this.color1);
    coloredTriangle(x, y + letterSize, x + letterSize, y + + letterSize / 2, x + letterSize, y + letterSize, this.color2);
  }
}

class OpeningBracket extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredArc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, HALF_PI, PI + HALF_PI, CHORD, this.color1);
    coloredArc(x + letterSize, y + letterSize / 2, letterSize, letterSize, HALF_PI, PI + HALF_PI, CHORD, this.color2);
  }
}

class ClosingBracket extends letterWithTwoShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredTriangle(x, y + letterSize / 2, x + letterSize / 2, y, x + letterSize / 2, y + letterSize, this.color1);
    coloredTriangle(x + letterSize / 2, y + letterSize / 2, x + letterSize, y, x + letterSize, y + letterSize, this.color2);
  }
}

class Period extends O {
  constructor() {
    super();
  }
};

class Quote extends letterWithOneShape {
  constructor() {
    super();
  }
  show(x, y) {
    coloredArc(x + letterSize, y + letterSize, letterSize * 2, letterSize * 2, PI, PI + HALF_PI, PIE, this.color);
  }
}

class Slash extends letterWithFourShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredArc(x, y, letterSize, letterSize, 0, HALF_PI, PIE, this.color1);
    coloredArc(x + letterSize, y, letterSize, letterSize, HALF_PI, PI, PIE, this.color2);
    coloredArc(x, y + letterSize, letterSize, letterSize, PI + HALF_PI, PI * 2, PIE, this.color3);
    coloredArc(x + letterSize, y + letterSize, letterSize, letterSize, PI, PI + HALF_PI, PIE, this.color4);
  }
}

class Comma extends letterWithOneShape {
  constructor() {
    super();
  }
  show(x, y) {
    coloredArc(x, y, letterSize * 2, letterSize * 2, 0, HALF_PI, PIE, this.color);
  }
}

class SemiColon extends letterWithFourShapes {
  constructor() {
    super();
  }
  show(x, y) {
    coloredCircle(x + letterSize / 4, y + letterSize / 4, letterSize / 2, this.color1);
    coloredCircle(x + letterSize / 4 * 3, y + letterSize / 4, letterSize / 2, this.color2);
    coloredCircle(x + letterSize / 4, y + letterSize / 4 * 3, letterSize / 2, this.color3);
    coloredCircle(x + letterSize / 4 * 3, y + letterSize / 4 * 3, letterSize / 2, this.color4);
  }
}

class BackSlash extends letterWithOneShape {
  constructor() {
    super();
  }
  show(x, y) {
    coloredRectangle(x, y, letterSize, letterSize, this.color);
  }
}