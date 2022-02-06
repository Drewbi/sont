import p5 from 'p5';

const root = document.body;

const main = (p) => {
  const arenaPadding = 50
  let arenaSize = p.min(p.windowWidth - arenaPadding * 2, p.windowHeight - arenaPadding * 2)
  
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(255);
    p.stroke(255, 200, 200)
    p.strokeWeight(10)
    p.rect(arenaPadding, arenaPadding, arenaSize, arenaSize);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    arenaSize = p.min(p.windowWidth - arenaPadding * 2, p.windowHeight - arenaPadding * 2)

  }
}

new p5(main, root);
