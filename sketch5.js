function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('canvas');
  }
  let move =0;
  let move2 =-600;
  function draw() {
    let yellowC
    let redC
    let blueC
    let size
    
    
    
    
    background('white');
    
  
    
        move=move+2
        move2=move2+2
    
    noStroke()
    fill('black')
    rect(0,0+move,600,300)
    rect(0,0+move2,600,300)
  
    if(move2>=600){
      move2=-600
    }
    if (move>=600){
      move=-600
    }
    if(mouseX<=450 && mouseX>=150){
      yellowC=mouseX
  } else if(mouseX<150){
    yellowC=300-mouseX
  }
    else if (mouseX>450){
    yellowC=900-mouseX
    }
    
    if(mouseX<=400 && mouseX>=200){
      redC=600-mouseX
  } else if(mouseX<200){
    redC=800-(600-mouseX)
  }
    else if (mouseX>400){
    redC=400-(600-mouseX)
    }
  
     if(mouseX<=500 && mouseX>=100){
      blueC=600-mouseX
  } else if(mouseX<200){
    blueC=1000-(600-mouseX)
  }
    else if (mouseX>400){
    blueC=200-(600-mouseX)
    }
  
  noStroke();
  fill(' yellow');
  circle (yellowC, 300, 100)
  fill ('red')
  circle (redC, 100, 120)
  fill(' blue')
  circle (blueC, 500, 150)
    
  for(let d = 100; d > 0; d -= 10){
    stroke('red')
    strokeWeight(2)
    fill('yellow')
    circle (yellowC, 300, d)
  }
      
  for(let d = 150; d > 0; d -= 10){
    stroke('yellow')
    strokeWeight(2)
    fill('blue')
    circle (blueC, 500, d)
  }
      
  for(let d = 120; d > 0; d -= 10){
    stroke('blue')
    strokeWeight(2)
    fill('red')
    circle (redC, 100, d)
  }
  for (let x=0; x<200; x=x+4){
  stroke (/*' #9F75AF'*/'red')
  strokeWeight (2)
  line(x,0, x, 600);
  }
    for (let x=200; x<400; x=x+4){
  stroke (/*' #9F75AF'*/'yellow')
  strokeWeight (2)
  line(x,0, x, 600);
  }
  for(let x=400; x<600; x=x+4){
  stroke('blue')
    strokeWeight(2)
    line(x,0,x,600)
  }
  }