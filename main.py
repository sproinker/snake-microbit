direction = 0
snake = [0, 0]
food = [randint(1, 4), randint(1, 4)]
directions = [[1, 0], [0, -1], [-1, 0], [0, -1]]
basic.clear_screen()
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)