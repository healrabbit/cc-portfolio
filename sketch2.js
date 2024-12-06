let img;

function preload() {

img = loadImage("moneybg.jpeg");
}
  function setup() {
 let canvas = createCanvas(600, 600);
  canvas.parent('canvas');
}

function draw() {
    background('transparent');
  if(mouseIsPressed){
   
  }
  image(img, 0, 0);
    fill(100,200,30,100);
  if(mouseIsPressed){
   fill(255,0,0,180);
  }
rect(0,0,600,600)

    noStroke()
  //face 
  push()
  let faceHeight = mouseY ;
  let faceWidth = mouseX;
  
   let HfacePara = constrain(mouseY, 300, 550);
  let WfacePara= constrain(mouseX, 100, 550);
  let center = (width/2)
let eyeMove = WfacePara/4.5*(mouseX/500);
fill('yellow')
  if( mouseIsPressed){
    fill('purple');
     triangle(center, center,center + (WfacePara/3)+WfacePara/8,center,  (center+WfacePara/4)+WfacePara/8, center-WfacePara/2); 
     triangle(center, center,center - (WfacePara/3)-WfacePara/8,center,  (center-WfacePara/4)-WfacePara/8, center-WfacePara/2); 
  }

  
  ellipse(width/2,height/2, WfacePara, WfacePara)
  pop()
  if (((WfacePara/2)/4.5*(mouseX/200))<WfacePara){
   eyeMove = WfacePara/2*(mouseX/1000);
  }
  //if(((WfacePara+HfacePara/2)/4.5*(mouseX/200))>center - WfacePara/4.5){
  // eyeMove= center - (WfacePara/4.5);
  //}
  else {
    eyeMove = WfacePara/3;
  }
  
  //eyes
  let eyeSize = 1/5*(WfacePara);
  let pupil = random((mouseX/8),(mouseX/14))
  
  //left
  fill('white')
  ellipse(center-15 - eyeMove,center -WfacePara/4.5,eyeSize)
  fill('black')
  ellipse(center-12 - eyeMove*1.2,center -WfacePara/4.5,eyeSize/4*(pupil/20+1))
  //right 
  fill('white')
  ellipse(center +15 + eyeMove,center - WfacePara/4.5,eyeSize)
  fill('black')
  ellipse(center+12 + eyeMove*1.2,center -WfacePara/4.5,eyeSize/4* (pupil/20+1))
  
  
  //tongue
  let tongue= constrain(mouseY, 300, center+(WfacePara-(WfacePara/2)))
  fill('hotpink')
  
   bezier (center-12-(eyeMove/2),height/2+10, (center-12-(eyeMove/2)), tongue, center+12+(height/30),tongue, center+12+(eyeMove/2), height/2+10)
  
  //mouth
  smile = random(4.5,7)
  fill('yellow')
    if( mouseIsPressed){
    fill('purple');
  }

  stroke('black')
  strokeWeight(WfacePara/50)
   arc(width/2,height/2, WfacePara/2, WfacePara/5, 0, PI,OPEN );
    
   
}