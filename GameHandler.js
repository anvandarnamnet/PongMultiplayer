var game = {"player1Position": 100, "player2Position": 100, "ballXPosition": 50, "ballYPosition": 100};
var exports = module.exports;
const ballUpdateMs = 10;
const moveSpeed = 20;
const wallRight = 400;
const wallLeft = 0;
const wallUp = 0;
const wallDown = 300;

var ballXSpeed = 1;
var ballYSpeed = 1;

exports.getGameState = function() {
    return game;
}

exports.updatePlayers = function(player1Input, player2Input) {
    if (player1Input == 40 && game.player1Position <= 250) {
        game.player1Position += moveSpeed;
    }
    else if (player1Input == 40) {
        game.player1Position = 250;
    }
    if (player1Input == 38 && game.player1Position >= 0) {
        game.player1Position -= moveSpeed;
    }
    else if (player1Input == 38) {
        game.player1Position = 0;
    }
    if (player2Input == 40 && game.player2Position <= 250) {
        game.player2Position += moveSpeed;
    }
    else if (player2Input == 40) {
        game.player2Position = 250;
    }
    if (player2Input == 38 && game.player2Position >= 0) {
        game.player2Position -= moveSpeed;
    }
    else if (player2Input == 38) {
        game.player2Position = 0;
    }
}

function reset() {
    game.player1Position = 100;
    game.player2Position = 100;
    game.ballXPosition = 200;
    game.ballYPosition = 150;
}

setInterval(function() {
    game.ballXPosition += ballXSpeed;
    game.ballYPosition -= ballYSpeed;
    if (game.ballXPosition >= wallRight - 10) {
        reset();
    }
    if (game.ballXPosition <= wallLeft + 10) {
        reset();
    }
    if (game.ballYPosition <= wallUp + 10) {
        ballYSpeed = -ballYSpeed;
    }
    if (game.ballYPosition >= wallDown - 10) {
        ballYSpeed = -ballYSpeed;
    }
    if (game.ballXPosition <= 40 && (game.ballYPosition >= game.player1Position && game.ballYPosition <= game.player1Position + 50) && ballXSpeed == -1) {
        ballXSpeed = -ballXSpeed;
    }
    if (game.ballXPosition >= 360 && (game.ballYPosition >= game.player2Position && game.ballYPosition <= game.player2Position + 50) && ballXSpeed == 1) {
        ballXSpeed = -ballXSpeed;
    }
}, ballUpdateMs);
