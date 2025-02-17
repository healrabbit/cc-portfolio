let arbutus;
let textarray1;
let textarray2;
let textarray3;//this will be where we store the points eventually
let number =['0','1','2','3','4','5','6','7','8','9'];
let colorr =['red','blue','green','black','white'];
let score;
let move;
let timescore = 0;
let timedcolor;
function preload() {
arbutus = loadFont('Arbutus-Regular.ttf');
}


function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('canvas2');

 	textFont(arbutus);
 
}


  function draw() {
	background(255);
	textSize(100);
    color('white');
    frameRate(10);
//text("stabilize",100,200);
       textarray1 = arbutus.textToPoints('SCORE', 100, 130, 100, {sampleFactor:0.1});
   textarray2 = arbutus.textToPoints('SCORE', 100, 330, 100, {sampleFactor:0.1});
       textarray3 = arbutus.textToPoints('SCORE', 100, 530, 100, {sampleFactor:0.1});

  timescore = timescore+1;
    if(timescore>9){
      timescore=0;
    }
    if (timescore == 0){
       timedcolor = 'red';
    }
      if (timescore == 1){
       timedcolor = 'blue';
    }
   if (timescore == 2){
       timedcolor = 'green';
    }
        if (timescore == 3){
       timedcolor = 'black';
    }
      if (timescore == 4){
       timedcolor = 'red';
    }
   if (timescore == 5){
       timedcolor = 'blue';
    }
        if (timescore == 6){
       timedcolor = 'green';
    }
      if (timescore == 7){
       timedcolor = 'black';
    }
   if (timescore == 8){
       timedcolor = 'red';
    }
    
      if (timescore == 9){
       timedcolor = 'blue';
    }
 
  score = map((mouseX+mouseY)/2,0,600,-0.8,9,true);
for(let i = 0; i < textarray1.length; i++){
	  fill(random(colorr));
  stroke('white');
  strokeWeight(1);
  textSize(10);
  text(random(number),textarray1[i].x, textarray1[i].y)

}
    for(let i = 0; i < textarray2.length; i++){
      fill(random(colorr));
	   stroke(random(colorr));
  strokeWeight(1);
  textSize(10);
  text(ceil(score),textarray2[i].x, textarray2[i].y)
    }
  for(let i = 0; i < textarray3.length; i++){
      fill(timedcolor);
	   stroke('white');
  strokeWeight(1);
  textSize(10);
    if(timescore==9){
       move = 2;
       } else{
      move = 0;
    }
  text(timescore,textarray3[i].x+random(-move,move), textarray3[i].y+random(-move,move))
    
    }
  
  }
