let cities = [];
const totalCities = 14;
let recordDistance = Math.Infinity;
let bestEver = [];

function setup() {
  createCanvas(400, 300);
  for (let i = 0; i < totalCities; i++) {
    let v = createVector(random(width), random(height));
    cities[i] = v;
    bestEver = [...cities];
  }

  const d = calcDistance(cities);
  recordDistance = d;
}

function draw() {
  background(0);
  fill(255);
  for (let i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }

  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (let i = 0; i < cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();

  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i = 0; i < bestEver.length; i++) {
    vertex(bestEver[i].x, bestEver[i].y);
  }
  endShape();

  const i = floor(random(cities.length));
  const j = floor(random(cities.length));
  swap(cities, i, j);

  const d = calcDistance(cities);
  if (d < recordDistance) {
    recordDistance = d;
    bestEver = [...cities];
    console.log(recordDistance);
  }

  textAlign(LEFT, CENTER);
  textSize(10);
  strokeWeight(1);
  text(recordDistance, 0, 10);
}

function swap(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points) {
  let sum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}
