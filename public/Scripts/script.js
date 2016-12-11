$(function() {
  // to get url shit:
  var right = $(".right");
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  //setInterval(updateData(ctx), 1000);
  setInterval(function(){
    $.getJSON("https://pongmultiplaye.herokuapp.com/api?gameID=123", function(data){
      //console.log("HEJ");
      //console.log(data);
      paintPlayers(ctx,canvas, data.player1Position, data.player2Position, data.ballXPosition, data.ballYPosition);
    });
  },50)
});

function paintPlayers(ctx,canvas, yPos1, yPos2, ballX,ballY){
  ctx.clearRect(0, 0, canvas.width, canvas.height);



  ctx.beginPath();
  ctx.rect(10, yPos1, 20, 50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(canvas.width - 30, yPos2, 20, 50);
  ctx.fillStyle = "#09fa45";
  ctx.fill();
  ctx.closePath();


  ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.arc(ballX, ballY, 2, 0, Math.PI*2);
      ctx.fillStyle = "#ff0000";
      ctx.fill();
      ctx.closePath();
  //console.log(ballX);
  //console.log(ballY);


}



$(document).keydown(function(e) {
    console.log(e.keyCode);
    //request with URL,data,success callback
    var player1Input = 0;
    var player2Input = 0;
    var player = getUrlVars()["player"];
    if(player == 1){
      player1Input = e.keyCode;
    }else{
      player2Input = e.keyCode;
    }
    $.post("https://pongmultiplaye.herokuapp.com/api",
    {player1Input:player1Input,player2Input:player2Input},
    function(data, textStatus, jqXHR)
    {
          //data: Received from server
          //console.log(data);
    })
});




// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
