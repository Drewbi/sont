import { drawMap } from "./util/map";
import { Player } from "./util/player";
import { drawClock } from './util/clock';
import { randomInput } from './util/bot'

const players = [
  new Player(200, 200, 0, 0.1, 100),
  new Player(200, 200, 0, 0.1, 30),
  new Player(200, 200, 0, 0.1, 30)
]

const makeTurn = () => {
  const [ _, ...bots ] = players
  console.log(bots)
  bots.forEach(bot => bot.setInput(randomInput(), randomInput()))
  players.forEach(player => player.setDestination())
}

const renderGame = () => {
  p.background(255);
  drawMap()
  players.forEach(player => player.move()) 
  players.forEach(player => player.drawCharacter()) 
  drawClock()
}

export { players, makeTurn, renderGame }

