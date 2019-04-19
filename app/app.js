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

console.log("js loaded")

let get = document.querySelector.bind(document);
let canvas = get("#myCanvas");
let ctx = canvas.getContext('2d');

canvas.width = 500
canvas.height = 500

ctx.lineWidth = 1
ctx.strokeStyle = '#00CC99'

export default App;

