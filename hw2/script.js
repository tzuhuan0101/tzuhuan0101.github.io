// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 10, dy = 10, r = 30, color = "#0095DD";
let canMove = false;

// 畫圓形
function drawBall() 
{
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
  ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

// 按下按鍵時觸發
document.addEventListener("keydown", keyDownHandler);
function keyDownHandler(e) 
{
	if(e.key == "ArrowRight")        x += dx;
	else if(e.key == "ArrowLeft")    x -= dx;
    else if(e.key == "ArrowUp")      y -= dy;
	else if(e.key == "ArrowDown")    y += dy;
}

// TODO: 滑鼠移動(mousemove)時觸發，改變位置(x, y)為滑鼠目前位置(e.clientX, e.clientY)
// ...
document.addEventListener("mousemove", mouseMoveHandler);
function mouseMoveHandler(e) 
{
  if(canMove)
  {
    
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
  }
  
}

document.addEventListener("mousedown", mouseDownHandler);
document.addEventListener("mouseup", mouseUpHandler);

function mouseDownHandler(e) 
{
  x=e.clientX-canvas.offsetLeft;
  y=e.clientY-canvas.offsetTop;
  color= "#" + Math.floor(Math.random()*16777215).toString(16);
  canMove = true;
}

function mouseUpHandler(e) 
{
  canMove = false;
}

// 更新畫布
function draw() 
{	
    drawBall();
    requestAnimationFrame(draw);
}
draw();