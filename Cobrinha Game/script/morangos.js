import { naCobrinha, ExpandirCobra } from "./cobrinha.js"
import { PosicaoRandom } from "./grid.js"


let morango = MorangoRandom()

const CRESCIMENTO = 1

export function update(){
    if (naCobrinha(morango)){
        ExpandirCobra(CRESCIMENTO)
        morango= MorangoRandom()
    }
}

export function draw(gameBoard){
    const morangoElements = document.createElement('div')
        morangoElements.style.gridColumnStart = morango.x
        morangoElements.style.gridRowStart = morango.y
        morangoElements.classList.add('cobrinha')
        gameBoard.appendChild(morangoElements)
}

function MorangoRandom(){
    let novoMorango

    while (novoMorango == null || naCobrinha(novoMorango)) {
        novoMorango = PosicaoRandom()
    }
    return novoMorango
}