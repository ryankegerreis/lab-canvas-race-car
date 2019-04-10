window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    drawBoard();
    drawCar();
  };

  function startGame() {

  } 
};



function drawBoard() {
  let canvas = document.querySelector('canvas');
let w = 400;
let h = 511;
let ctx=canvas.getContext('2d');

  frames++; 
  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 110, 0)";
  ctx.fillRect(0, 0, 400, h);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "gray";
  ctx.fillRect(20, 0, 260, h);
  ctx.closePath();

  ctx.fillStyle = "white";
  ctx.fillRect(15, 0, 5, h);

  ctx.beginPath(198, 0);
  ctx.setLineDash([20, 20]);
  ctx.lineWidth = "4"
  ctx.strokeStyle = "white";
  ctx.moveTo(150, 500);
  ctx.lineTo(150, 0);
  ctx.stroke();
  
  ctx.fillStyle = "white";
  ctx.fillRect(280, 0, 5, h);
}

let carImage = new Image()
carImage.src="./images/car.png"


function drawCar(){
  let canvas = document.querySelector('canvas');
  let ctx=canvas.getContext('2d');
  // let car = {
  //   x:20,
  //   y:20,
  //   // accident: 40
  // }
  ctx.drawImage(carImage, 135, 120,25,25)
}

