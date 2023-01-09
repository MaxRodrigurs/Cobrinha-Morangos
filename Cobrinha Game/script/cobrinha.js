import {getInputDirecao} from './movimentoCobrinha'

export const COBRA_SPEED = 4

const cobrinhaBody = [
    { x: 11, y: 11 }
]

let newSegments = 0

export function update(){
    addSegments()
     
    const inputDirecao = getInputDirecao()

    for (let i = cobrinhaBody.length - 2; i >= 0 ; i--){
        cobrinhaBody[i + 1] = { ...cobrinhaBody[i] }
    }

    cobrinhaBody[0].x += inputDirecao.x
    cobrinhaBody[0].y += inputDirecao.y
}

export function draw(gameBoard){
    cobrinhaBody.forEach(segment => {
        const cobrinhaElement = document.createElement("div")
        cobrinhaElement.style.gridColumnStart = segment.x
        cobrinhaElement.style.gridRowStart = segment.y
        cobrinhaElement.classList.add('Cobrinha')
        gameBoard.appendChild(cobrinhaElement)
    })
}

export function ExpandirCobra(amount){
    newSegments += amount
}

export function addSegments(){
    for (let i = 0; i < newSegments; i++) {
        cobrinhaBody.push({ ...cobrinhaBody[cobrinhaBody.length - 1] })

    }

    newSegments = 0
}

export function naCobrinha(position, { ignorarCabeca = false } = {}){
    return cobrinhaBody.some((segment, index) => {
        if (ignorarCabeca && index == 0) return 
        return position.x == segment.x && position.y == segment.y
    })
}

export function getCabeca(){
    return cobrinhaBody[0]
}

export function CobraCauda(){
    return naCobrinha(getCabeca(), {
        ignorarCabeca: true
    })
}