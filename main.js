mouse_event="empty";
var last_position_of_X, last_position_of_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouse_event="mousedown";
}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
current_position_of_X=e.clientX-canvas.offsetLeft;
current_position_of_Y=e.clientY-canvas.offsetTop;
if (mouse_event=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(last_position_of_X,last_position_of_Y);
    ctx.lineTo(current_position_of_X,current_position_of_Y);
    ctx.stroke();
}
last_position_of_X=current_position_of_X;
last_position_of_Y=current_position_of_Y;
}

canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouse_event="mouseleave";
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}