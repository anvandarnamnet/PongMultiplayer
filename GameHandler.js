var game = {"player1Position": 100, "player2Position": 100};
var exports = module.exports;
const moveSpeed = 10;

exports.getGameState = function() {
    return game;
}

exports.updateGame = function(player1Input, player2Input) {
    if (player1Input == 40) {
        game.player1Position -= moveSpeed;
    }
    if (player1Input == 38) {
        game.player1Position += moveSpeed;
    }
    if (player2Input == 40) {
        game.player2Position -= moveSpeed;
    }
    if (player2Input == 38) {
        game.player2Position += moveSpeed;
    }
}
