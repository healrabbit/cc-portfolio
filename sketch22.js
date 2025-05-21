let handPose;
let video;
let hands = [];
let knucklesandwich = false;
let sandwichtop 
let sandwichbottom
let font
let c;
let spacebar = false;
function preload() {
  handPose = ml5.handPose();
  font = loadFont('Jersey15-Regular.ttf');
  sandwichtop = loadImage('sandwichtop.png')
    sandwichbottom = loadImage('sandwichbottom.png')
}

function setup() {
  if(windowWidth>400){
  c = createCanvas(640, 480);
   c.parent('canvas')
    video = createCapture(VIDEO);
  video.size(640, 480);
  }
else{
    c = createCanvas(320, 240);
     c.parent('canvas')
    video = createCapture(VIDEO);
  video.size(320, 420);
}
 
  video.hide();
  handPose.detectStart(video, gotHands);
}

function draw() {
  frameRate(24);
  noStroke();
   translate(width,0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
 
 

//if a hand is detected
  for (let i = 0; i < hands.length; i++) {
      console.log(hands);
  //naming the knuckle and fingertip points as well as handedness 
    let hand = hands[i];
        let knuckle1 = hand.index_finger_mcp;
let knuckle2 = hand.middle_finger_mcp;
let knuckle3 = hand.ring_finger_mcp;  
    let knuckle4 = hand.pinky_finger_mcp;
let tip1 = hand.index_finger_tip;
let tip2 =  hand.middle_finger_tip;
let tip3 =  hand.ring_finger_tip;
let tip4 =  hand.pinky_tip;
let handedness = hand.handedness;

    
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      
      
      ///calling knucklesandwich if fist is active (the knuckle is below the fingertip)
  if(knuckle2.y < tip2.y & knuckle2.y < tip2.y & knuckle2.y < tip2.y){
    knucklesandwich = true;
  }   //no sandwich if fist is inactive
    else{
       fill(0, 255, 0);
       knucklesandwich = false;
    }
    }
    if ( knucklesandwich == true){
  
     
  //sandwich placement for left hand 
      if(handedness == "Left"){
         if(windowWidth>400){
           image(sandwichtop,knuckle4.x-15,knuckle2.y-((knuckle1.x-knuckle4.x)/2),(knuckle1.x-knuckle4.x)+((knuckle1.x-knuckle4.x)/2),(knuckle1.x-knuckle4.x)/1.2)
               image(sandwichbottom,knuckle4.x-15,tip2.y-((knuckle1.x-knuckle4.x)/3),(knuckle1.x-knuckle4.x)+((knuckle1.x-knuckle4.x)/2),(knuckle1.x-knuckle4.x)/1.2)
      }
      else{
         image(sandwichtop,knuckle4.x-15,knuckle2.y-((knuckle1.x-knuckle4.x)/2)-width/4,(knuckle1.x-knuckle4.x)+((knuckle1.x-knuckle4.x)/2),(knuckle1.x-knuckle4.x)/1.2)
               image(sandwichbottom,knuckle4.x-15,tip2.y-((knuckle1.x-knuckle4.x)/5)-width/3,(knuckle1.x-knuckle4.x)+((knuckle1.x-knuckle4.x)/2),(knuckle1.x-knuckle4.x)/1.2)
      }
    }
    //sandwich placement for right hand since the fingers are in reverse order 
          if(handedness == "Right"){
             if(windowWidth>400){
            image(sandwichtop,knuckle1.x-15,knuckle2.y-((knuckle4.x-knuckle1.x)/2),(knuckle4.x-knuckle1.x)+((knuckle4.x-knuckle1.x)/2),(knuckle4.x-knuckle1.x)/1.2)
               image(sandwichbottom,knuckle1.x-15,tip2.y-((knuckle4.x-knuckle1.x)/3),(knuckle4.x-knuckle1.x)+((knuckle4.x-knuckle1.x)/2),(knuckle4.x-knuckle1.x)/1.2)
    }
    else{
 image(sandwichtop,knuckle1.x-15,knuckle2.y-((knuckle4.x-knuckle1.x)/2)-width/4,(knuckle4.x-knuckle1.x)+((knuckle4.x-knuckle1.x)/2),(knuckle4.x-knuckle1.x)/1.2)
               image(sandwichbottom,knuckle1.x-15,tip2.y-((knuckle4.x-knuckle1.x)/3)-width/3,(knuckle4.x-knuckle1.x)+((knuckle4.x-knuckle1.x)/2),(knuckle4.x-knuckle1.x)/1.2)
    }
  }
       //capture instructions
      if(spacebar == false){
      push()
          translate(width,0);
  scale(-1, 1);
      fill('white');
      textFont(font);
     if(windowWidth>400){
      textSize(50);
      }
      else{
        textSize(25);
      }
      text('PRESS SPACE TO SNAP A PIC', width/7,height/1.1)
      pop()
      }
  }
  }
   for (let i = 0; i == hands.length; i++){
     knucklesandwich=false;
   }
  //if no hands detected/no fists made
    if(knucklesandwich == false){
       translate(width,0);
  scale(-1, 1);
      fill('white');
      textFont(font);
      if(windowWidth>400){
      textSize(100);
      }
      else{
        textSize(46);
      }
      text('MAKE A FIST!', width/6,height/4)
    }
}

  function keyPressed() {
  if (keyCode === 32) {
    spacebar = true;
   saveCanvas(c, 'KNUCKLESANDWICH', 'jpg');
    
  }
  }

function gotHands(results) {
  // Save the output to the hands variable
  hands = results;
}