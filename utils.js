const COLOR_PALETTE = {
  Red: "#FF4700",
  Pink: "#FF80CE",
  Yellow: "#FFC422",
  Green: "#17AA00",
  Blue: "#005DA8",
  Purple: "#7D00D4",
};

const NAV_BUTTON_DIMENSION = {
  margin: {
    x: 50,
    y: 50
  },
};

const FOOTER_CONTENT = "Copyright © 2023 Annie Yu";

function getRandomColorFromColorPalette() {
  var keys = Object.keys(COLOR_PALETTE);
  return COLOR_PALETTE[keys[keys.length * Math.random() << 0]];
};

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showFooter(font) {
  push();
  rectMode(CORNER);
  textFont(font);
  textSize(16);
  fill(200);
  textAlign(CENTER);
  text(FOOTER_CONTENT, 0, windowHeight - NAV_BUTTON_DIMENSION.margin.y, windowWidth, windowHeight);
  pop();
}

