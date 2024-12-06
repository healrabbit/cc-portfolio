function setup() {
 let  canvas =  createCanvas(600, 600);
    canvas.parent('canvas');
  }
  
  function draw() {
    background(220);
    //background
    bg1 = '#E9CEDC'
   bg3 ='#CEDBE9'
    bg2 = '#E9E7CE'
    
    push()
    noStroke()
    fill(bg1)
    rect(0,0,600,200)
    fill(bg2)
      rect(0,200,600,200)
    fill(bg3)
      rect(0,400,600,200)
    pop()
   
    terri()
    evie()
    jaden()
    
  }
  function terri(){ 
    strokeWeight(4)
    ellipse(300,144,200,110)
    bezier(230,107,230,0,300,0,300,100)
     bezier(300,100,300,0,370,0,370,107)
    bezier(240,160,245,170,265,170,270,160)
     bezier(330,160,335,170,355,170,360,160)
   }
  function jaden(){
    strokeWeight(2)
    rect(200,230,200,150)
    bezier(200,378,200,410,400,410,400,378)
    bezier(130,310,200,160,400,160,470,310)
    line(130,310,190,310)
      line(410,310,470,310)
  push()  
    noStroke()
    fill(bg2)
    triangle(190,310,200,310,200,290)
     triangle(410,310,400,310,400,290)
    pop()
    line(410,310,400,290)
    line(400,310,400,290)
    line(190,310,200,290)
    line(200,310,200,290)
    circle(270,205,10)
    circle(330,205,10)
    push()
    noStroke()
    rect(270,200,60,10)
    pop()
    line(270,200,330,200)
    line(270,210,330,210)
    rect(140,310,40,10)
    ellipse(160,320,40,5)
     ellipse(160,323,40,5)
    rect(420,310,40,40)
    bezier(420,349,420,360,430,360,430,349)
     bezier(430,349,420,360,450,360,440,349)
     bezier(440,349,440,360,450,360,450,349)
     bezier(450,349,450,360,460,360,460,349)
  }
    function evie(){
       strokeWeight(3)
    rect(200,380,200,200)
    rect(198,540,102,20)
     rect(300,540,102,20)
    ellipse(320,570,40)
    ellipse(395,570,40)
      ellipse(360,570,50)
      ellipse(280,570,40)
    ellipse(205,570,40)
      ellipse(240,565,50)
    line(300,570,300,430)
    rect(240,395,10,10)
    rect(350,395,10,10)
    rect(290,400,20,5)
    line(220,390,200,430)
    line(380,390,400,430)
    rect(198,480,20,40)
    rect(382,480,20,40)
    }
    
  