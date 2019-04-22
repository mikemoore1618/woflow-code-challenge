import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

///////////////////////////////////////////////////////////
console.log("js loaded")

let get = document.querySelector.bind(document);
// grab 'myCanvas' canvas element from index using jQuery
let canvas = get("#myCanvas");
// return 2 dimensional drawing context on the canvas
let ctx = canvas.getContext('2d');
// create empty array to hold coordinates for drawing
let drawArr = [];
console.log(ctx.strokeStyle)
// set height and width of canvas
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight
// function to draw rectangle
function draw() {
  // dashed lines
  ctx.setLineDash([5, 5]);
  // set stroke width and color
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#0000FF";
  // clear a rectangle within a given rectangle:
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  // create object inside drawArr
  for (let obj of drawArr) {
    let {
      x,
      y,
      w,
      h
    } = obj;
    // draw rectangle starting at point {x, y} with width = w and height = h
    ctx.strokeRect(x, y, w, h);
  }
  // tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint
  requestAnimationFrame(draw);
}
// mouse is not down on default
let mousedown = false;
// listen for mousedown click on the canvas
canvas.addEventListener('mousedown', function(e) {
  // when mouse is clicked down, set mousedown to true
  mousedown = true;
  // set cursor to none
  document.body.style.cursor = "url('https://i.imgur.com/MfSOCAV.png') 50 50, auto"
  // push current (x, y) page coordinates of mouse to drawArr
  drawArr.push({
    x: e.pageX,
    y: e.pageY,
    w: 0,
    h: 0
  });
  console.log(drawArr);
});
// listen for mouseup click on the canvas
canvas.addEventListener('mouseup', function() {
  // set mousedown back to false
  mousedown = false;
  // clear canvas
  drawArr  = []
  // set cursor back to default
  document.body.style.cursor = "default"
})
// listen for mouse moving on the canvas
canvas.addEventListener('mousemove', function(e) {
  //if the mouse is moved while the mouse is clicked down
  if (mousedown) {
    // set i equal to length of drawArr -1
    let i = drawArr.length -1;
    // set index position of drawArr equal to {x, y}
    let {
      x,
      y
    } = drawArr[i];
    // set width of rectangle to current coordinates of mouse minus the coordinates of mouse when first clicked
    drawArr[i].w = e.pageX - x;
    drawArr[i].h = e.pageY - y;
  }
});
// tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint
requestAnimationFrame(draw);

export default App;