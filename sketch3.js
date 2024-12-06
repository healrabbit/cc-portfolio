let img1;
let img2;
 function preload() {

img1 = loadImage("subwaytile.jpeg");
img2 = loadImage("tunnel.jpeg");
}

function setup() {
  let canvas = createCanvas(700, 600);
  canvas.parent('canvas');
}

let my_mapped_mouseX
let my_mapped_mouseY
function draw() {
   let s = second();
  let m = minute();
  let h = hour();
 
  let my_millis = millis()/1000 //1000
 // background(my_mapped_mouseY,255,my_mapped_mouseX);
 console.log(h,m,s,my_millis)
  noStroke()
 /* rect(0,100,s,50)
  if(s == 60){
     
     }
  */
  
  //wilson 

  
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(70);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(3);
    text('WILSON',225,225)
  
  //wilson to halsey tunnel 
  if (my_millis>20.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
    image(img2,0,0)
   
    
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  
  
  }
  //HALSEY
    if (my_millis>80.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(70);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(3);
    text('HALSEY',225,225)
    }
  //HALSEY TO MYRTLE WYCKOFF 
  if (my_millis>100.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
    image(img2,0,0)
   
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  
  }
  // MYRTLE WYCKOFF
      if (my_millis>160.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(30);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(2);
    text('MYRTLE-WYCKOFF',225,210)
    }
  //MYRTLE TO DEKALB
  if (my_millis>180.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
    image(img2,0,0)
   
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  } 
  //DEKALB
   if (my_millis>240.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(70);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(3);
    text('DEKALB',225,225)
    }
  //DEKALB TO JEFFERSON
  if (my_millis>260.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
    image(img2,0,0)
   
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  } 
  //JEFFERSON
  if (my_millis>320.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(45);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(3);
    text('JEFFERSON',225,220)
    }
  //JEFFERSON TO MORGAN
   if (my_millis>340.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
    image(img2,0,0)
   
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  } 
  //MORGAN
  if (my_millis>400.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(70);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(3);
    text('MORGAN',225,225)
    }
  //MORGAN TO MONTROSE
   if (my_millis>420.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
    image(img2,0,0)
   
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  }
    if (my_millis>480.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(55);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(2);
    text('MONTROSE',223,220)
    }
  //MONTROSE TO GRAND
    if (my_millis>500.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
    image(img2,0,0)
   
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  }
  //GRAND
   if (my_millis>560.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(70);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(3);
    text('GRAND',245,225)
    }
  //GRAND TO GRAHAM
    if (my_millis>580.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
     image(img2,0,0)
   
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  }
  //GRAHAM
    if (my_millis>640.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(70);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(3);
    text('GRAHAM',223,225)
    }
  //GRAHAM TO LORIMER
  if (my_millis>660.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
     image(img2,0,0)
   
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  }
  //LORIMER
     if (my_millis>720.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(60);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(3);
    text('LORIMER',223,220)
    }
  //LORIMER TO BEFORD
   if (my_millis>740.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
     image(img2,0,0)
   
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  }
  //BEDFORD
     if (my_millis>800.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(60);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(3);
    text('BEDFORD',223,220)
    }
  //BEDFORD TO 1ST
   if (my_millis>820.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
    image(img2,0,0)
   
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  }
  //1ST AVE
     if (my_millis>940.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(60);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(3);
    text('1ST AVE',223,220)
    }
  //1ST TO 3RD
    if (my_millis>960.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
    image(img2,0,0)
   
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  }
  //3RD
   if (my_millis>1005.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(60);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(3);
    text('3RD AVE',223,220)
    }
  //3RD TO UNION
   if (my_millis>1025.0){
    noStroke()
    fill('#212327')
    rect(0,0,700,600) 
     image(img2,0,0)
   
      fill('#6A7273')
    rect(0,140+random(3),700,15)
     fill('#6A7273')
    rect(0,250+random(5),700,15)
  }
  //UNION SQUARE
   if (my_millis>1070.0){
       
 image(img1,15,10)
   
    fill('#62904A')
    rect(187,137,326,126)
   fill('#EDD664')
    rect(195,145,310,110)
  fill('#4C5A76')
    rect(200,150,300,100)
 
    textSize(35);
    textFont('Monospace');
    fill('#ECEED6')
    stroke('#ECEED6')
    strokeWeight(3);
    text('UNION SQUARE',223,210)
    }
 
  my_mapped_mouseX = map(mouseX,0,400,0,255)
   my_mapped_mouseY = map(mouseY,0,400,0,255)
  push()
  fill('grey')
    clip(mask, { invert: true });
rect(0,0,700,600,)
  function mask() {
    rect(75,80,550,300,10)
}
  pop()
  
   //END MESSAGE
   if (my_millis>1075.0){
     textSize(20)
     fill('black')
  text('Youve made it to your destination!',150,450)
    text (  'Reload to start anew..',150,490)
   }
  
  //subway spend 20 secs at each station, 4 mins 20 secs total (260 seconds) (13 stops)
//21 minute process overall abt 1 minute  between each station, bedford to 1st 2 minutes, 1st 3rd and 14th 45 secs 210 total 
}