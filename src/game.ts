import P5, { Vector } from "p5"
import { drawMap } from "./util/map";
import { Player } from "./util/player";
import { drawClock } from './util/clock';
import { randomInput } from './util/bot'

const players: Player[] = []

const createPlayers = (p: P5) => {
  players.push(
    new Player(new Vector(randomInput(p), randomInput(p)), p.random(360), 0.1, 100),
    new Player(new Vector(randomInput(p), randomInput(p)), p.random(360), 0.1, 30),
    new Player(new Vector(randomInput(p), randomInput(p)), p.random(360), 0.1, 30)
  )
}

export const tickRate = 2000

const makeTurn = (p: P5) => {
  const [ _, ...bots ] = players
  bots.forEach(bot => {
    bot.input = new Vector(randomInput(p),  randomInput(p))
  })
  players.forEach(player => {
    player.setInput(p)
    player.setDestination(p)
  })
}

const renderGame = (p: P5) => {
  p.background(255);
  drawMap(p)
  players.forEach(player => player.move(p)) 
  players.forEach(player => player.drawCharacter(p)) 
  drawClock(p)
}

export { players, createPlayers, makeTurn, renderGame }

