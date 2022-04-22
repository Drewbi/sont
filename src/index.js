import p5 from 'p5'
import { players, makeTurn, renderGame } from './game';
import { updateArenaSize, p2mcoords, getArenaSize } from './util/map';
const root = document.getElementById('root');

const main = (p) => {
  window.p = p
  p.angleMode(p.DEGREES)
  // p.frameRate(10);
  
  
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    updateArenaSize()
    setInterval(() => makeTurn(), 2000)
  };

  p.draw = () => {
    renderGame()
  };

  p.mouseClicked = () => {
    players[0].setInput(...p2mcoords(p.mouseX, p.mouseY))
  }

  p.windowResized = () => {
    updateArenaSize()
  }
}

new p5(main, root);
