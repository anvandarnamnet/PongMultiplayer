var game = {"player1Position": 100, "player2Position": 100, "ballXPosition": 50, "ballYPosition": 100};
var exports = module.exports;
const ballUpdateMs = 10;
const moveSpeed = 10;
const wallRight = 450;
const wallLeft = 10;
const wallUp = 320;
const wallDown = 10;

var ballXSpeed = 1;
var ballYSpeed = 1;

exports.getGameState = function() {
    return game;
}

exports.updatePlayers = function(player1Input, player2Input) {
    if (player1Input == 40) {
        game.player1Position += moveSpeed;
    }
    if (player1Input == 38) {
        game.player1Position -= moveSpeed;
    }
    if (player2Input == 40) {
        game.player2Position += moveSpeed;
    }
    if (player2Input == 38) {
        game.player2Position -= moveSpeed;
    }
}

setInterval(function() {
    game.ballXPosition += ballXSpeed;
    game.ballYPosition -= ballYSpeed;
    if (game.ballXPosition >= wallRight) {
        ballXSpeed = -ballXSpeed;
    }
    if (game.ballXPosition <= wallLeft) {
        ballXSpeed = -ballXSpeed;
    }
    if (game.ballYPosition >= wallUp) {
        ballYSpeed = -ballYSpeed;
    }
    if (game.ballYPosition <= wallDown) {
        ballYSpeed = -ballYSpeed;
    }
}, ballUpdateMs);
