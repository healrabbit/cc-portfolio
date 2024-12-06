function setup() {
   let canvas= createCanvas(500, 500);
    canvas.parent('canvas');
  }
  
  function draw() {
    background('#C2E6EC');
    noStroke()
   
    //tail 
     fill('#16515D')
     circle(202, 393, 71);
    circle(298, 393, 71);
    fill(' #147394')
    rect(228,360,38,70)
    circle(205, 390, 70);
    circle(295, 390, 70);
    
    fill('#C2E6EC')
    ellipse(194.5, 370, 70,32);
    ellipse(301, 370, 70,32);
     bezier(234, 440, 200, 400, 290, 390, 268, 431);
    //slipper base
    fill('#147394')
   bezier(155, 150, 150, 450, 350, 450, 345, 150)
    fill('#7EB7C2')
   bezier(155, 150, 150, 430, 350, 430, 345, 150)
     fill('#8AC2CD')
    bezier(155, 150, 150, 410, 350, 410, 345, 150);
     bezier(150, 180, 170, -10, 330, -10, 350, 180)
      fill('#16515D')
     bezier(149, 180, 155, -15, 345, -15, 351, 180) 
    fill('#99CED8')
    ellipse(250,280,100,120)
    
   //toecap base
    fill('#147394') 
   clip(mask);
    function mask() {bezier(150, 180, 170, -10, 330, -10, 350, 180) }
    bezier(150, 180, 170, -10, 330, -10, 350, 180)
    fill('#C2E6EC')
    bezier(148, 190, 170, 130, 330, 130, 352, 190);
    
    //shading
    fill('#7EB7C2')
    bezier(156, 190, 150, 130, 350, 130, 344, 190);
    
     fill('#8AC2CD')
    bezier(158, 190, 125, 160, 365, 160, 342, 190); 
    //whale face detail
    fill('white')
    ellipse(170,80,30,70)
    ellipse(200,60,30,70)
    ellipse(230,40,30,70)
    ellipse(320,80,30,70)
    ellipse(290,60,30,70)
    ellipse(260,40,30,70)
    fill('#16515D')
    ellipse(173,142,25)
    ellipse(327,142,25)
     fill(220)
    ellipse(175,140,25)
    ellipse(325,140,25)
    fill('black')
     ellipse(178,138,10)
    ellipse(320,138,10)
  }