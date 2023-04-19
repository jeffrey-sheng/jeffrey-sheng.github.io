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

// window.decomp = decomp;

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
    w: 800,
    h: 300,
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
        }
    },
    numRect: 30,
    numCircle: 30
};

let backgroundImage;

let SEMI_CIRCLE_VERTICES;

let select = function (root, selector) {
    return Array.prototype.slice.call(root.querySelectorAll(selector));
};

async function loadSvg(url) {
    const response = await fetch(url);
    const raw = await response.text();
    return (new window.DOMParser()).parseFromString(raw, 'image/svg+xml');
};

// loadSvg("/public/semi-circle.svg").then(function (root) {

//     var vertexSets = select(root, 'path')
//         .map(function (path) { return Vertices.scale(Svg.pathToVertices(path), 0.4, 0.4); });
//     return vertexSets;
// });

// console.log(SEMI_CIRCLE_VERTICES);
// const SEMI_CIRCLE_VERTICES = select(loadSvg("/public/semi-circle.svg"), 'path').map(path => Svg.pathToVertices(path));
// getSemiCircleVertices();


function computeArea(vertices) {
    let area = 0;
    for (let i = 0; i < vertices.length - 1; i++) {
        let v = vertices[i];
        let vn = vertices[i + 1];
        area += (v.x * vn.y - vn.x * v.y) / 2;
    }
    return area;
};

function computeCenter(vertices) {
    let area = computeArea(vertices);
    let cx = 0,
        cy = 0;
    for (let i = 0; i < vertices.length - 1; i++) {
        let v = vertices[i];
        let vn = vertices[i + 1];
        cx += (v.x + vn.x) * (v.x * vn.y - vn.x * v.y) / (6 * area);
        cy += (v.y + vn.y) * (v.x * vn.y - vn.x * v.y) / (6 * area);
    }

    return {
        x: cx,
        y: cy
    };
}

function createSvgBody(path_to_svg) {
    loadSvg(path_to_svg).then(root => {
        let vertexSets = select(root, 'path')
            .map(path => Svg.pathToVertices(path));
        new SvgBody(200, 200, vertexSets[0]);
    });
}

let bodies = [];

class SvgBody {
    constructor(x, y, vertices, options = {}) {
        this.options = { ...options, ...defaultBodyOptions };
        this.vertices = vertices;
        this.center = computeCenter(this.vertices);
        this.body = Bodies.fromVertices(x, y, this.vertices, this.options);
        Composite.add(world, this.body);
        bodies.push(this);
    }

    show() {
        let position = this.body.position;
        let angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        translate(-this.center.x, -this.center.y);
        beginShape();
        this.vertices.forEach(v => {
            vertex(v.x, v.y);
            // console.log(v);
        });
        endShape(CLOSE);
        pop();
    }
}

class SemiCircleBody {
    constructor(x, y, d, options = {}) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.verticesOfUnitSemiCicle = SEMI_CIRCLE_VERTICES;
        this.color = getRandomColorFromColorPalette();
        this.options = { ...options, ...defaultBodyOptions };
        this.body = Bodies.fromVertices(x, y, this.verticesOfUnitSemiCicle, this.options);
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
        beginShape();
        this.verticesOfUnitSemiCicle.forEach(v => {
            vertex(v.x, v.y);
        });
        endShape(CLOSE);
        pop();
    };
}

class RectangleImageBody {
    constructor(x, y, w, h, imagePath, options = {}) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage(imagePath);
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


// function createRandomSemiCircle() {
//     new SemiCircleBody(
//         getRandomInteger(BORDER_WIDTH * 2, windowWidth - BORDER_WIDTH * 2),
//         getRandomInteger(BORDER_WIDTH * 2, windowHeight - BORDER_WIDTH * 2),
//         getRandomInteger(30, 50)
//     );
// }

// let walls = Composite.create();
// let topWall = new RectangleBody(400, 25, 800, 50, { isStatic: true });

function preload() {
    // Montserrat = loadFont("https://github.com/JulietaUla/Montserrat/blob/master/fonts/otf/Montserrat-Regular.otf?raw=true");
    backgroundImage = loadImage('public/background.avif');
}

function setup() {
    noStroke();
    loadSvg("/public/semi-circle.svg")
        .then(root => {
            SEMI_CIRCLE_VERTICES = select(root, 'path')
                .map(path => Svg.pathToVertices(path));
            console.log(SEMI_CIRCLE_VERTICES);
        });
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

    // Create "Title" body
    new RectangleImageBody(windowWidth / 2, windowHeight / 2, TITLE_DIMENSION.w, TITLE_DIMENSION.h, "/public/geometric-playground.png", { mass: 20 });

    // Create random circle bodies
    for (i = 0; i <= SHAPE_PROPERTIES.numCircle; i++) {
        createRandomCircle();
    }

    // Create random rectangle bodies
    for (i = 0; i <= SHAPE_PROPERTIES.numRect; i++) {
        createRandomRectangle();
    }

    // Create random semi-circle bodies;
    // for (i = 0; i <= 50; i++) {
    //     createRandomSemiCircle();
    // }

    let startButton = createButton("START");
    // startButton.style("background-image", "url('public/play-button.jpg')");
    startButton.style("font-size", "30px");
    startButton.style("font-family", "'Montserrat', sans-serif");
    startButton.style("letter-spacing", "1px");
    startButton.style("padding", "20px 40px");
    startButton.style("border-radius", "50px");

    // startButton.style("border", "none");
    startButton.position(windowWidth - START_BUTTON_DIMENSION.margin.x - 180, START_BUTTON_DIMENSION.margin.y);
    startButton.mouseReleased(() => location.href = "./typewriter.html");

    Runner.run(runner, engine);
}

function draw() {
    // console.log(bodies);

    // Create Start button

    // Automatically create random shapes
    // if (getRandomInteger(1, 60) <= 5) {
    //     createRandomCircle();
    //     createRandomRectangle();
    // }

    bodies.forEach(body => body.show());

    background(backgroundImage);
    // console.log(svgBody);
    if (mouseIsPressed) {
        if (getRandomInteger(1, 5) == 1) {
            createRandomCirleGivenPosition(mouseX - 20, mouseY - 20);
            createRandomRectangleGivenPosition(mouseX + 20, mouseY - 20);
        }
    }
}

function mouseMoved() {
    // noStroke();
    // new CircleBody(mouseX, mouseY, 30);
    // new RectangleBody(mouseX, mouseY, 30, 30);
}

function mouseDragged() { }
