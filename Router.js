var app = require("express");
var router = app.Router();
var exports = module.exports;


router.get("/", function (request, response)  {
    var gameID = request.query.gameID;
    var gameState = {"gameID": gameID, "player1Position": 100, "player2Position": 50};
    response.send(gameState);
});
