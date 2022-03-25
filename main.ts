input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        basic.pause(1850)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(1000)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 40)
        basic.pause(625)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(1000)
    }
})
DFRobotMaqueenPlus.I2CInit()
