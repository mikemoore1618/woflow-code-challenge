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
// function to draw rectangle
function draw() {
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
    // draw rectangle starting at point x,y with width = w and height = h
    ctx.strokeRect(x, y, w, h);
  }
  //  tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint
  requestAnimationFrame(draw);
}


export default App;

