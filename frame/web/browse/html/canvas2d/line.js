let canvas = document.getElementById("line");
let cvsCtx= canvas.getContext("2d");


//绘制直线
cvsCtx.strokeStyle = "#FF0000";
cvsCtx.lineWidth = 2;
cvsCtx.beginPath();
cvsCtx.moveTo(10, 10);
cvsCtx.lineTo(100, 100);

//添加折線
cvsCtx.moveTo(100, 100);
cvsCtx.lineTo(300, 30);

//弧線 x,y,半徑，起始角度，結束角度，是否為逆時針方向顯示
cvsCtx.arc(200, 200, 100, 0, Math.PI*(1/2), false);

cvsCtx.stroke();
cvsCtx.closePath();


// 事件感應
function check(event){
	console.log(event.clientX+'-'+event.clientY);
}