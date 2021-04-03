// YOU WILL NEED TO HAVE p5js
// Ported from processing to p5 from The Coding Train
const CANVAS_WIDTH = parseInt(innerWidth);
const CANVAS_HEIGHT = parseInt(innerHeight / 2);

const SKETCH_WIDTH = CANVAS_WIDTH + 1000;
const SKETCH_HEIGHT = CANVAS_HEIGHT + 800;

const SKETCH_SCALE = 20;
const SKETCH_COLS = Math.floor(SKETCH_WIDTH / SKETCH_SCALE)
const SKETCH_ROWS = Math.floor(SKETCH_HEIGHT / SKETCH_SCALE)

const TERRAIN_MAX = 100;
const TERRAIN_MIN = -200;

const TERRAIN_OFFSET_COUNT = 0.075;
const TERRAIN_SPEED = 0.075;

let terrainPoints = new Array(SKETCH_COLS);
for (let i = 0; i < terrainPoints.length; i++) {
    terrainPoints[i] = new Array(SKETCH_ROWS);
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL);
}

let terrainMovementOffset = 0;
function draw() {
    terrainMovementOffset -= TERRAIN_SPEED;
    let yOffset = terrainMovementOffset;
    for (let y = 0; y < SKETCH_ROWS; y++) {
        let xOffset = 0;
        for (let x = 0; x < SKETCH_COLS; x++) {
            terrainPoints[x][y] = map(noise(xOffset, yOffset), 0, 1, TERRAIN_MIN, TERRAIN_MAX);
            xOffset += TERRAIN_OFFSET_COUNT;
        }
        yOffset += TERRAIN_OFFSET_COUNT;
    }

    background('rgba(0,0,0,0)');
    stroke(0);
    noFill();
    rotateX(Math.PI / 2.5);
    translate(-SKETCH_WIDTH  / 2, -SKETCH_HEIGHT / 2);

    
    for (let y = 0; y < SKETCH_ROWS - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < SKETCH_COLS; x++) {
            vertex(x * SKETCH_SCALE, y * SKETCH_SCALE, terrainPoints[x][y]);
            vertex(x * SKETCH_SCALE, (y + 1) * SKETCH_SCALE, terrainPoints[x][y + 1]);
        }
        endShape();
    }
}
