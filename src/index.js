import p5 from 'p5';
import { drawCharacter } from './util/player';

const root = document.getElementById('container');

const main = (p) => {
    p.angleMode(p.DEGREES)
    let x = 100;
    let y = 100;
  
    p.setup = () => {
      p.createCanvas(800, 400);
    };
  
    p.draw = () => {
      p.background(0);
      p.fill(255);
      drawCharacter(p, 200, 200, 180)
    };
}

new p5(main, root);
