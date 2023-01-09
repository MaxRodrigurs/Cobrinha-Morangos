import { update as updateCobrinha, draw as drawCobrinha, COBRA_SPEED, getCabeca, cobraCauda} from './cobrinha.js'
import { update as updatemorangos, draw as drawMorangos } from './morangos.js'
import { ForaGrid } from './grid.js'

const gameBoard = document.getElementById("game-board")

let lastRenderTime=0
let gameOver = false

requestAnimationFrame(main)

function main(currentTime){
  if (gameOver){
    if (confirm("Você perdeu!")){
      location ='/'
    }
    return
  }

  requestAnimationFrame(main)

  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondSinceLastRender < 1 / COBRA_SPEED) return
 
  lastRenderTime = currentTime

  update()
  draw()
}

function update(){
  updateCobrinha()
  updatemorangos()
  Morte()
}

function draw(){
  gameBoard.innerHTML = ""
  drawCobrinha(gameBoard)
  drawMorangos(gameBoard)
}

function Morte(){
  gameOver = ForaGrid(getCabeca()) || cobraCauda()
}