let stilstaand = 0
let aantalStappen = 0
let toestand = stilstaand
let onderDrempel = 1024
let bovenDrempel = 2048
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
