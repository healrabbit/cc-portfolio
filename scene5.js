function scene5(){
  console.log(mouseX,mouseY)
  image(end,0,0)
  if(dist(mouseX,mouseY,305,372)<150){
  image(endhover,0,0)
  }
  if(dist(mouseX,mouseY,305,372)<150 && mouseclick == true){
      strt = false;
     mouseclick = false;
 correctpath = 0;
     clicks = 0;
  scene3timer = 0;
 scene4timer = 0;
   sidwx = 0
 sidwy = 480;
  shiftleft = false;
 shiftright = false;
 collide1 = false;
popupon = false;
 popuptimer = 0;
 settimer = 0;
 b1collide = false;
 b2collide = false;
 b3collide = false;
 b4collide = false;
 popupx = 4000;
 fade = 0;
 fade1 = 0;
 
 bgx = 0
 bgy = -400
 triggercount = 2; 
 shiftup = false;
 fightmode = false;
 triggertimer = 0;
 round = 0;
 fight = false;
 peace = false;
 actiontimer = 0;
 myactiontimer = 0;
 mydmg = 0;
 bossdmg = 0;
 fbgy = -400; 
    reset3 = false;
 scene = 1;
     }
  
}