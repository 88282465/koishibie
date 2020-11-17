input.onButtonPressed(Button.A, function () {
    koi.koi_run()
})
input.onButtonPressed(Button.B, function () {
    koi.koi_cls_save("rubbish.bin")
})
koi.koi_onbtn(function (btn1, btn2) {
    if (btn1 == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        koi.koi_addtag(3)
    }
    if (btn2 == 1) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        koi.koi_addtag(4)
    }
})
koi.koi_classified(function (classId) {
    if (classId == 2) {
        koi.koi_print(
        106,
        87,
        "DanGao",
        1000
        )
    }
    if (classId == 1) {
        koi.koi_print(
        106,
        87,
        "DianChi",
        1000
        )
    }
    if (classId == 3) {
        koi.koi_print(
        106,
        87,
        "YiLaGuan",
        1000
        )
    }
    if (classId == 4) {
        koi.koi_print(
        87,
        95,
        "YanTou",
        1000
        )
    }
})
koi.koi_init(SerialPin.P8, SerialPin.P2)
koi.koi_reset_cls()
music.playMelody("G F F E E F D C ", 352)
koi.koi_lcd_direction(koi.LcdDirection.Back)
basic.forever(function () {
	
})
