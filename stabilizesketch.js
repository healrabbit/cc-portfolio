let kunstler;
let textarray1;
let textarray2;
let textarray3;//this will be where we store the points eventually
 let linepos;
let randomamount;
let speed;

function preload() {
kunstler = loadFont('KUNSTLER.TTF');
}


function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('canvas');
 	textFont(kunstler);
  
}


  function draw() {
	background(0);
	textSize(100);
    color('white');
//text("stabilize",100,200);
       textarray1 = kunstler.textToPoints('stabilize', 100, 130, 200, {sampleFactor:0.2});
   textarray2 = kunstler.textToPoints('stabilize', 100, 330, 200, {sampleFactor:0.2});
       textarray3 = kunstler.textToPoints('stabilize', 100, 530, 200, {sampleFactor:0.3});
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
	   stroke('white');
  strokeWeight(2);
  line(textarray1[i].x, textarray1[i].y,(textarray1[i].x)+linepos, textarray1[i].y)

}
    for(let i = 0; i < textarray2.length; i++){
	   stroke('white');
  strokeWeight(2);
  line(textarray2[i].x + random(-1,1), textarray2[i].y + random(-1,1),(textarray2[i].x)+linepos, textarray2[i].y)

}
        for(let i = 0; i < textarray3.length; i++){
	   stroke('white');
  strokeWeight(1);
  line(textarray3[i].x , textarray3[i].y + random(-randomamount,randomamount),(textarray3[i].x)+linepos, textarray3[i].y + random(-randomamount,randomamount))

}
  }