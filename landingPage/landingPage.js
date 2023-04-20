let Engine = Matter.Engine,
    // Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Vertices = Matter.Vertices,
    Common = Matter.Common,
    Svg = Matter.Svg;


Common.setDecomp(decomp);

let engine = Engine.create(),
    world = engine.world;

let runner = Runner.create();

let mouse, mouseConstraint;

let Canvas;

let vertexSets;
let svgBody;

let defaultBodyOptions = {
    restitution: 0.1,
    friction: 0.1,
};

const BORDER_WIDTH = 100;
const BORDER_DIMENSION = {

};

const START_BUTTON_DIMENSION = {
    margin: {
        x: 50,
        y: 50
    },
};
const TITLE_DIMENSION = {
    w: 540 * 2.5,
    h: 72 * 2.5,
    fontSize: 16
};

const SHAPE_PROPERTIES = {
    dimension: {
        rect: {
            min_w: 50,
            max_w: 75
        },
        circle: {
            min_d: 50,
            max_d: 75
        },
        triangle: {
            min_d: 50,
            max_d: 75
        }
    },
    numRect: 50,
    numCircle: 50,
    numTriangle: 50,
};

let SHAPE_IMAGE, ALPHABET_IMAGE, MontserratFont;

let LANDING_PAGE_INSTRUCTION = "Try clicking anywhere";

let showInstruction = true;

let bodies = [];

class RectangleImageBody {
    constructor(x, y, image, options = {}) {
        this.x = x;
        this.y = y;
        this.w = image.width * 0.8;
        this.h = image.height * 0.8;
        this.image = image;
        this.options = { ...options, ...defaultBodyOptions };
        this.body = Bodies.rectangle(x, y, this.w, this.h, this.options);
        Composite.add(world, this.body);
        bodies.push(this);
    }

    show() {
        let position = this.body.position;
        let angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    };
}

class RectangleBody {
    constructor(x, y, w, h, options = {}) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = getRandomColorFromColorPalette();
        this.options = { ...options, ...defaultBodyOptions };
        this.body = Bodies.rectangle(x, y, w, h, this.options);
        Composite.add(world, this.body);
        bodies.push(this);
    }

    show() {
        let position = this.body.position;
        let angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        fill(this.color);
        rect(0, 0, this.w, this.h);
        pop();
    };
}

class CircleBody {
    constructor(x, y, d, options = {}) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.color = getRandomColorFromColorPalette();
        this.options = { ...options, ...defaultBodyOptions };
        this.body = Bodies.circle(x, y, d / 2, this.options);
        Composite.add(world, this.body);
        bodies.push(this);
    }

    show() {
        let position = this.body.position;
        let angle = this.body.angle;
        push();
        fill(this.color);
        translate(position.x, position.y);
        rotate(angle);
        circle(0, 0, this.d);
        pop();
    };
}

class TriangleBody {
    constructor(x, y, r, options = {}) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = getRandomColorFromColorPalette();
        this.options = { ...options, ...defaultBodyOptions };
        this.body = Bodies.polygon(x, y, 3, this.r, this.options);
        Composite.add(world, this.body);
        bodies.push(this);
    }

    show() {
        let position = this.body.position;
        let angle = this.body.angle;
        push();
        fill(this.color);
        translate(position.x, position.y);
        rotate(angle);
        triangle(-this.r, 0, this.r / 2, this.r / 2 * Math.sqrt(3), this.r / 2, -this.r / 2 * Math.sqrt(3));
        pop();
    }
}

function createRandomCircle() {
    new CircleBody(
        getRandomInteger(0, windowWidth),
        getRandomInteger(0, windowHeight),
        getRandomInteger(SHAPE_PROPERTIES.dimension.circle.min_d, SHAPE_PROPERTIES.dimension.circle.max_d)
    );
}

function createRandomCirleGivenPosition(x, y) {
    new CircleBody(
        x, y,
        getRandomInteger(SHAPE_PROPERTIES.dimension.circle.min_d, SHAPE_PROPERTIES.dimension.circle.max_d)
    );
}

function createRandomRectangle() {
    w = getRandomInteger(SHAPE_PROPERTIES.dimension.rect.min_w, SHAPE_PROPERTIES.dimension.rect.max_w);
    new RectangleBody(
        getRandomInteger(0, windowWidth),
        getRandomInteger(0, windowHeight),
        w,
        w
    );
}

function createRandomRectangleGivenPosition(x, y) {
    w = getRandomInteger(SHAPE_PROPERTIES.dimension.rect.min_w, SHAPE_PROPERTIES.dimension.rect.max_w);
    new RectangleBody(x, y, w, w);
}

function createRandomTriangle() {
    new TriangleBody(
        getRandomInteger(0, windowWidth),
        getRandomInteger(0, windowWidth),
        getRandomInteger(SHAPE_PROPERTIES.dimension.triangle.min_d, SHAPE_PROPERTIES.dimension.triangle.max_d),
    );
}

function createRandomTriangleGivenPosition(x, y) {
    new TriangleBody(
        x, y,
        getRandomInteger(SHAPE_PROPERTIES.dimension.triangle.min_d, SHAPE_PROPERTIES.dimension.triangle.max_d),
    );
}

function preload() {
    MontserratFont = loadFont("public/Montserrat-Regular.otf");
    SHAPE_IMAGE = loadImage("public/shape.png", img => console.log("loaded"));
    ALPHABET_IMAGE = loadImage("public/alphabet.png", img => console.log("loaded"));
}

function setup() {
    noStroke();
    rectMode(CENTER);
    imageMode(CENTER);
    Canvas = createCanvas(windowWidth, windowHeight);

    mouse = Mouse.create(Canvas.elt);
    mouse.pixelRatio = pixelDensity();
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });
    Composite.add(world, mouseConstraint);

    // Create Borders
    new RectangleBody(windowWidth / 2, -BORDER_WIDTH / 2, windowWidth, BORDER_WIDTH, { isStatic: true });
    new RectangleBody(windowWidth / 2, windowHeight + BORDER_WIDTH / 2, windowWidth, BORDER_WIDTH, { isStatic: true });
    new RectangleBody(windowWidth + BORDER_WIDTH / 2, windowHeight / 2, BORDER_WIDTH, windowHeight, { isStatic: true });
    new RectangleBody(-BORDER_WIDTH / 2, windowHeight / 2, BORDER_WIDTH, windowHeight, { isStatic: true });

    // Create "Shape"
    new RectangleImageBody(windowWidth / 2, windowHeight / 3, SHAPE_IMAGE, { mass: 100 });
    // Create "Alphabet"
    new RectangleImageBody(windowWidth / 2, windowHeight / 3 * 2, ALPHABET_IMAGE, { mass: 100 });

    // Create random circle bodies
    for (i = 0; i <= SHAPE_PROPERTIES.numCircle; i++) {
        createRandomCircle();
    }

    // Create random rectangle bodies
    for (i = 0; i <= SHAPE_PROPERTIES.numRect; i++) {
        createRandomRectangle();
    }

    // Create random triangle bodies
    for (i = 0; i <= SHAPE_PROPERTIES.numTriangle; i++) {
        createRandomTriangle();
    }

    let startButton = createButton("");
    startButton.addClass("icon-right-arrow");

    startButton.position(windowWidth - START_BUTTON_DIMENSION.margin.x - 100, START_BUTTON_DIMENSION.margin.y);
    startButton.mouseReleased(() => location.href = "./typewriter.html");

    Runner.run(runner, engine);
}

function draw() {
    background("black");

    if (showInstruction) {
        push();
        rectMode(CORNER);
        textFont(MontserratFont);
        textSize(40);
        fill("white");
        textLeading(70);
        text(LANDING_PAGE_INSTRUCTION, START_BUTTON_DIMENSION.margin.x, START_BUTTON_DIMENSION.margin.y * 2.5, windowWidth * 0.3, windowHeight / 2);
        pop();
    }

    bodies.forEach(body => body.show());

    if (mouseIsPressed) {
        showInstruction = false;
        createRandomCirleGivenPosition(mouseX, mouseY + 100);
        createRandomRectangleGivenPosition(mouseX + 20, mouseY - 20);
        createRandomTriangleGivenPosition(mouseX - 20, mouseY - 20);
    }
}

function mouseMoved() { }

function mouseDragged() { }
