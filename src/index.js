import p5 from 'p5';

const root = document.getElementById('container');

const main = (p5) => {
    let x = 100;
    let y = 100;
  
    p5.setup = () => {
      p5.createCanvas(800, 400);
    };
  
    p5.draw = () => {
      p5.background(0);
      p5.fill(255);
      p5.rect(x, y, 50, 50);
    };
}

new p5(main, root);
