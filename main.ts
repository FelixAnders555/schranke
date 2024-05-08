let Messwert = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(500)
    basic.setLedColor(0xff0000)
    Messwert = pins.analogReadPin(AnalogPin.P1)
    if (Messwert > 100) {
        basic.setLedColor(0x00ff00)
        motors.motorPower(-100)
        basic.pause(3000)
    } else {
        if (input.pinIsPressed(TouchPin.P2)) {
            basic.pause(2000)
            motors.motorPower(100)
            basic.setLedColor(0xff0000)
        } else {
            if (input.pinIsPressed(TouchPin.P3)) {
                motors.motorCommand(MotorCommand.Break)
            }
        }
    }
})
