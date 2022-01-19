const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height)

const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];

ctx.fillStyle = "orange";
for (let i = 0; i < xArray.length-1; i++) {
  let x = xArray[i]*400/150;
  let y = yArray[i]*400/15;
  ctx.beginPath();
  ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
  ctx.fill();
}





//



var aArray = ["Italy", "France", "Spain", "USA", "Argentina"];
var bArray = [55, 49, 44, 24, 15];

var layout = {title:"World Wide Wine Production"};

var data = [{labels:aArray, values:bArray, type:"pie"}];

Plotly.newPlot("myPlot", data, layout);
