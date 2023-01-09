const GRID_SIZE = 21

export function PosicaoRandom(){
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
    }
}

export function ForaGrid(position){
    return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE
}