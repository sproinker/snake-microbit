direction = 0
directions = [[1, 0], [0, -1], [-1, 0], [0, 1]]
snake = [[0, 0]]
food = [randint(1, 4), randint(1, 4)]

while True:
    basic.clear_screen()
    led.plot_brightness(food[0], food[1], 255)
    for i in range(len(snake)):
        led.plot_brightness(snake[i][0], snake[i][1], 5 -(i / len(snake) * 5)%5 + 2)
    basic.pause(800)

    next_block = [(snake[0][0] + directions[direction][0]) % 5, (snake[0][1] + directions[direction][1]) % 5]
    if next_block in snake:
        basic.show_string("Game Over")
        break
    snake = [next_block] + snake
    if next_block == food:
        while food in snake:
            food = [randint(0,4), randint(0,4)]
    else:
        snake.pop()

    if len(snake) == 25:
        basic.show_string("You Win")
        break
