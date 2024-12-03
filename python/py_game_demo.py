from turtle import *

speed = 100

setup(1000, 1000)
speed(0)

def up():
    setheading(90)
    forward(speed)

def left():
    setheading(180)
    forward(speed)

def down():
    setheading(270)
    forward(speed)

def right():
    setheading(0)
    forward(speed)


listen()
onkey(up, "w")
onkey(left, "a")
onkey(down, "s")
onkey(right, "d")


mainloop()