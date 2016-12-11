$(function() {
  // to get url shit:
  var right = $(".right");
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  //setInterval(updateData(ctx), 1000);
  setInterval(function(){
    $.getJSON("http://localhost:5000/api?gameID=123", function(data){
      //console.log("HEJ");
      //console.log(data);
      paintPlayers(ctx,canvas, data.player1Position, data.player2Position, data.ballXPosition);
    });
  },100)
});

function paintPlayers(ctx,canvas, yPos1, yPos2, ballX){
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  ctx.beginPath();
  ctx.rect(10, yPos1, 50, 100);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(100, yPos2, 50, 100);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();


  ctx.beginPath();
  ctx.rect(ballX, 50, 50, 100);
  ctx.fillStyle = "#bb6969";
  ctx.fill();
  ctx.closePath();
  console.log(ballX);


}



$(document).keydown(function(e) {
    console.log(e.keyCode);
    //request with URL,data,success callback
    $.post("http://localhost:5000/api",
    {player1Input:0,player2Input:e.keyCode},
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
