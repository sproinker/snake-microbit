let next_block: any[];
let collision: boolean;
let direction = 0
let directions = [[1, 0], [0, -1], [-1, 0], [0, 1]]
let snake = [[0, 0]]
let food = [randint(1, 4), randint(1, 4)]
//  snake movement buttons
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.A, function on_button_single_clicked_a() {
    
    direction = 3
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function on_button_double_clicked_a() {
    
    direction = 2
})
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.B, function on_button_single_clicked_b() {
    
    direction = 1
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function on_button_double_clicked_b() {
    
    direction = 0
})
while (true) {
    //  snake drawing code
    basic.clearScreen()
    led.plotBrightness(food[0], food[1], 255)
    for (let i = 0; i < snake.length; i++) {
        led.plotBrightness(snake[i][0], snake[i][1], 5 - i / snake.length * 5 % 5 + 2)
    }
    basic.pause(800)
    next_block = [(snake[0][0] + directions[direction][0]) % 5, (snake[0][1] + directions[direction][1]) % 5]
    //  losing condition
    collision = false
    for (let segment of snake) {
        if (next_block[0] == segment[0] && next_block[1] == segment[1]) {
            collision = true
            break
        }
        
    }
    if (collision) {
        basic.clearScreen()
        basic.showString("Game Over")
        break
    }
    
    snake = [next_block].concat(snake)
    //  score system
    if (next_block[0] == food[0] && next_block[1] == food[1]) {
        food = [randint(1, 4), randint(1, 4)]
    } else {
        _py.py_array_pop(snake)
    }
    
    //  win condition
    if (snake.length == 25) {
        basic.showString("You Win")
        break
    }
    
    //  making sure that the snake just loops on the screen
    //  instead of throwing a game over when it goes off screen
    if (snake[0][1] < 0) {
        snake[0][1] = 4
    } else if (snake[0][0] < 0) {
        snake[0][0] = 4
    }
    
}
