let inputDirecao = { x: 0, y: 0 }
let lastInputDirecao = { x: 0, y: 0}

export function getInputDirecao(){
    lastInputDirecao = inputDirecao
    return inputDirecao
}

addEventListener('keydown', e => {
    switch (e.key){
        case "ArrowUp":
            if (lastInputDirecao.y != 0) break

            inputDirecao = { x: 0 , y: -1 }
            break
        case "ArrorDown":
            if (lastInputDirecao.y != 0) break
    
            inputDirecao = { x: 0 , y: 1 }
            break
        case "ArrowLeft":
            if (lastInputDirecao.x != 0) break

            inputDirecao = { x: -1 , y: 0 }
            break
        case "ArrowRight":
            if (lastInputDirecao.x != 0) break

            inputDirecao = { x: 1 , y: 0 }
            break
    }
})

