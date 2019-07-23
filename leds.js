var jf=require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);

function prender()
{
  var bombillito = new jf.Led(9);
  bombillito.blink(1000);
  var bombillito2 = new jf.Led(7);
  bombillito2.blink(500);
  console.log("Hola mama ya se progrmar Hardaware con JavaScrip *-*");
  console.log("otro console de prueba");
}
