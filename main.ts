function berekenVersnelling () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    versnelling = Math.floor(Math.sqrt(x * x + y * y + z * z))
}
let versnelling = 0
let z = 0
let y = 0
let x = 0
let stilstaand = 0
let aantalStappen = 0
let toestand = stilstaand
let onderDrempel = 1024
let bovenDrempel = 2048
basic.forever(function () {
    berekenVersnelling()
    serial.writeValue("versnelling", versnelling)
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 2048) {
        let bewegen = 0
        toestand = bewegen
    } else {
        if (input.acceleration(Dimension.X) < 1024) {
            toestand = stilstaand
        }
    }
})
basic.forever(function () {
    basic.showString("" + (aantalStappen))
})
