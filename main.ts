namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Player2, 2, function (sprite) {
    level4()
})
function level4 () {
    startlevel()
    game.showLongText("Electric current can be measured using an _____ ?              1.resistor          2.ammeter            3.voltmeter", DialogLayout.Full)
    if (game.askForNumber("", 1) == 2) {
        game.over(true)
    } else {
        game.over(false)
    }
}
function Level2 () {
    startlevel()
    game.showLongText("which of the following is not the condition needed for electricity to flow?         1.electrical conductor             2.a source of electricity energy          3.closed circuit", DialogLayout.Bottom)
    if (game.askForNumber("", 1) == 1) {
        Level3()
    } else {
        game.over(false)
    }
}
function Level3 () {
    startlevel()
    scene.setBackgroundImage(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f11111ff11fffff11111ff11111ff111111ff111111ff11ff11111ff11ff111111ff11ff11ff11ff
        f11111ff11fffff11111ff11111ff111111ff111111ff11ff11111ff11ff111111ff11ff11ff11ff
        f11fffff11fffff11fffff11fffffff11ffff11ff11ff11ff11fffff11ffff11ffff11ff11ff11ff
        f1111fff11fffff1111fff11fffffff11ffff111111ff11ff11fffff11ffff11ffff111111ff11ff
        f1111fff11fffff1111fff11fffffff11ffff111111ff11ff11fffff11ffff11ffff111111ff11ff
        f11fffff11fffff11fffff11fffffff11ffff1111ffff11ff11fffff11ffff11ffffffff11ff11ff
        f11111ff11111ff11111ff11111ffff11ffff11f11fff11ff11111ff11ffff11ffff111111ffffff
        f11111ff11111ff11111ff11111ffff11ffff11ff11ff11ff11111ff11ffff11ffff111111ff11ff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `)
    teacher = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . f f f f 9 f d d f 9 f f f f . 
        . f f f d 9 f d d f 9 d f f f . 
        . f f c c 9 9 c c 9 9 c c f f . 
        . f f f d d d d d d d d f f f . 
        . f f f 6 6 5 5 5 5 6 6 f 4 4 4 
        . f f d 6 5 5 5 5 5 5 6 d 4 4 4 
        . f f f f 5 5 5 5 5 5 f f 4 4 4 
        . . . . . 3 3 3 3 3 3 . . 4 4 4 
        . . . . . 3 3 . . 3 3 . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player2)
    controller.moveSprite(teacher, 100, 0)
    scene.setTileMap(img`
        ........................................
        ........................................
        ..................77777........777..7...
        ...........7777..........77777......7...
        ......777......777..................72..
        ..........7...........777.........77777.
        777.77..................................
        ........................................
        `)
    scene.setTile(7, img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 4 4 d d d d d d d d d d 8 8 
        8 8 4 4 d d d d d d d d d d 8 8 
        8 8 4 4 a a d d d d d d 3 3 8 8 
        8 8 4 4 a a 9 9 d d d d 3 3 8 8 
        8 8 4 4 a a 9 9 d d 5 5 3 3 8 8 
        8 8 4 4 a a 9 9 7 7 5 5 3 3 8 8 
        8 8 4 4 a a 9 9 7 7 5 5 3 3 8 8 
        8 8 4 4 a a 9 9 7 7 5 5 3 3 8 8 
        8 8 4 4 a a 9 9 7 7 5 5 3 3 8 8 
        8 8 4 4 a a 9 9 7 7 5 5 3 3 8 8 
        8 8 4 4 a a 9 9 7 7 5 5 3 3 8 8 
        8 8 4 4 a a 9 9 7 7 5 5 3 3 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `, true)
    scene.setTile(2, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . e e e e e e e e e e e e e e . 
        . 5 e e 5 e e 5 e e 5 e e 5 e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e 2 2 e e e e e e . 
        . 4 4 4 4 4 4 2 2 4 4 4 4 4 4 . 
        . 4 4 4 4 4 4 2 2 4 4 4 4 4 4 . 
        . e e e e e e 2 2 e e e e e e . 
        . e e 5 e e e 2 2 e 5 e e e e . 
        . e e e e e 5 e e e e e e e e . 
        . 5 e e e e e e e e e e e 5 e . 
        . e e e e e e e e e e e e e e . 
        . e e 5 e e e e e 5 e e e e e . 
        . 5 e e e e 5 e e e e e 5 e e . 
        `, true)
    teacher.x = 5
    teacher.ay = 350
    scene.cameraFollowSprite(teacher)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite2, otherSprite) {
    count += 1
    otherSprite.destroy()
    otherSprite.startEffect(effects.ashes, 200)
    if (count == 12) {
        info.stopCountdown()
        Book.destroy()
        music.baDing.play()
        Level2()
    } else {
        music.playMelody("C D E F G A B C5 ", 66)
    }
})
function startlevel () {
    count = 0
    while (index <= 10 + level) {
        Book = sprites.create(img`
            .......99999999999999999999.....
            ......444444444444444444449.....
            ......444444444444444444449.....
            ......444444444444444444449.....
            ......444444444444444444449.....
            ......444441444411114444449.....
            ......444441444414444444449.....
            ......444441444414444444449.....
            ......444441444411114444449.....
            ......444441444444414444449.....
            ......444441444444414444449.....
            ......444441444411114444449.....
            ......444444444444444444449.....
            ......444444444444444444449.....
            ......444444444444444444449.....
            ......444444444444444444449.....
            ......444444444444444444449.....
            ......444111111441111444449.....
            ......444441444441441444449.....
            ......444441444441111144449.....
            ......444441444441444144449.....
            ......444441444441444144449.....
            ......444441444441111144449.....
            ......444444444444444444449.....
            ......444444444444444444449.....
            ......444444444444444444449.....
            ......444444444444444444449.....
            ......44444444444444444444......
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.Food)
        Book.setPosition(randint(20, 140), randint(20, 100))
        index += 1
    }
    Student.sayText("Level" + ("" + level), 1000, true)
    info.startCountdown(15)
}
let index = 0
let Book: Sprite = null
let count = 0
let teacher: Sprite = null
let Student: Sprite = null
let level = 0
game.splash("Welcome", "Are you ready to learn Science together")
level = 1
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4444444444444444444444
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4444444444444444444444
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4444444444444444444444
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4444444444444444444444
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4444444444444444444444
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4444444444444444444444
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4444444444444444444444
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4444444444444444444444
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd444
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd444
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd444
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd444
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd444
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd444
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd444
    dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddd
    dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddd
    dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddd
    dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddd
    dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddd
    dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddd
    dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddd
    dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddd
    999999dddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddd999
    999999dddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddd999
    999999dddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddd999
    999999dddddddddddd6666666666611111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddd999
    999999dddddddddddd6666666666611111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddd999
    999999dddddddddddd6666666666611111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddd999
    999999dddddddddddd6666666666611111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddd999
    999999dddddddddddd6666666666611166666666666666666666666666666111166666111111111166666611116666666666666666666666666666111111111111666666666666666dddddddddddd999
    999999dddddddddddd6666666666611166666666666666666666666666666111166666111111111166666611116666666666666666666666666666111111111111666666666666666dddddddddddd999
    999999dddddddddddd6666666666611166666666666666666666666666666111166666111111111166666611116666666666666666666666666666111111111111666666666666666dddddddddddd999
    999999dddddddddddd6666666666611166666666666666666666666666666111166666111111111166666611116666666666666666666666666666111111111111666666666666666dddddddddddd999
    999999dddddddddddd6666666666611111111111666661111111166666666666666666111666611166666611111111111666111111111666666666111666611111666666666666666dddddddddddd999
    999999dddddddddddd6666666666611111111111666661111111166666666666666666111666611166666611111111111666111111111666666666111666611111666666666666666dddddddddddd999
    999999dddddddddddd6666666666611111111111666661111111166666666666666666111666611166666611111111111666111111111666666666111666611111666666666666666dddddddddddd999
    999999dddddddddddd6666666666666666666111666661111666666666666111166666111111111166666611116661111666111116666666666666111111111111666666666666666dddddddddddd999
    999999dddddddddddd6666666666666666666111666661111666666666666111166666111111111166666611116661111666111116666666666666111111111111666666666666666dddddddddddd999
    999999dddddddddddd6666666666666666666111666661111666666666666111166666111111111166666611116661111666111116666666666666111111111111666666666666666dddddddddddd999
    999999dddddddddddd6666666666666666666111666661111666666666666111166666111111111166666611116661111666111116666666666666111111111111666666666666666dddddddddddd999
    999999dddddddddddd6666666666611111111111666661111111111111666111166666111666666666666611116661111666111116666666666666111666666666666666666666666dddddddddddd999
    999999dddddddddddd6666666666611111111111666661111111111111666111166666111666666666666611116661111666111116666666666666111666666666666666666666666dddddddddddd999
    999999dddddddddddd6666666666611111111111666661111111111111666111166666111666666666666611116661111666111116666666666666111666666666666666666666666dddddddddddd999
    999999dddddddddddd6666666666611111111111666661111111111111666111166666111666666666666611116661111666111116666666666666111666666666666666666666666dddddddddddd999
    999999dddddddddddd6666666666611111111111666661111111111111666111166666111666666666666611116661111666111116666666666666111666666666666666666666666dddddddddddd999
    dddddddddddddddddd6666666666666666666666666666666666666666666111166666111111111166666611116661111666111111111111166666111111111111666666666666666dddddddddddd999
    dddddddddddddddddd6666666666666666666666666666666666666666666111166666111111111166666611116661111666111111111111166666111111111111666666666666666dddddddddddd999
    dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddd
    dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddd
    dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddd
    dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddd
    dddddddddddddddddd1116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111ddddddddddddddd
    dddddddddddddddddd1116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111ddddddddddddddd
    dddddddddddddddddd1116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111ddddddddddddddd
    dddddddddddddddddd1116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111ddddddddddddddd
    999999dddddddddddd1116666777777777777666888888888111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111ddddddddddddddd
    999999dddddddddddd1116666777777777777666888888888111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111ddddddddddddddd
    999999dddddddddddd1116666777777777777666888888888111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111ddddddddddddddd
    999999dddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddd
    999999dddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddd
    999999dddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddd
    999999dddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddd
    999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999
    999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999
    999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999
    999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999
    999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999
    999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999
    999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999
    999999dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeee333dddddddddddddddd999
    999999dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeee333dddddddddddddddd999
    999999dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeee333dddddddddddddddd999
    999999dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeee333dddddddddddddddd999
    999999dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd999
    999999dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd999
    999999dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd999
    999999dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd999
    999999dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd999
    999999dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd999
    999999dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd999
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd999
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd999
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd999
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd999
    dddddddddddddddddddddeeeeddddddddddddddddddddddddeeeeddddddddddddeeeeedddddddddddddddddddddddeeeeddddddddddddeeeedddddddddddddddddddddddddeeedddddddddddddddd999
    dddddddddddddddddddddeeeeddddddddddddddddddddddddeeeeddddddddddddeeeeedddddddddddddddddddddddeeeeddddddddddddeeeedddddddddddddddddddddddddeeedddddddddddddddd999
    dddddddddddddddddddddeeeeddddddddddddddddddddddddeeeeddddddddddddeeeeedddddddddddddddddddddddeeeeddddddddddddeeeedddddddddddddddddddddddddeeedddddddddddddddd999
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeee333ddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeee333ddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeee333ddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeee3333ddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeee333ddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeddddddddddddddddddddddddeeeeddddddddddddeeeeedddddddddddddddddddddddeeeeddddddddddddeeeedddddddddddddddddddddddddeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeddddddddddddddddddddddddeeeeddddddddddddeeeeedddddddddddddddddddddddeeeeddddddddddddeeeedddddddddddddddddddddddddeeeddddddddddddddddddd
    dddddddddddddddddddddeeeeddddddddddddddddddddddddeeeeddddddddddddeeeeedddddddddddddddddddddddeeeeddddddddddddeeeedddddddddddddddddddddddddeeeddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
Student = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . f f f f d d d d f f f f . . 
    . f f f f d f d d f d f f f f . 
    . f f f d 3 f d d f 3 d f f f . 
    . . f f f d d d d d d f f f . . 
    . . . f f f 9 9 9 9 f f f . . . 
    . . 9 9 f 9 9 9 9 9 9 f 9 9 . . 
    . . 9 9 f 9 9 9 9 9 9 f 9 9 . . 
    . . d d 6 6 6 6 6 6 6 6 d d . . 
    . . . 6 6 6 6 6 6 6 6 6 6 . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Student, 70, 70)
startlevel()
