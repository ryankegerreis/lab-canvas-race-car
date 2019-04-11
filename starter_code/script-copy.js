var myObstacles=[


];

//Startup Function
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    this.interval = setInterval(updateCanvas, 200);
    drawBoard();
    drawCar();
    updateCanvas();
    
  };

  // function startGame() {

  } 
// };

let frames=0;

//Game Board
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

//Car
function drawCar() {
  let canvas = document.querySelector('canvas');
  let ctx=canvas.getContext('2d');
  ctx.drawImage(carImage, car.x, car.y,25,25)
}

let carImage = new Image()
carImage.src="./images/car.png"

let car = {
  x:135,
  y:120,
}

// Controls
document.onkeydown = function(e) {
  console.log(e.keyCode)
  switch (e.keyCode) {
    case 37: car.x-=5;  break;
    case 39: car.x+=5;  break;
  }
}

//Obstacle Creator
// class Obstacle {
  
//   constructor(width, height, color, x, y) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.x = x;
//     this.y = y;
//     // this.frames=frames;
//   }

// }


function updateCanvas(){  
  let canvas = document.querySelector('canvas');
  let ctx=canvas.getContext('2d');


  // ctx.clearRect(0,0,w,h) 
  drawBoard()
  drawCar()
  window.requestAnimationFrame(updateCanvas)
 }

//Obstacles

