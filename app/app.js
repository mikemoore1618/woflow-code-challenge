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
}


export default App;

