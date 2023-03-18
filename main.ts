function berekenVersnelling () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    versnelling = Math.floor(Math.sqrt(x ** 2 + y ** 2 + z ** 2))
    basic.pause(500)
}
input.onButtonPressed(Button.AB, function () {
    aantalStappen = 0
})
let versnelling = 0
let z = 0
let y = 0
let x = 0
let aantalStappen = 0
let stilstaand = 0
let toestand = stilstaand
let onderDrempel = 700
let bovenDrempel = 1023
aantalStappen = 0
basic.forever(function () {
    let bewegen = 0
    if (toestand == stilstaand && versnelling > bovenDrempel) {
        toestand = bewegen
        aantalStappen += 1
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
    basic.showNumber(aantalStappen)
    basic.pause(100)
})
