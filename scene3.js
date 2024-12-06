 function scene3(){
   scene3timer++
    image(field,0,0,600,600)
   image(sidewalk,sidwx,sidwy)
   if(shiftleft == true){
     sidwx=sidwx-2
   } 
   if(shiftright == true && sidwx <0){
      sidwx=sidwx+2
      }
   if(scene3timer<200){
     image(instrct3,50,50)
   }
   
   if(ds.x<900){
     push()
     fill(0,0,0,fade1)
     rect(0,0,600,600)
     pop()
     fade1=fade1+1
   }
     char.render()
     char.motion()
    for(let o =0; o<objects.length; o++){
      objects[o].rend();
       objects[o].motion();
      objects[o].collision();
     }
   
      bird1.rend1()
   bird1.motion()
     bird1.collision1()
    
   
     bird2.rend2()
     bird2.motion()
     bird2.collision2()
     
     bird3.rend3()
     bird3.motion()
     bird3.collision3()
     
    bird4.rend4()
     bird4.motion()
     bird4.collision4()
   
     ds.rend5()
     ds.motion()
     ds.endcollide()
     if (shiftleft == true){
       rightborder = rightborder-2;
     }
     if(shiftright == true){
       rightborder = rightborder+2;
     }
     if( rightborder <= 0){
       shiftleft = false;
     }
    console.log(fade1)
     if( popupon == true){
      settimer ++
     }
  if (settimer == 1){
    collide1 = true
    popuptimer = millis()
  }
   if (settimer < 255)
{  fade = (settimer*3)
} 
   
     
     if(collide1 == true && (millis()- popuptimer <popupx )){
       popup();
     } else if (collide1 == true && (millis()- popuptimer >=popupx )) {
       collide1 = false;
       popupon = false;
       settimer = 0;
       b1collide = false;
       b2collide = false;
       b3collide = false;
       b4collide = false;
     }
     
     function popup() {
       push()
       tint(255,fade)
       if(b1collide == true){
      image(bird1large,0,0)
       }
       if(b2collide == true){
      image(bird2large,0,0)
       }
       if(b3collide == true){
      image(bird3large,0,0)
       }
        if(b4collide == true){
      image(bird4large,0,0)
       }
       pop()
     }
   }
class character {
  constructor(){
    this.x = -30
    this.y = 430
     this.sprite = [sprite1, sprite2,sprite3,sprite2]
    this.imgcount = 0
  }
  render(){
     fill(0,0,0,0)
    noStroke()
     rect(this.x,this.y,50,100)
     image(this.sprite[this.imgcount],this.x,this.y,70,110)
  }
  motion(){
    if(scene3timer <60){
     this.x++
      if(frameCount %10 == 0){
      this.imgcount++
         }
    } 
    if((keyIsDown(DOWN_ARROW) || keyIsDown(83) )&& this.y <480){
      this.y++
      if(frameCount %10 == 0){
      this.imgcount++
         }
       if(this.imgcount >= this.sprite.length){
      this.imgcount = 0
    }
     }
   
     if((keyIsDown(UP_ARROW) || keyIsDown(87) )&& this.y >430){
      this.y--
       if(frameCount %10 == 0){
      this.imgcount++
         }
     }
     if((keyIsDown(LEFT_ARROW) || keyIsDown(65) )&& this.x >40){
      this.x=this.x-1
       shiftright = true;
       if(frameCount %10 == 0){
      this.imgcount++
         }
     }
       else if((keyIsDown(LEFT_ARROW) || keyIsDown(65) ) &&   sidwx <0){
       shiftright = true;   
          if(frameCount %10 == 0){
      this.imgcount++
         }
       }
     else{
       shiftright = false;
     }
      if((keyIsDown(RIGHT_ARROW) || keyIsDown(68) )&& this.x <400){
      this.x=this.x+1
        shiftleft = true;
      if(frameCount %10 == 0){
      this.imgcount++
         }}
     else if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68) )){
          shiftleft = true;
        if(frameCount %10 == 0){
      this.imgcount++
         }
     }
     if (keyIsPressed == false){
       shiftleft = false;
       shiftright = false;
     }
     if(this.imgcount >= this.sprite.length){
      this.imgcount = 0
    }
    if(reset3 == true){
      this.x = xval
      this.y = yval
    }
    }
  
}
     class obj {
       constructor(xval,yval/*,img*/){
         this.x = xval
         this.y = yval
         this.img = junk
          this.visib = true;
       }
       rend(){
         if (this.visib == true){
         fill(0,0,0,0)
         ellipse(this.x,this.y,50,50)
         image(this.img,this.x-30,this.y-25,70,50)
           if(reset3 == true){
             this.x = xval
         this.y = yval
           }
         }
       }
   motion(){
     if (shiftleft == true){
         this.x= this.x-2
         }
     if (shiftright == true){
       this.x = this.x+2
     }
     
   }
       collision(){
         if (dist(char.x,char.y,this.x,this.y)<70){
           this.visib = false
         }
       }

   }

class specialobj {
       constructor(xval,yval){
         this.x = xval
         this.y = yval
          this.visib = true;
       }
       rend1(){
         if(this.visib == true){
         fill(0,0,0,0)
         ellipse(this.x,this.y,50,50)
          image(bird1small,this.x-30,this.y-40)
         }
       }
   rend2(){
         if(this.visib == true){
         fill(0,0,0,0)
         ellipse(this.x,this.y,50,50)
      image(bird2small,this.x-40,this.y-40)
         }
       }
   rend3(){
         if(this.visib == true){
         fill(0,0,0,0)
         ellipse(this.x,this.y,50,50)  
     image(bird3small,this.x-70,this.y-50,100,100)
         }
   }
     rend4(){
         if(this.visib == true){
         fill(0,0,0,0)
         ellipse(this.x,this.y,50,50)
        image(bird4small,this.x-40,this.y-40)
         }
     }
       rend5(){
         if(this.visib == true){
         fill(0,0,0,0)
         ellipse(this.x,this.y,50,50)
      image(dssmall,this.x-40,this.y-40)
         }
     
       }
   motion(){
      if(this.visib == true){
     if (shiftleft == true){
         this.x= this.x-2
         }
     if (shiftright == true){
       this.x = this.x+2
     }
        if(reset3 == true){
             this.x = xval
         this.y = yval
           }
        
      }
   }
  collision1(){
     if(this.visib == true){
   if (dist(char.x,char.y,this.x,this.y)<100){
        popupon = true;
     this.visib = false;
     b1collide = true;
     } 
     }
  }
   collision2(){
     if(this.visib == true){
   if (dist(char.x,char.y,this.x,this.y)<100){
        popupon = true;
     b2collide = true;
     this.visib = false;
     } 
     }
  }
   collision3(){
     if(this.visib == true){
   if (dist(char.x,char.y,this.x,this.y)<100){
        popupon = true;
     b3collide = true;
     this.visib = false;
     } 
     }
  }
   collision4(){
     if(this.visib == true){
   if (dist(char.x,char.y,this.x,this.y)<100){
        popupon = true;
     b4collide = true;
     this.visib = false;
     } 
     }
  }
endcollide(){
  if(this.visib == true){
   if (dist(char.x,char.y,this.x,this.y)<70){
     reset3 = true
      this.visib = false;
     scene = 4;
   }
  }
}
   }