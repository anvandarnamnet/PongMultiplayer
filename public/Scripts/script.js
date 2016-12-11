$(function() {
  // to get url shit:
  var right = $(".right");
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  //setInterval(updateData(ctx), 1000);
  setInterval(function(){
    $.getJSON("http://localhost:5000/api?gameID=123", function(data){
      //console.log("HEJ");
      paintPlayers(ctx, data.player1Position);
    });
  },100)
});

function paintPlayers(ctx, yPos1){

  // the first player:
  ctx.beginPath();
  ctx.rect(10, yPos1, 50, 100);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}



$(document).keydown(function(e) {
    console.log(e.keyCode);
    //request with URL,data,success callback
    $.post("http://localhost:5000/api",
    {player1Input:e.keyCode,player2Input:0},
    function(data, textStatus, jqXHR)
    {
          //data: Received from server
          console.log(data);
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
