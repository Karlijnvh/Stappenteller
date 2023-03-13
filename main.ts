function berekenVersnelling () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    versnelling = Math.floor(Math.sqrt(x * x + y * y + z * z))
}
let bewegen = 0
let versnelling = 0
let z = 0
let y = 0
let x = 0
let stilstaand = 0
let toestand = stilstaand
let onderDrempel = 1024
let bovenDrempel = 1048
let aantalStappen = 0
basic.forever(function () {
    if (toestand == stilstaand && versnelling > bovenDrempel) {
        toestand = bewegen
    }
})
basic.forever(function () {
    berekenVersnelling()
    serial.writeValue("versnelling", versnelling)
})
basic.forever(function () {
    basic.showNumber(aantalStappen)
})
basic.forever(function () {
    if (toestand == bewegen) {
        aantalStappen += aantalStappen + 1
    }
})
