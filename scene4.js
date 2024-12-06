function scene4(){
  scene4timer++
  image(bg4,bgx,bgy)
   image(bg4,bgx,bgy-1000)
  image(bg4,bgx,bgy-2000)
  if(round == 12){
        image(finalbg,-1800,0,2400,4000)
     image(finalbg,0,fbgy)
  
  if(shiftup == true){
    fbgy++
  }
    if(dist(avi.x,0,fbgy+140,0)<10){
      scene = 5;
    }
     }
  avi.render()
  avi.motion()
  trigger1.render()
  trigger1.motion()
  trigger1.collision()
  trigger2.render()
  trigger2.motion()
  trigger2.collision()
  trigger3.render()
  trigger3.motion()
  trigger3.collision()
  trigger4.render()
  trigger4.motion()
  trigger4.collision()
   trigger5.render()
  trigger5.motion()
  trigger5.collision()
  boss.render()
  boss.motion()
  boss.bosscollision()
  if (scene4timer<400 ){
    fill(255,255,255,150)
    rect(0,0,600,600)
    image(dslarge,0,0)
    fill(30,150,50,(scene4timer/2))
    rect(0,0,600,600)
    if (scene4timer>80){
      image(txt41,100,100)
    }
    if (scene4timer>150 ){
      image(txt42,85,200)
    }
    if (scene4timer>250 )
    { image(txt43,100,350)}
  
    
  }
  if (scene4timer>400 && scene4timer <600){
    fill(0,0,0,80)
    rect(80,60,470,150)
      image(txt44,90,70)
    }
  if (shiftup == true){
    bgy++
  }
   battle()
  if(bossdmg == 1){
  image(bossdmg1,0,0)   
     }
   if(bossdmg ==  2){
  image(bossdmg2,0,0)   
     }
  if(bossdmg == 3){
  image(bossdmg3,0,0)   
     }
   if(bossdmg ==  4){
  image(bossdmg4,0,0)   
     }
  if(bossdmg == 5){
  image(bossdmg5,0,0)   
     }
   if(bossdmg ==  6){
  image(bossdmg6,0,0)   
     }
   if(mydmg == 1){
  image(mydmg1,400,200)   
     }
   if(mydmg ==  2){
  image(mydmg2,400,200)   
     }
  if(mydmg == 3){
  image(mydmg3,400,200)   
     }
   if(mydmg ==  4){
  image(mydmg4,400,200)   
     }
  if(mydmg == 5){
  image(mydmg5,400,200)   
     }
  image(frame,0,0)
}

class avatar{
  constructor(){
     this.x = 270
    this.y = 500
     this.walk = [spt1,spt2,spt1,spt3]
    this.imgcount = 0
    this.shake = [shake1,spt1,shake2,spt1]
    this.sprite = this.walk
  }
  render(){
     fill(0,0,0,0)
    noStroke()
     rect(this.x,this.y,70,70)
     image(this.sprite[this.imgcount],this.x,this.y,70,70)
  }
  motion(){
   if (fightmode == false){
     if((keyIsDown(UP_ARROW) || keyIsDown(87) )&& this.y >200){
      this.y--
       this.sprite = this.walk
       if(frameCount %10 == 0){
      this.imgcount++
         }
       shiftup = true;
     } else if (keyIsDown(UP_ARROW) || keyIsDown(87) ){
               this.sprite = this.walk
       shiftup = true;
       if(frameCount %10 == 0){
      this.imgcount++
         }  
                }
                else {
       shiftup = false;
     }
  if((keyIsDown(LEFT_ARROW) || keyIsDown(65) )){
   this.sprite = this.shake
       if(frameCount %20 == 0){
      this.imgcount++
         }
     }
     if((keyIsDown(RIGHT_ARROW) || keyIsDown(68) )){
        this.sprite = this.shake
      if(frameCount %20 == 0){
      this.imgcount++
         }}
   
     if((keyIsDown(DOWN_ARROW) || keyIsDown(83) )){
        this.sprite = this.shake
      if(frameCount %20 == 0){
      this.imgcount++
         }
       
     }
    if(this.imgcount >= this.sprite.length){
      this.imgcount = 0
    }
   } else {
     shiftup = false;
   }
    }
  
}

class trigger{
  constructor(xval,yval){
     this.x = xval
    this.y = yval 
    this.visib = true
}
  render(){
    if(this.visib == true){
     fill(0,0,0,0)
 rect(this.x,this.y,600,10)  
  }
}
  motion(){
    if(shiftup == true){
      this.y = this.y+1
    }
  }
collision(){
     if(this.visib == true && round<12){
   if (dist(0,avi.y,0,this.y)<20){
        fightmode = true;
     triggercount=1;
     this.visib = false;
     } 
     }
  }
  bosscollision(){
     if(this.visib == true && round<12){
   if (dist(0,avi.y,0,this.y)<50){
        fightmode = true;
     triggercount=2;
     this.visib = false;
     } 
     }
  }
}
function battle(){
  if (fightmode == true){
if(triggercount == 1){
  triggertimer++
  if(triggertimer >2 && triggertimer <9){
    fill('white')
    rect(0,0,600,600)
  }
  if(triggertimer >16 && triggertimer <23){
    fill('white')
    rect(0,0,600,600)
  }
  
  if(triggertimer >30 && triggertimer <37){
    fill('white')
    rect(0,0,600,600)
  } 
  if(triggertimer >37){
 image(fightbg,0,0) 
    image(btext1,0,400)
    image(keepwalk,0,500)
    image(instrct4,10,500,180,80)
    if((dist(mouseX,0,300,0)<150)&& dist(mouseY,0,550,0)<50){
      image(keepwalkhover,0,500)
    }
    if((mouseclick == true)&&(dist(mouseX,0,300,0)<150)&& dist(mouseY,0,550,0)<50){
      triggertimer = 0;
      fightmode = false;
  }
}
}
 if(triggercount == 2){
   if(round == 0){
  triggertimer++
  if(triggertimer >2 && triggertimer <9){
    fill('white')
    rect(0,0,600,600)
  }
  if(triggertimer >16 && triggertimer <23){
    fill('white')
    rect(0,0,600,600)
  }
  
  if(triggertimer >30 && triggertimer <37){
    fill('white')
    rect(0,0,600,600)
  } 
  if(triggertimer >37){
 image(fightbg,0,0) 
    image(btext1,0,400)
    image(keepwalk,0,500)
    image(keepwalk,0,500)
    if((dist(mouseX,0,300,0)<150)&& dist(mouseY,0,550,0)<50){
      image(keepwalkhover,0,500)
    }
    if((mouseclick == true)&&(dist(mouseX,0,300,0)<150)&& dist(mouseY,0,550,0)<50){
      triggertimer = 0;
      round = 1;
  }
}
   }
   if (round == 1){
     actiontimer++
   
     if(actiontimer > 1 && actiontimer < 20){
       image(fightbg,0,0) 
    image(btext1,random(-2,5),random(400,403))
    image(duow,random(-2,5),random(500,503))
     image(duof,random(-2,5),random(500,503))
     }
     else {
     image(fightbg,0,0) 
    image(btext1,0,400)
    image(duow,0,500)
     image(duof,0,500)
    if((dist(mouseX,0,150,0)<75)&& dist(mouseY,0,550,0)<50){
      image(duowhover,0,500)
    }
     if((dist(mouseX,0,450,0)<75)&& dist(mouseY,0,550,0)<50){
      image(duofhover,0,500)
    }
       
  if((mouseclick == true)&&(dist(mouseX,0,150,0)<75)&& dist(mouseY,0,550,0)<50){
   peace = true;
  }
    if((mouseclick == true)&&(dist(mouseX,0,450,0)<75)&& dist(mouseY,0,550,0)<50 && fight == false){
   
      bossdmg++;
      fight = true; 
   }
       if (fight == true){
          myactiontimer++
          image(btext3,0,400)
       if(myactiontimer >100){
      
        round = 2;
      actiontimer = 0;
         myactiontimer = 0;
        fight = false;
      }
       }
        if (peace == true){
       myactiontimer++
    image(btext2,0,400)
    if(myactiontimer >100){
      image(btext6,0,400)
    }
    if(myactiontimer >170){
      
        round = 2;
      myactiontimer = 0;
      actiontimer = 0;
      peace = false;
    }
}
   }
   }
   if(round == 2){
     actiontimer ++
      image(fightbg,0,0) 
    image(btext4,0,400)
     image(bosstxt1,300,50)
     if (actiontimer ==100){
       mydmg++
     }
     if (actiontimer >150){
       myactiontimer = 0;
       actiontimer = 0;
       round = 3
      }
  }
   if(round == 3){
    actiontimer++
     image(fightbg,0,0) 
    image(btext1,0,400)
    image(duow,0,500)
     image(duof,0,500)
    if((dist(mouseX,0,150,0)<75)&& dist(mouseY,0,550,0)<50){
      image(duowhover,0,500)
    }
     if((dist(mouseX,0,450,0)<75)&& dist(mouseY,0,550,0)<50){
      image(duofhover,0,500)
    }
     
       if((mouseclick == true)&&(dist(mouseX,0,150,0)<75)&& dist(mouseY,0,550,0)<50){
    peace = true;
  }
    if((mouseclick == true)&&(dist(mouseX,0,450,0)<75)&& dist(mouseY,0,550,0)<50 && fight == false){
   
      bossdmg++;
      fight = true;
     
      
   }
       if (fight == true){
          myactiontimer++
          image(btext3,0,400)
       if(myactiontimer >100){
      
        round = 4;
      actiontimer = 0;
         myactiontimer = 0;
        fight = false;
      }
       }
     if (peace == true){
       myactiontimer++
    image(btext2,0,400)
        if(myactiontimer >100){
      image(btext6,0,400)
    }
    if(myactiontimer >170){
      
        round = 4;
      myactiontimer = 0;
      actiontimer = 0;
      peace = false;
    }
     }
}
 if(round == 4){
     actiontimer ++
      image(fightbg,0,0) 
    image(btext4,0,400)
   image(bosstxt2,290,50)
     if (actiontimer ==100){
       mydmg++
     }
     if (actiontimer >150){
       myactiontimer = 0;
       actiontimer = 0;
       round = 5
      }
  }
   
   
   if(round == 5){
    actiontimer++
     image(fightbg,0,0) 
    image(btext1,0,400)
    image(duow,0,500)
     image(duof,0,500)
    if((dist(mouseX,0,150,0)<75)&& dist(mouseY,0,550,0)<50){
      image(duowhover,0,500)
    }
     if((dist(mouseX,0,450,0)<75)&& dist(mouseY,0,550,0)<50){
      image(duofhover,0,500)
    }
     
       if((mouseclick == true)&&(dist(mouseX,0,150,0)<75)&& dist(mouseY,0,550,0)<50){
    peace = true;
  }
    if((mouseclick == true)&&(dist(mouseX,0,450,0)<75)&& dist(mouseY,0,550,0)<50 && fight == false){
   
      bossdmg++;
      fight = true;
     
      
   }
       if (fight == true){
          myactiontimer++
          image(btext3,0,400)
       if(myactiontimer >100){
      
        round = 6;
      actiontimer = 0;
         myactiontimer = 0;
        fight = false;
      }
       }
     if (peace == true){
       myactiontimer++
    image(btext2,0,400)
        if(myactiontimer >100){
      image(btext6,0,400)
    }
    if(myactiontimer >170){
      
        round = 6;
      myactiontimer = 0;
      actiontimer = 0;
      peace = false;
    }
     }
}
   if(round == 6){
     actiontimer ++
      image(fightbg,0,0) 
    image(btext4,0,400)
     image(bosstxt3,295,50)
     if (actiontimer == 100){
       mydmg++
     }
     if (actiontimer >150){
       myactiontimer = 0;
       actiontimer = 0;
       round = 7
      }
  }   
   if(round == 7){
    actiontimer++
     image(fightbg,0,0) 
    image(btext1,0,400)
    image(duow,0,500)
     image(duof,0,500)
    if((dist(mouseX,0,150,0)<75)&& dist(mouseY,0,550,0)<50){
      image(duowhover,0,500)
    }
     if((dist(mouseX,0,450,0)<75)&& dist(mouseY,0,550,0)<50){
      image(duofhover,0,500)
    }
     
       if((mouseclick == true)&&(dist(mouseX,0,150,0)<75)&& dist(mouseY,0,550,0)<50){
    peace = true;
  }
    if((mouseclick == true)&&(dist(mouseX,0,450,0)<75)&& dist(mouseY,0,550,0)<50 && fight == false){
   
      bossdmg++;
      fight = true;
     
      
   }
       if (fight == true){
          myactiontimer++
          image(btext3,0,400)
       if(myactiontimer >100){
      
        round = 8;
      actiontimer = 0;
         myactiontimer = 0;
        fight = false;
      }
       }
     if (peace == true){
       myactiontimer++
    image(btext2,0,400)
        if(myactiontimer >100){
      image(btext6,0,400)
    }
    if(myactiontimer >170){
      
        round = 8;
      myactiontimer = 0;
      actiontimer = 0;
      peace = false;
    }
     }
}
 if(round == 8){
     actiontimer ++
      image(fightbg,0,0) 
    image(btext4,0,400)
   image(bosstxt4,290,50)
     if (actiontimer == 100){
       mydmg++
     }
     if (actiontimer >150){
       myactiontimer = 0;
       actiontimer = 0;
       round = 9
      }
  }  
    if(round == 9){
    actiontimer++
     image(fightbg,0,0) 
    image(btext1,0,400)
    image(duow,0,500)
     image(duof,0,500)
    if((dist(mouseX,0,150,0)<75)&& dist(mouseY,0,550,0)<50){
      image(duowhover,0,500)
    }
     if((dist(mouseX,0,450,0)<75)&& dist(mouseY,0,550,0)<50){
      image(duofhover,0,500)
    }
     
       if((mouseclick == true)&&(dist(mouseX,0,150,0)<75)&& dist(mouseY,0,550,0)<50){
    peace = true;
  }
    if((mouseclick == true)&&(dist(mouseX,0,450,0)<75)&& dist(mouseY,0,550,0)<50 && fight == false){
   
      bossdmg++;
      fight = true;
     
      
   }
       if (fight == true){
          myactiontimer++
          image(btext3,0,400)
       if(myactiontimer >100){
      
        round = 10;
      actiontimer = 0;
         myactiontimer = 0;
        fight = false;
      }
       }
     if (peace == true){
       myactiontimer++
    image(btext2,0,400)
        if(myactiontimer >100){
      image(btext6,0,400)
    }
    if(myactiontimer >170){
      
        round = 10;
      myactiontimer = 0;
      actiontimer = 0;
      peace = false;
    }
     }
}  
if(round == 10){
     actiontimer ++
      image(fightbg,0,0) 
    image(btext4,0,400)
  image(bosstxt5,300,50)
     if (actiontimer == 100){
       mydmg++
     }
     if (actiontimer >150){
       myactiontimer = 0;
       actiontimer = 0;
       round = 11
      }
  }  
    if(round == 11){
    actiontimer++
     image(fightbg,0,0) 
    image(btext1,0,400)
    image(know,0,500)
    if((dist(mouseX,0,300,0)<150)&& dist(mouseY,0,550,0)<50){
      image(knowhover,0,500)
    }
    if((mouseclick == true)&&(dist(mouseX,0,300,0)<150)&& dist(mouseY,0,550,0)<50){
      round = 12
      fightmode = false;
      bossdmg = 0;
      mydmg = 0;
     }
}  
   
   }
   }
  
  
}