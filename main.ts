input.onButtonPressed(Button.A, function () {
    nombre1 += 1
    basic.showNumber(nombre1)
})
input.onButtonPressed(Button.AB, function () {
    nombre1 = 0
    nombre2 = 0
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    nombre2 += 1
    basic.showNumber(nombre2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(nombre1 + nombre2)
    basic.pause(500)
    nombre1 = 0
    nombre2 = 0
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
let nombre2 = 0
let nombre1 = 0
nombre1 = 0
nombre2 = 0
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
