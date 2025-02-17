let jac;
let textarray1;
let textarray2;
let textarray3;//this will be where we store the points eventually
let distance;
let size;
let opacity;
function preload() {
jac = loadFont('Jacquard12-Regular.ttf');
}


function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('canvas3');
 	textFont(jac);
  
}


  function draw() {
	background(0);
	textSize(100);
    color('white');
//text("stabilize",100,200);
       textarray1 = jac.textToPoints('traces', 140, 130, 150, {sampleFactor:0.3});
   textarray2 = jac.textToPoints('traces', 140, 330, 150, {sampleFactor:0.3});
       textarray3 = jac.textToPoints('traces', 140, 530, 150, {sampleFactor:0.3});
if(mouseX<300){
   linepos = map(mouseX,0,300,-30,3) 

}
    if(mouseX>=300){
     linepos = map(mouseX,300,600,3,30) 
     
    }
  if(mouseY<300){
randomamount = map(mouseY,0,300,10,0);
       }
 if(mouseY>=300){
   randomamount = map(mouseY,300,600,0,10);
       }
for(let i = 0; i < textarray1.length; i++){
	   fill('white');
  strokeWeight(0);
  distance = dist(mouseX,mouseY,textarray1[i].x,textarray1[i].y)
  size = map(distance,0,15,5,0.5,true)
  rect(textarray1[i].x, textarray1[i].y,size,size)

}
    for(let i = 0; i < textarray2.length; i++){
	   fill(255,255,255,opacity);
      
      distance = dist(mouseX,mouseY,textarray2[i].x,textarray2[i].y)
       opacity = map(distance,0,15,255,50,true)
 
  rect(textarray2[i].x, textarray2[i].y,3)

 
}
       for(let i = 0; i < textarray3.length; i++){
	   fill(255,255,255,opacity);
      
      distance = dist(mouseX,mouseY,textarray3[i].x,textarray3[i].y)
       opacity = map(distance,0,40,255,80,true)
       size = map(distance,0,10,5,0.6,true)
  rect(textarray3[i].x, textarray3[i].y,size)

 
}
  /*  for(let i = 0; i < textarray2.length; i++){
	   stroke('white');
  strokeWeight(2);
  line(textarray2[i].x + random(-1,1), textarray2[i].y + random(-1,1),(textarray2[i].x)+linepos, textarray2[i].y)

}
        for(let i = 0; i < textarray3.length; i++){
	   stroke('white');
  strokeWeight(1);
  line(textarray3[i].x , textarray3[i].y + random(-randomamount,randomamount),(textarray3[i].x)+linepos, textarray3[i].y + random(-randomamount,randomamount))

}
*/
  }
