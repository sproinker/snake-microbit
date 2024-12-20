direction = 0
directions = [[1, 0], [0, -1], [-1, 0], [0, 1]]
snake = [[0, 0]]
food = [randint(1, 4), randint(1, 4)]

# snake movement buttons
def on_button_single_clicked_a():
    global direction
    direction = 3
buttonClicks.on_button_single_clicked(buttonClicks.AorB.A, on_button_single_clicked_a)

def on_button_double_clicked_a():
    global direction
    direction = 2
buttonClicks.on_button_double_clicked(buttonClicks.AorB.A, on_button_double_clicked_a)

def on_button_single_clicked_b():
    global direction
    direction = 1
buttonClicks.on_button_single_clicked(buttonClicks.AorB.B, on_button_single_clicked_b)

def on_button_double_clicked_b():
    global direction
    direction = 0
buttonClicks.on_button_double_clicked(buttonClicks.AorB.B, on_button_double_clicked_b)

while True:
    # snake drawing code
    basic.clear_screen()
    led.plot_brightness(food[0], food[1], 255)
    for i in range(len(snake)):
        led.plot_brightness(snake[i][0], snake[i][1], 5 -(i / len(snake) * 5)%5 + 2)
    basic.pause(800)

    next_block = [(snake[0][0] + directions[direction][0]) % 5, (snake[0][1] + directions[direction][1]) % 5]

    # losing condition
    collision = False
    for segment in snake:
        if next_block[0] == segment[0] and next_block[1] == segment[1]:
            collision = True
            break

    if collision:
        basic.clear_screen()
        basic.show_string("Game Over")
        break
    snake = [next_block] + snake

    # score system
    if next_block[0] == food[0] and next_block[1] == food[1]:
        food = [randint(1, 4), randint(1, 4)]
    else:
        snake.pop()

    # win condition
    if len(snake) == 25:
        basic.show_string("You Win")
        break
    
    # making sure that the snake just loops on the screen
    # instead of throwing a game over when it goes off screen
    if snake[0][1] < 0:
        snake[0][1] = 4
    elif snake[0][0] < 0:
        snake[0][0] = 4