var app = require("express");
var router = app.Router();
var exports = module.exports;
var gameHandler = require(__dirname + "/GameHandler");


router.get("/", function (request, response)  {
    var gameID = request.query.gameID;
    var gameState = gameHandler.getGameState();
    response.send(gameState);
});


router.post("/", function (request, response) {
    var player1Input = request.body.player1Input;
    var player2Input = request.body.player2Input;
    gameHandler.updateGame(player1Input, player2Input);
    response.send("200");
});

module.exports = router;
