import { Vector } from "p5"
import { p5 } from './index'
import { drawMap } from "./util/map";
import { Player } from "./util/player";
import { drawClock } from './util/clock';
import { randomInput } from './util/bot'

const players: Player[] = []

const createPlayers = () => {
  players.push(
    new Player(new Vector(randomInput(), randomInput()), p5.random(360), 0.1, 100),
    new Player(new Vector(randomInput(), randomInput()), p5.random(360), 0.1, 30),
    new Player(new Vector(randomInput(), randomInput()), p5.random(360), 0.1, 30)
  )
}

export const tickRate = 2000

const makeTurn = () => {
  const [ _, ...bots ] = players
  bots.forEach(bot => {
    bot.input = new Vector(randomInput(),  randomInput())
  })
  players.forEach(player => {
    player.setInput()
    player.setDestination()
  })
}

const renderGame = () => {
  p5.background(255);
  drawMap()
  players.forEach(player => player.move()) 
  players.forEach(player => player.drawCharacter()) 
  drawClock()
}

export { players, createPlayers, makeTurn, renderGame }

