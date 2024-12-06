let shaketime = 0
let shake = 500

function scene1(){
  image(start,0,0)
 image(heal,0,525)
 if(dist(mouseX,mouseY,305,275)<70) {
  image(starthover,0,0)
   image(heal,0,525)
}
  if(dist(mouseX,mouseY,305,275)<70 && mouseclick == true) {strt = true;} 
if (strt == true){background("#D8CDDB");
    image(church,0,0)
  
  friend();
  //text box
  noStroke()
  
    dialogue();
         }
 }

  
function friend(){
  /* fill(0)
circle(200,230,150)
rect(100,300,200,300) */
  image(frnd,100,100)
}
function dialogue(){
   fill(0)
 if(clicks == 0){
image(instrct1,100,50)
   image(txt1,50,420)
 }
  if(clicks == 1){
     textSize(40);
      image(chc1,50,420)
   image(chc2,50,500)
    if((dist(mouseX,0,275,0)<225)&& dist(mouseY,0,457.5,0)<35){
       image(chc1,45,420,510,71.4)
    }
     if((dist(mouseX,0,275,0)<225)&& dist(mouseY,0,552.5,0)<35){
       image(chc2,45,500,510,71.4)
    }
    if((mouseclick == true)&&(dist(mouseX,0,275,0)<225)&& dist(mouseY,0,495,0)<75){
      clicks = 2;
    }
  }
  if( clicks == 2){
     textSize(40);
  
    image(chc1,50+(random(3)),420+(random(3)))
   image(chc2,50+(random(3)),500+(random(3)))
    fill(255,0,0,100)
    rect(0,0,600,600)
   image(popup1,100+(random(2)),100+(random(2)))
 
  shaketime = millis()
  }
if (clicks == 3){
   fill('blue')
     textSize(40)
  if (millis()-shaketime <= shake){
     image(txt3,50+(random(3)),420+(random(3))) 
    } else{
 image(txt3,50,420)
     }
}
  if(clicks ==4){
  image(txt2,50,420)
  }
  if(clicks ==5){
    fill('blue')
     textSize(40)
   image(chc3,50,420)
   image(chc4,50,500)
     if((dist(mouseX,0,275,0)<225)&& dist(mouseY,0,457.5,0)<35){
       image(chc3,45,420,510,71.4)
    }
     if((dist(mouseX,0,275,0)<225)&& dist(mouseY,0,552.5,0)<35){
       image(chc4,45,500,510,71.4)
    }
    if((mouseclick == true)&&(dist(mouseX,0,275,0)<225)&& dist(mouseY,0,495,0)<75){
      clicks = 6;
      shaketime = millis()
    }
  }
  if (clicks == 6){
    if (millis()-shaketime <= shake){
     image(txt4,50+(random(3)),420+(random(3))) 
    } else{
   image(txt4,50,420)
    }
}
  if (clicks == 7){
    scene = 2;
  }

}
