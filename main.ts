/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mohammed Afheej
 * Created on: Oct 2024
 * This program shows level brithness of light
*/
// defining variables
let distanceOfObject:number = 0

//show happy face (-__-)
basic.showIcon(IconNames.Happy)

// calculating distance
input.onButtonPressed(Button.A, function () {

    // clearing screen
    basic.clearScreen()
    distanceOfObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // showing the distance and happy face at the end
    basic.showNumber(distanceOfObject)
    pause(2000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
