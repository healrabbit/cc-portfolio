


var stabilizesketch = function(p){

p.kunstler;
p.textarray1;
p.textarray2;
p.textarray3;//this will be where we store the points eventually
p.linepos;
p.randomamount;
p.speed;

p.preload = function() {
p.kunstler = p.loadFont('KUNSTLER.TTF');
}


p.setup = function() {
 if(p.windowWidth>400){
p.createCanvas(600, 600);
  } else {
    p.createCanvas(300, 300);
  }

 	p.textFont(p.kunstler);
  
}


p.draw = function() {
     if(p.windowWidth<400){
	p.background(0);
	p.textSize(50);
    p.color('white');
 p.textarray = p.kunstler.textToPoints('stabilize', 30, 170, 125, {sampleFactor:0.3});
    p.textarray1 = p.kunstler.textToPoints('-----', -10, 55, 460, {sampleFactor:0.3});
    p.textarray2 = p.kunstler.textToPoints('-----', -10, 325, 460, {sampleFactor:0.3});
if(p.mouseX<300){
   p.linepos = p.map(p.mouseX,0,150,-30,3) 

}
    if(p.mouseX>=300){
     p.linepos = p.map(p.mouseX,150,300,3,30) 
     
    }
  if(p.mouseY<300){
p.randomamount = p.map(p.mouseY,0,150,10,0);
       }
 if(p.mouseY>=300){
   p.randomamount = p.map(p.mouseY,150,300,0,10);
       }

        for(let i = 0; i < p.textarray.length; i++){
	   p.stroke('white');
  p.strokeWeight(1);
  p.line(p.textarray[i].x , p.textarray[i].y + p.random(-p.randomamount,p.randomamount),(p.textarray[i].x)+p.linepos, p.textarray[i].y + p.random(-p.randomamount,p.randomamount))

}
     for(let i = 0; i < p.textarray1.length; i++){
	   p.stroke('white');
  p.strokeWeight(1);
  p.line(p.textarray1[i].x , p.textarray1[i].y + p.random(-p.randomamount,p.randomamount),(p.textarray1[i].x)+p.linepos, p.textarray1[i].y + p.random(-p.randomamount,p.randomamount))

}
       for(let i = 0; i < p.textarray2.length; i++){
	   p.stroke('white');
  p.strokeWeight(1);
  p.line(p.textarray2[i].x , p.textarray2[i].y + p.random(-p.randomamount,p.randomamount),(p.textarray2[i].x)+p.linepos, p.textarray2[i].y + p.random(-p.randomamount,p.randomamount))

}
     }
     else {
      	p.background(0);
	p.textSize(100);
    p.color('white');
 p.textarray = p.kunstler.textToPoints('stabilize', 60, 340, 250, {sampleFactor:0.3});
    p.textarray1 = p.kunstler.textToPoints('-----', -20, 110, 920, {sampleFactor:0.3});
    p.textarray2 = p.kunstler.textToPoints('-----', -20, 650, 920, {sampleFactor:0.3});
if(p.mouseX<300){
   p.linepos = p.map(p.mouseX,0,300,-30,3) 

}
    if(p.mouseX>=300){
     p.linepos = p.map(p.mouseX,300,600,3,30) 
     
    }
  if(p.mouseY<300){
p.randomamount = p.map(p.mouseY,0,300,10,0);
       }
 if(p.mouseY>=300){
   p.randomamount = p.map(p.mouseY,300,600,0,10);
       }

        for(let i = 0; i < p.textarray.length; i++){
	   p.stroke('white');
  p.strokeWeight(1);
  p.line(p.textarray[i].x , p.textarray[i].y + p.random(-p.randomamount,p.randomamount),(p.textarray[i].x)+p.linepos, p.textarray[i].y + p.random(-p.randomamount,p.randomamount))

}
     for(let i = 0; i < p.textarray1.length; i++){
	   p.stroke('white');
  p.strokeWeight(1);
  p.line(p.textarray1[i].x , p.textarray1[i].y + p.random(-p.randomamount,p.randomamount),(p.textarray1[i].x)+p.linepos, p.textarray1[i].y + p.random(-p.randomamount,p.randomamount))

}
       for(let i = 0; i < p.textarray2.length; i++){
	   p.stroke('white');
  p.strokeWeight(1);
  p.line(p.textarray2[i].x , p.textarray2[i].y + p.random(-p.randomamount,p.randomamount),(p.textarray2[i].x)+p.linepos, p.textarray2[i].y + p.random(-p.randomamount,p.randomamount))

}  
     }
  }


}








var scoresketch = function(p){
p.arbutus;
p.textarray1;
p.textarray2;
p.textarray3;

p.colorr =['red','blue','green','black'];
p.score=0;
p.move;
p.timescore = 0;
p.timedcolor;
p.gameball = [];
p.preload = function() {
p.arbutus = p.loadFont('Arbutus-Regular.ttf');
}
  p.setup = function() {
  if(p.windowWidth>400){
p.createCanvas(600, 600);
for(let i =0; i<9; i++){
     p.gameball.push(new game(p,p.random(p.width), p.random(300,560)))
   }
  } else {
    p.createCanvas(300, 300);
    for(let i =0; i<9; i++){
     p.gameball.push(new game(p,p.random(p.width), p.random(150,280)))
   }
  }

 	p.textFont(p.arbutus);
 
  
}


p.draw = function() {
      if(p.windowWidth>400){
	p.background(255);
	p.textSize(100);
    p.color('white');
   p.frameRate(20);
    p.textSize(24);
      p.text(p.score,p.mouseX-5,p.mouseY+3)
    
      if (p.score == 9){
     for(let i =0; i< p.gameball.length; i++){
    p.gameball[i].visib = true;
       p.score=0;
    }
      }
       p.textarray = p.arbutus.textToPoints('SCORE', 40, 200, 130, {sampleFactor:0.1});

  
    if (p.score == 0){
       p.timedcolor = 'red';
    }
      if (p.score == 1){
       p.timedcolor = 'blue';
    }
   if (p.score == 2){
       p.timedcolor = 'green';
    }
        if (p.score == 3){
       p.timedcolor = 'black';
    }
      if (p.score == 4){
       p.timedcolor = 'red';
    }
   if (p.score == 5){
       p.timedcolor = 'blue';
    }
        if (p.score == 6){
       p.timedcolor = 'green';
    }
      if (p.score == 7){
       p.timedcolor = 'black';
    }
   if (p.score == 8){
       p.timedcolor = 'red';
    }
    
      if (p.score == 9){
       p.timedcolor = 'blue';
    }
 
  
  for(let i = 0; i < p.textarray.length; i++){
    if(p.score==9){
      p.fill(255)
    } else{
        p.fill(p.random(p.colorr));
    }
	   p.stroke('white');
  p.strokeWeight(1);
  p.textSize(12);
    if(p.score==9){
       p.move = 2;
       } else{
      p.move = 0;
    }
  p.text(p.score,p.textarray[i].x+p.random(-p.move,p.move), p.textarray[i].y+p.random(-p.move,p.move))
    
    }
    
    
    
  for(let i =0; i< p.gameball.length; i++){
    p.gameball[i].render()
      p.gameball[i].move()
     p.gameball[i].catch()
       p.gameball[i].respawn()
   }
}

else{
    p.background(255);
	p.textSize(50);
    p.color('white');
   p.frameRate(20);
    p.textSize(12);
      p.text(p.score,p.mouseX-5,p.mouseY+3)
    
      if (p.score == 9){
     for(let i =0; i< p.gameball.length; i++){
    p.gameball[i].visib = true;
       p.score=0;
    }
      }
       p.textarray = p.arbutus.textToPoints('SCORE', 20, 100, 65, {sampleFactor:0.1});

  
    if (p.score == 0){
       p.timedcolor = 'red';
    }
      if (p.score == 1){
       p.timedcolor = 'blue';
    }
   if (p.score == 2){
       p.timedcolor = 'green';
    }
        if (p.score == 3){
       p.timedcolor = 'black';
    }
      if (p.score == 4){
       p.timedcolor = 'red';
    }
   if (p.score == 5){
       p.timedcolor = 'blue';
    }
        if (p.score == 6){
       p.timedcolor = 'green';
    }
      if (p.score == 7){
       p.timedcolor = 'black';
    }
   if (p.score == 8){
       p.timedcolor = 'red';
    }
    
      if (p.score == 9){
       p.timedcolor = 'blue';
    }
 
  
  for(let i = 0; i < p.textarray.length; i++){
    if(p.score==9){
      p.fill(255)
    } else{
        p.fill(p.random(p.colorr));
    }
	   p.stroke('white');
  p.strokeWeight(0.5);
  p.textSize(8);
    if(p.score==9){
       p.move = 2;
       } else{
      p.move = 0;
    }
  p.text(p.score,p.textarray[i].x+p.random(-p.move,p.move), p.textarray[i].y+p.random(-p.move,p.move))
    
    }
    
    
    
  for(let i =0; i< p.gameball.length; i++){
    p.gameball[i].render()
      p.gameball[i].move()
     p.gameball[i].catch()
       p.gameball[i].respawn()
   }
}
      }
    class game{
  
  constructor(p,xval,yval){
  
    this.p = p;
    this.x = xval
    this.y = yval
    this.visib = true;
  }
  
  
  render(){
   if(p.windowWidth>400){
    if (this.visib == true){
        p.fill(p.timedcolor)
      p.ellipse(this.x,this.y,20,20)
    }
}
else{
     if (this.visib == true){
        p.fill(p.timedcolor)
      p.ellipse(this.x,this.y,10,10) 
}
  }
}
  move(){
    this.x = this.x-3

  }
  catch(){
     if(this.visib == true){
    if(  p.dist(p.mouseX,p.mouseY,this.x,this.y)<30){
       this.visib = false;
       p.score=p.score+1;
 
      }
       }
  }
  respawn(){
    if(this.x<= 0){
      this.x = p.width;
    }
  }
 
 
  }

}



var tracessketch = function(p){
p.jac;
p.textarray;
p.textarray1;
p.textarray2
p.textarray3;
p.textarray4;
p.textarray5;
//this will be where we store the points eventually
p.distance;
p.size;
p.opacity;
p.preload = function() {
p.jac = p.loadFont('Jacquard12-Regular.ttf');
}


p.setup = function() {
     if(p.windowWidth>400){
p.createCanvas(600, 600);
     } else {
    p.createCanvas(300, 300);    
     }
 	p.textFont(p.jac);
   p.frameRate(30);

}


p.draw = function() {
      if(p.windowWidth>400){
	p.background(0);
	p.textSize(100);
   p.color(255);
  

       p.textarray = p.jac.textToPoints('traces', 50, 320, 220, {sampleFactor:0.2});
 p.textarray1 = p.jac.textToPoints('*',150,180, 220, {sampleFactor:0.2});
     p.textarray2 = p.jac.textToPoints('*', 400,270, 220, {sampleFactor:0.2});
     p.textarray3 = p.jac.textToPoints('*',280,520,220, {sampleFactor:0.2});
     p.textarray4 = p.jac.textToPoints('*',460,580,220, {sampleFactor:0.2});
     p.textarray5 = p.jac.textToPoints('*',140,580,220, {sampleFactor:0.2});
  if(p.mouseY<300){
p.randomamount = p.map(p.mouseY,0,300,10,0);
       }
 if(p.mouseY>=300){
   p.randomamount = p.map(p.mouseY,300,600,0,10);
       }

       for(let i = 0; i < p.textarray.length; i++){
	   p.fill(255,255,255,p.opacity);
    p.distance=p.dist(p.mouseX,p.mouseY,p.textarray[i].x,p.textarray[i].y)
       p.opacity = p.map(p.distance,0,60,255,80,true)
  p.size = p.map(p.distance,0,20,5,2,true)
  p.rect(p.textarray[i].x, p.textarray[i].y,p.size)

 
}
   for(let i = 0; i < p.textarray1.length; i++){
	   p.fill(255,255,255,p.opacity);
    p.distance=p.dist(p.mouseX,p.mouseY,p.textarray1[i].x,p.textarray1[i].y)
      p.opacity = p.random(0,200)
   p.size = p.map(p.distance,0,20,3,1.5,true)
  p.rect(p.textarray1[i].x, p.textarray1[i].y,p.size)
}
      for(let i = 0; i < p.textarray1.length; i++){
	   p.fill(255,255,255,p.opacity);
    p.distance=p.dist(p.mouseX,p.mouseY,p.textarray2[i].x,p.textarray2[i].y)
        p.opacity = p.random(0,200)
   p.size = p.map(p.distance,0,20,3,1.5,true)
  p.rect(p.textarray2[i].x, p.textarray2[i].y,p.size)
}
      for(let i = 0; i < p.textarray3.length; i++){
	   p.fill(255,255,255,p.opacity);
    p.distance=p.dist(p.mouseX,p.mouseY,p.textarray3[i].x,p.textarray3[i].y)
       p.opacity = p.random(0,200)
   p.size = p.map(p.distance,0,20,3,1.5,true)
  p.rect(p.textarray3[i].x, p.textarray3[i].y,p.size)
}
      for(let i = 0; i < p.textarray3.length; i++){
	   p.fill(255,255,255,p.opacity);
    p.distance=p.dist(p.mouseX,p.mouseY,p.textarray4[i].x,p.textarray4[i].y)
       p.opacity = p.random(0,200)
   p.size = p.map(p.distance,0,20,3,1.5,true)
  p.rect(p.textarray4[i].x, p.textarray4[i].y,p.size)
}
      for(let i = 0; i < p.textarray4.length; i++){
	   p.fill(255,255,255,p.opacity);
    p.distance=p.dist(p.mouseX,p.mouseY,p.textarray5[i].x,p.textarray5[i].y)
       p.opacity = p.random(0,200)
   p.size = p.map(p.distance,0,20,3,1.5,true)
  p.rect(p.textarray5[i].x, p.textarray5[i].y,p.size)
}
} else {
  p.background(0);
	p.textSize(50);
   p.color(255);
  

       p.textarray = p.jac.textToPoints('traces', 25, 160, 110, {sampleFactor:0.2});
 p.textarray1 = p.jac.textToPoints('*',75,90, 110, {sampleFactor:0.2});
     p.textarray2 = p.jac.textToPoints('*', 200,135, 110, {sampleFactor:0.2});
     p.textarray3 = p.jac.textToPoints('*',140,260,110, {sampleFactor:0.2});
     p.textarray4 = p.jac.textToPoints('*',230,290,110, {sampleFactor:0.2});
     p.textarray5 = p.jac.textToPoints('*',70,290,110, {sampleFactor:0.2});
  if(p.mouseY<150){
p.randomamount = p.map(p.mouseY,0,150,5,0);
       }
 if(p.mouseY>=150){
   p.randomamount = p.map(p.mouseY,150,600,0,5);
       }

       for(let i = 0; i < p.textarray.length; i++){
	   p.fill(255,255,255,p.opacity);
    p.distance=p.dist(p.mouseX,p.mouseY,p.textarray[i].x,p.textarray[i].y)
       p.opacity = p.map(p.distance,0,30,255,80,true)
  p.size = p.map(p.distance,0,10,5,2,true)
  p.rect(p.textarray[i].x, p.textarray[i].y,p.size)

 
}
   for(let i = 0; i < p.textarray1.length; i++){
	   p.fill(255,255,255,p.opacity);
    p.distance=p.dist(p.mouseX,p.mouseY,p.textarray1[i].x,p.textarray1[i].y)
      p.opacity = p.random(0,200)
   p.size = p.map(p.distance,0,10,3,1.5,true)
  p.rect(p.textarray1[i].x, p.textarray1[i].y,p.size)
}
      for(let i = 0; i < p.textarray1.length; i++){
	   p.fill(255,255,255,p.opacity);
    p.distance=p.dist(p.mouseX,p.mouseY,p.textarray2[i].x,p.textarray2[i].y)
        p.opacity = p.random(0,200)
   p.size = p.map(p.distance,0,10,3,1.5,true)
  p.rect(p.textarray2[i].x, p.textarray2[i].y,p.size)
}
      for(let i = 0; i < p.textarray3.length; i++){
	   p.fill(255,255,255,p.opacity);
    p.distance=p.dist(p.mouseX,p.mouseY,p.textarray3[i].x,p.textarray3[i].y)
       p.opacity = p.random(0,200)
   p.size = p.map(p.distance,0,10,3,1.5,true)
  p.rect(p.textarray3[i].x, p.textarray3[i].y,p.size)
}
      for(let i = 0; i < p.textarray3.length; i++){
	   p.fill(255,255,255,p.opacity);
    p.distance=p.dist(p.mouseX,p.mouseY,p.textarray4[i].x,p.textarray4[i].y)
       p.opacity = p.random(0,200)
   p.size = p.map(p.distance,0,10,3,1.5,true)
  p.rect(p.textarray4[i].x, p.textarray4[i].y,p.size)
}
      for(let i = 0; i < p.textarray4.length; i++){
	   p.fill(255,255,255,p.opacity);
    p.distance=p.dist(p.mouseX,p.mouseY,p.textarray5[i].x,p.textarray5[i].y)
       p.opacity = p.random(0,200)
   p.size = p.map(p.distance,0,10,3,1.5,true)
  p.rect(p.textarray5[i].x, p.textarray5[i].y,p.size)
}  
}
} 
}


var myp5stabilize = new p5(stabilizesketch,'canvas1')
var myp5score = new p5(scoresketch,'canvas2')
var myp5traces = new p5(tracessketch,'canvas3')
