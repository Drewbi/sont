import { drawMap } from "./util/map";
import { Player } from "./util/player";
import { drawClock } from './util/clock';
import { randomInput } from './util/bot'

const players = []

const createPlayers = () => {
  players.push(
    new Player(randomInput(), randomInput(), p.random(360), 0.1, 100),
    new Player(randomInput(), randomInput(), p.random(360), 0.1, 30),
    new Player(randomInput(), randomInput(), p.random(360), 0.1, 30)
  )
}

export const tickRate = 2000

const makeTurn = () => {
  const [ _, ...bots ] = players
  bots.forEach(bot => {
    bot.inputX = randomInput()
    bot.inputY = randomInput()
  })
  players.forEach(player => {
    player.setInput()
    player.setDestination()
  })
}

const renderGame = () => {
  p.background(255);
  drawMap()
  players.forEach(player => player.move()) 
  players.forEach(player => player.drawCharacter()) 
  drawClock()
}

export { players, createPlayers, makeTurn, renderGame }

