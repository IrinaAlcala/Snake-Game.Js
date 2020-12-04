import { SNAKE_SPEED } from './snake.js'


let lastRenderTime = 0
// const SNAKE_SPEED = 2

function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    console.log('Render')
    lastRenderTime = currentTime
    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
updateSnake()
}

function draw() {
drawSnake(gameBoard)
}