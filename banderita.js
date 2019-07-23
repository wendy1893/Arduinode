var cinco = require("johnny-five");
circuito = new cinco.Board();
var bombillo, motorcito, celda;
var turno=0;

circuito.on("ready", prender);



function prender()
{
  var configuracion = {pin: "A0", freq: 50};
  celda = new cinco.Sensor(configuracion);

  bombillo = new cinco.Led(13);
  bombillo.on();

  motorcito= new cinco.Servo(9);
  motorcito.to(0);
  ondear();
}

function ondear()
{
  console.log("Luz: " + celda.value);
  var luz = celda.value;
  if(luz>800)
  {
    if (turno == 1)
    {
      turno = 0;
      motorcito.to(50);
    }
    else
    {
      turno = 1;
      motorcito.to(110)
    }
  }
  else
    {
      motorcito.to(0);
    }

  setTimeout(ondear,1000);
}
