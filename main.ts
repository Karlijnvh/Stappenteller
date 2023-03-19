function berekenVersnelling () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    versnelling = Math.floor(Math.sqrt(x ** 2 + y ** 2 + z ** 2))
}
input.onButtonPressed(Button.AB, function () {
    aantalStappen = begin
    begin = 0
    wachteven = begin
})
let wachteven = 0
let versnelling = 0
let z = 0
let y = 0
let x = 0
let begin = 0
let aantalStappen = 0
let stilstaand = 0
let toestand = stilstaand
let onderDrempel = 300
let bovenDrempel = 500
aantalStappen = begin
begin = 0
basic.forever(function () {
    let bewegen = 0
    if (toestand == stilstaand && versnelling > bovenDrempel) {
        toestand = bewegen
        aantalStappen += 1
        basic.pause(100)
    } else {
        if (toestand == bewegen && versnelling < onderDrempel) {
            toestand = stilstaand
            aantalStappen = aantalStappen
        }
    }
})
basic.forever(function () {
    berekenVersnelling()
    serial.writeValue("versnelling", versnelling)
})
basic.forever(function () {
    if (aantalStappen == begin + 100) {
        wachteven = wachteven
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.clearScreen()
        begin = begin + 100
        wachteven = begin
    }
})
basic.forever(function () {
    if (wachteven == begin) {
        basic.showNumber(aantalStappen)
        basic.pause(100)
    } else {
        basic.pause(100)
    }
})
