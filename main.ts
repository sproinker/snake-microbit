let direction = 0
let snake = [0, 0]
let food = [randint(1, 4), randint(1, 4)]
let directions = [[1, 0], [0, -1], [-1, 0], [0, -1]]
basic.clearScreen()
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
