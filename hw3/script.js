// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = [0, canvas.width, canvas.width/2];
let y = [0, 0, canvas.height];
let dx = [5, -5, -5];
let dy = [5, 5, -5];
let r = [10, 30, 50];
let m = [0.5, 0.6, 0.7];
let color = ["#EB7A77", "#8AD8B9", "#3A8FB7"];


// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  for(let i = 0; i < 3; i++)
  {
    x[i] = x[i] + dx[i];
    y[i] = y[i] + dy[i];

    if(x[i] < 0 || x[i] > canvas.width) {
      dx[i] = -dx[i];
      color[i]= "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    if(y[i] < 0 || y[i] > canvas.height) {
      dy[i] = -dy[i];
      color[i]= "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    for(let j = 1; j < 3; j++){
      if((x[i]-x[(i+j)%3])*(x[i]-x[(i+j)%3]) + (y[i]-y[(i+j)%3])*(y[i]-y[(i+j)%3]) < (r[i]+r[(i+j)%3])*(r[i]+r[(i+j)%3]))
      {
        let tx=dx[i], ty=dy[i];
        dx[i]=((m[i]-m[(i+j)%3])*tx+2*m[(i+j)%3]*dx[(i+j)%3])/(m[i]+m[(i+j)%3]);
        dy[i]=((m[i]-m[(i+j)%3])*ty+2*m[(i+j)%3]*dy[(i+j)%3])/(m[i]+m[(i+j)%3]);

        dx[(i+j)%3]=((m[(i+j)%3]-m[i])*dx[(i+j)%3]+2*m[i]*tx/(m[i]+m[(i+j)%3]));
        dy[(i+j)%3]=((m[(i+j)%3]-m[i])*dy[(i+j)%3]+2*m[i]*ty/(m[i]+m[(i+j)%3]));
      }

    }
  }


    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...



  


//  if((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) < (r1+r2)*(r1+r2))
//  {
//    [dx1, dy2, dx2, dy2] = [dx2, dy2, dx1, dy2];
//    [color1, color2] = [color2, color1];
//  }

  for(let i = 0; i < 3; i++)
  {
    drawBall(x[i], y[i], r[i], color[i]);
  }
    requestAnimationFrame(draw);
}
draw();