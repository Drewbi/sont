import P5, { Vector } from 'p5'
import { players, makeTurn, renderGame, tickRate, createPlayers } from './game';
import { p2mcoords, updateArenaSize } from './util/map';
const root = document.getElementById('root');

const main = (p: P5) => {
  p.angleMode(p.DEGREES)  
  
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
    players[0].input = new Vector(...p2mcoords(p.mouseX, p.mouseY))
  }

  p.windowResized = () => {
    updateArenaSize()
  }
}

export const p5 = new P5(main, root);
