let next_block: any[];
let direction = 0
let directions = [[1, 0], [0, -1], [-1, 0], [0, 1]]
let snake = [[0, 0]]
let food = [randint(1, 4), randint(1, 4)]
while (true) {
    basic.clearScreen()
    led.plotBrightness(food[0], food[1], 255)
    for (let i = 0; i < snake.length; i++) {
        led.plotBrightness(snake[i][0], snake[i][1], 5 - i / snake.length * 5 % 5 + 2)
    }
    basic.pause(800)
    next_block = [(snake[0][0] + directions[direction][0]) % 5, (snake[0][1] + directions[direction][1]) % 5]
    if (snake.indexOf(next_block) >= 0) {
        basic.showString("Game Over")
        break
    }
    
    snake = [next_block].concat(snake)
    if (next_block == food) {
        while (snake.indexOf(food) >= 0) {
            food = [randint(0, 4), randint(0, 4)]
        }
    } else {
        _py.py_array_pop(snake)
    }
    
    if (snake.length == 25) {
        basic.showString("You Win")
        break
    }
    
}
