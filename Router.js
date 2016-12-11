var app = require("express");
var router = app.Router();
var exports = module.exports;


router.get("/", function (request, response)  {
    var gameID = request.query.gameID;
    var gameState = {"gameID": gameID, "player1Position": 100, "player2Position": 50};
    response.send(gameState);
});


router.post("/", function (request, response) {
    var player1Input = request.body.player1Input;
    var player1Input = request.body.player2Input;
    console.log(player1Input);
    console.log(player2Input);
    response.send("200");
});

module.exports = router;
