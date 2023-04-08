const COLOR_PALETTE = {
  Red: "#FF4700",
  Pink: "#FF80CE",
  Yellow: "#FFC422",
  Green: "#17AA00",
  Blue: "#005DA8",
  Purple: "#7D00D4",
};

function getRandomColorFromColorPalette() {
  var keys = Object.keys(COLOR_PALETTE);
  return COLOR_PALETTE[keys[keys.length * Math.random() << 0]];
};

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

