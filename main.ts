function berekenVersnelling () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    versnelling = Math.floor(Math.sqrt(x ** 2 + y ** 2 + z ** 2))
}
input.onButtonPressed(Button.AB, function () {
    geluid = 0
    begin = 0
    aantalStappen = begin
    wachteven = begin
    toestand = stilstaand
})
let wachteven = 0
let versnelling = 0
let z = 0
let y = 0
let x = 0
let begin = 0
let aantalStappen = 0
let stilstaand = 0
let toestand = 0
let geluid = 0
geluid = 0
toestand = stilstaand
let onderDrempel = 800
let bovenDrempel = 1400
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
    if (wachteven == begin) {
        basic.showNumber(aantalStappen)
        basic.pause(100)
    } else {
        basic.pause(100)
    }
})
basic.forever(function () {
    if (aantalStappen == begin + 100) {
        wachteven = wachteven
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        basic.pause(100)
        basic.clearScreen()
        begin = begin + 100
        wachteven = begin
    }
})
