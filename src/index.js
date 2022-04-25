import p5 from 'p5'
import { players, makeTurn, renderGame, tickRate, createPlayers } from './game';
import { p2mcoords, updateArenaSize } from './util/map';
const root = document.getElementById('root');

const main = (p) => {
  window.p = p
  p.angleMode(p.DEGREES)
  // p.frameRate(10);
  
  
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    updateArenaSize()
    createPlayers()
    players[0].setIt(true)
    setInterval(() => makeTurn(), tickRate)
  };

  p.draw = () => {
    renderGame()
  };

  p.mouseClicked = () => {
    const [ mapX, mapY ] = p2mcoords(p.mouseX, p.mouseY)
    players[0].inputX = mapX
    players[0].inputY = mapY
  }

  p.windowResized = () => {
    updateArenaSize()
  }
}

new p5(main, root);
