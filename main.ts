function Lobby () {
    game.splash("Push A to go to the lobby")
    Lobby_colour = game.askForString("Type in your preferred lobby colour")
    if (Lobby_colour == "grey") {
        scene.setBackgroundColor(0)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "white") {
        scene.setBackgroundColor(1)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "red") {
        scene.setBackgroundColor(2)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "pink") {
        scene.setBackgroundColor(3)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "green") {
        scene.setBackgroundColor(7)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "orange") {
        scene.setBackgroundColor(4)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "aqua") {
        scene.setBackgroundColor(6)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "dark blue") {
        scene.setBackgroundColor(8)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "sky blue") {
        scene.setBackgroundColor(9)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "purple") {
        scene.setBackgroundColor(10)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "fade") {
        scene.setBackgroundColor(11)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "violet") {
        scene.setBackgroundColor(12)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "Skin") {
        scene.setBackgroundColor(13)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "Brown") {
        scene.setBackgroundColor(14)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    } else if (Lobby_colour == "Black") {
        scene.setBackgroundColor(15)
        game.showLongText("Waiting for players…", DialogLayout.Bottom)
    }
    game.splash("Press B to play")
}
controller.player2.onEvent(ControllerEvent.Connected, function () {
    if (Lobby_colour == "grey") {
        scene.setBackgroundColor(0)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "white") {
        scene.setBackgroundColor(1)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "red") {
        scene.setBackgroundColor(2)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "pink") {
        scene.setBackgroundColor(3)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "green") {
        scene.setBackgroundColor(7)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "orange") {
        scene.setBackgroundColor(4)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "aqua") {
        scene.setBackgroundColor(6)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "dark blue") {
        scene.setBackgroundColor(8)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "sky blue") {
        scene.setBackgroundColor(9)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "purple") {
        scene.setBackgroundColor(10)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "fade") {
        scene.setBackgroundColor(11)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "violet") {
        scene.setBackgroundColor(12)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "Skin") {
        scene.setBackgroundColor(13)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "Brown") {
        scene.setBackgroundColor(14)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else if (Lobby_colour == "Black") {
        scene.setBackgroundColor(15)
        game.showLongText("Player connected!", DialogLayout.Bottom)
    } else {
        game.showLongText("Sorry, that colour is not an option. Press A to choose again.", DialogLayout.Full)
        Lobby()
    }
})
let Lobby_colour = ""
music.playMelody("C D E F G A B C5 ", 120)
Lobby()
