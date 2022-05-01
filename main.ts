namespace SpriteKind {
    export const NPC1 = SpriteKind.create()
    export const Complete = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
    export const Animay1 = SpriteKind.create()
    export const AnimaySUS = SpriteKind.create()
    export const Animay2 = SpriteKind.create()
    export const NPC4 = SpriteKind.create()
    export const NPC5 = SpriteKind.create()
    export const NPC6 = SpriteKind.create()
    export const NPC7 = SpriteKind.create()
    export const NPC8 = SpriteKind.create()
    export const NPC9 = SpriteKind.create()
    export const NPC10 = SpriteKind.create()
    export const NPC11 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC10, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("What is the most haunted fort of Asia situated in Rajasthan?", DialogLayout.Bottom)
    story.showPlayerChoices("Jodhpur fort", "Bhangarh fort ", "Jaipur fort", "Udaipur Fort")
    if (story.checkLastAnswer("Jodhpur fort")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Bhangarh fort ")) {
        info.changeScoreBy(5)
        Ducky.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("Jaipur fort")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Udaipur Fort")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
function Createlevel () {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level5`)
        The_queen = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.NPC5)
        tiles.placeOnTile(The_queen, tiles.getTileLocation(3, 3))
        Uma = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.NPC6)
        tiles.placeOnTile(Uma, tiles.getTileLocation(3, 7))
        Pikachu = sprites.create(img`
            . . 4 4 4 . . . . 4 4 4 . . . . 
            . 4 5 5 5 e . . e 5 5 5 4 . . . 
            4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
            e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
            . e e 5 5 5 5 5 5 5 5 e e . . . 
            . . e 5 f 5 5 5 5 f 5 e . . . . 
            . . f 5 5 5 4 4 5 5 5 f . . f f 
            . . f 4 5 5 f f 5 5 6 f . f 5 f 
            . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
            . . . f 4 5 5 5 5 5 5 4 4 5 f . 
            . . . f 5 5 5 5 5 4 5 5 f f . . 
            . . . f 5 f f f 5 f f 5 f . . . 
            . . . f f . . f f . . f f . . . 
            `, SpriteKind.NPC7)
        tiles.placeOnTile(Pikachu, tiles.getTileLocation(2, 11))
        Pussy = sprites.create(img`
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 f . f d f 
            . f 2 2 2 2 2 2 b b f f d f 
            . f b d d d d d d b b d b f 
            . f d d d d d b d d f f f . 
            . f d f f f d f f d f . . . 
            . f f . . f f . . f f . . . 
            `, SpriteKind.NPC8)
        tiles.placeOnTile(Pussy, tiles.getTileLocation(7, 15))
        Ducky = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 . b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.NPC9)
        tiles.placeOnTile(Ducky, tiles.getTileLocation(10, 9))
        innocent_monkey = sprites.create(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `, SpriteKind.NPC10)
        tiles.placeOnTile(innocent_monkey, tiles.getTileLocation(14, 5))
        Sophie = sprites.create(img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 d b b d 5 5 5 f . 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 4 4 4 c c 5 5 f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `, SpriteKind.NPC11)
        tiles.placeOnTile(Sophie, tiles.getTileLocation(14, 8))
    } else if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level14`)
    } else {
    	
    }
    tiles.placeOnRandomTile(theplayer, sprites.dungeon.collectibleInsignia)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC7, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("What is the famous three day festival in Odisha", DialogLayout.Bottom)
    story.showPlayerChoices("Raja Parba", "Pongal", "Onam", "Maha Shivratri")
    if (story.checkLastAnswer("Pongal")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Raja Parba")) {
        info.changeScoreBy(5)
        Pikachu.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("Onam")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Maha Shivratri")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC5, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("What is the traditional dance of Odisha", DialogLayout.Bottom)
    story.showPlayerChoices("Kuchipudi", "Mohiniyattam", "Odissi", "Kathakali")
    if (story.checkLastAnswer("Kuchipudi")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Odissi")) {
        info.changeScoreBy(5)
        The_queen.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("Mohiniyattam")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Kathakali")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC2, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("Which temple first receives the sun's radiation?", DialogLayout.Bottom)
    story.showPlayerChoices("Meenakshi Temple", "Konark Sun Temple", "Jagannath Temple", "Budhalinga Temple")
    if (story.checkLastAnswer("Meenakshi Temple")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Konark Sun Temple")) {
        info.changeScoreBy(5)
        Uma.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("Jagannath Temple")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Budhalinga Temple")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC3, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText(" What is an important Hindu temple dedicated to Jagannath, a form of Krishna, in Puri in the state of Odisha?", DialogLayout.Bottom)
    story.showPlayerChoices("Meenakshi Temple", "Konark Sun Temple", "Jagannath Temple", "Lingaraja Temple")
    if (story.checkLastAnswer("Meenakshi Temple")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Jagannath Temple")) {
        info.changeScoreBy(5)
        Pussy.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("Konark Sun Temple")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Budhalinga Temple")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC9, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("which is the largest Temple in Odisha?", DialogLayout.Bottom)
    story.showPlayerChoices("Jagannath Temple", "Konark Sun Temple", "Lingaraja Temple", "Budhalinga Temple")
    if (story.checkLastAnswer("Jagannath Temple")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Lingaraja Temple")) {
        info.changeScoreBy(5)
        Ducky.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("Konark Sun Temple")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Budhalinga Temple")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Animay2, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("In what year was Rajasthan formed?", DialogLayout.Bottom)
    story.showPlayerChoices("Nineteen fifty three ", "Nineteen forty nine", "Nineteen fifty five", "Nineteen forty one")
    if (story.checkLastAnswer("Nineteen fifty three ")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Nineteen forty nine")) {
        info.changeScoreBy(5)
        Ducky.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("Nineteen fifty five")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Nineteen forty one")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC4, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("There are how many types of dishes prepared in Jagannath Temple including abhada and dalma", DialogLayout.Bottom)
    story.showPlayerChoices("fifty seven", "forty six", "sixty one", "fifty six")
    if (story.checkLastAnswer("fifty seven")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("fifty six")) {
        info.changeScoreBy(5)
        innocent_monkey.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("forty six")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("sixty one")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC11, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("The Oldest Range Of Fold Mountains", DialogLayout.Bottom)
    story.showPlayerChoices("Aravalli", "Vindhya", "Satpura", "Nilgiri")
    if (story.checkLastAnswer("Vindhya")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Aravalli")) {
        info.changeScoreBy(5)
        Sophie.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("Satpura")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Nilgiri")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC1, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("What is the capital of India?", DialogLayout.Bottom)
    story.showPlayerChoices("Kolkata", "New Delhi", "Kathmandu", "Mumbai")
    if (story.checkLastAnswer("Kolkata")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("New Delhi")) {
        info.changeScoreBy(5)
        The_queen.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("Kathmandu")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Mumbai")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    clearlevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Animay1, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("What makes Rajasthan have vibrant culture?", DialogLayout.Bottom)
    story.showPlayerChoices("beautiful cities", "Colour coded cities", "Handicrafts", "Traditional fabrics")
    if (story.checkLastAnswer("beautiful cities")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Colour coded cities")) {
        info.changeScoreBy(5)
        Pikachu.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("Handicrafts")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Traditional fabrics")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC6, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("Which is the annual chariot festival held at Puri which is forked by millions of devotees", DialogLayout.Bottom)
    story.showPlayerChoices("Rath Yatra", "Ganesh Chaturti", "Maha Shivratri", "Ram Navami")
    if (story.checkLastAnswer("Ganesh Chaturti")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Rath Yatra")) {
        info.changeScoreBy(5)
        Uma.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("Maha Shivratri")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Ram Navami")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
function clearlevel () {
    for (let value of sprites.allOfKind(SpriteKind.NPC1)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Complete)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.NPC2)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.NPC3)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Animay1)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Animay2)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.NPC4)) {
        value.destroy()
    }
    level += 1
    Createlevel()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC8, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("The themes and motifs of what are mythological revolving around the Jagannath and Vaishnava sect?", DialogLayout.Bottom)
    story.showPlayerChoices("Rock Art", "Pattachitra", "Applique", "Stone paintings")
    if (story.checkLastAnswer("Rock Art")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Pattachitra")) {
        info.changeScoreBy(5)
        Pussy.setKind(SpriteKind.Complete)
    } else if (story.checkLastAnswer("Applique")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Stone paintings")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
let Sophie: Sprite = null
let DialogMode = false
let innocent_monkey: Sprite = null
let Ducky: Sprite = null
let Pikachu: Sprite = null
let Pussy: Sprite = null
let Uma: Sprite = null
let The_queen: Sprite = null
let theplayer: Sprite = null
let level = 0
level = 1
tiles.setCurrentTilemap(tilemap`level1`)
theplayer = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(theplayer, tiles.getTileLocation(7, 15))
The_queen = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.NPC1)
tiles.placeOnTile(The_queen, tiles.getTileLocation(1, 3))
Uma = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.NPC2)
tiles.placeOnTile(Uma, tiles.getTileLocation(7, 1))
Pussy = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.NPC3)
tiles.placeOnTile(Pussy, tiles.getTileLocation(5, 9))
Pikachu = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Animay1)
tiles.placeOnTile(Pikachu, tiles.getTileLocation(10, 10))
Ducky = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 . b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Animay2)
tiles.placeOnTile(Ducky, tiles.getTileLocation(14, 5))
innocent_monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.NPC4)
tiles.placeOnTile(innocent_monkey, tiles.getTileLocation(1, 13))
scene.cameraFollowSprite(theplayer)
DialogMode = false
Createlevel()
forever(function () {
    if (DialogMode == false) {
        controller.moveSprite(theplayer)
    } else if (DialogMode == true) {
        controller.moveSprite(theplayer, 0, 0)
    } else {
    	
    }
})
