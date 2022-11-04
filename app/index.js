import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener('hashchange', App)
window.onorientationchange = event => {
    console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
  };