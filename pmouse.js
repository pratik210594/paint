function _(selector){
  return document.querySelector(selector);
}
function setup(){
  let canvas = createCanvas(650, 600);
 // canvas.parent("canvas-wrapper");
  background(255);
}
function mouseDragged(){
  let type = "pencil";//_("#pen-pencil").checked?"pencil":"brush";
  let size = 2;//parseInt(_("#pen-size").value);
  let color = "black";
  fill(color);
  stroke(color);
  if(type == "pencil"){
    line(pmouseX, pmouseY, mouseX, mouseY);
  } else {
    ellipse(mouseX, mouseY, size, size);
  }
}
//_("#reset-canvas").addEventListener("click", function(){
 // background(255);
//});
//_("#save-canvas").addEventListener("click",function(){
 // saveCanvas(canvas, "sketch", "png");
//});