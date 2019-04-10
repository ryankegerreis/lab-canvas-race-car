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
function drawCar(){
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
class Obstacle {
  
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    // this.frames=frames;
  }

}

// let f = 0


function updateCanvas(){  
  let canvas = document.querySelector('canvas');
  let ctx=canvas.getContext('2d');
  let w = 400;
  let h = 511;

  // ctx.clearRect(0,0,w,h) 
  drawBoard()
  drawCar()
  updateObstacles()
  // console.log("It's updating")
  window.requestAnimationFrame(updateCanvas)
 }

//Obstacles
function updateObstacles() {
//   let canvas = document.querySelector('canvas');
//   let ctx=canvas.getContext('2d');
//   // for (i = 0; i < myObstacles.length; i++) {
//   //   myObstacles[i].x += -1;
//   //   myObstacles[i].updateCanvas();
//   // }
//   // console.log("obstacles function has been called")
  
//   frames += 1;

//   if (frames % 120 === 0) {
//     console.log("the conditional happened")
//     var x = drawBoard.w;
//     var minHeight = 20;
//     var maxHeight = 100;
//     var height = Math.floor(
//       Math.random() * (maxHeight - minHeight + 1) + minHeight
//     );
//     var minGap = 50;
//     var maxGap = 200;
//     var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
//     myObstacles.push(new Obstacle(10, height, "red", 20, 0));
//     console.log(myObstacles)
//       // ctx.fillStyle='blue'
//       // ctx.fillRect(150,0,100,100)

//   }

//   for (i = 0; i < myObstacles.length; i++) {
//     myObstacles[i].x += -1;
//     // updateCanvas();
//   }
}
