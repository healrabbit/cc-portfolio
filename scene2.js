let movetime = 0
let movetimealt = 0
let arrowdelay = 500
function scene2(){
    background("green") 
     map1()
   pathmp()
     patharrows()
 
function map1(){
   noStroke()

   if(correctpath == 0){
     image(stbg1,0,0,600,600)
    image(instrct2,100,50)
   }
   if(correctpath == 1){
     image(stbg3,0,0,600,600)
   }
   if(correctpath == 2){
     image(stbg2,0,0,600,600)
   }
   if(correctpath == 3){
     image(stbg4,0,0,600,600)
   }if(correctpath == 4){
      image(stbg5,0,0,600,600)
   }
   if(correctpath == 5){
     image(stbg6,0,0,600,600)
   }
   if(correctpath == 6){
    image(stbg7,0,0,600,600)
   }
  if(correctpath == 7){
    image(stbg8,0,0,600,600)
   }
  if(correctpath == 8){
    image(stbg1,0,0,600,600)
   }
  if(correctpath == 9){
    image(stbg2,0,0,600,600)
   }
  if(correctpath == 10){
    image(stbg3,0,0,600,600)
   }
   if(correctpath == 11){
    scene = 3
   }
}
 function pathmp() {
     image(pathmap,5,435)
     if(correctpath == 0){
       fill('red')
     ellipse(21,580,20)
    
   }
    if(correctpath == 1){
       fill('red')
     ellipse(95,572,20)
    
   }
 if(correctpath == 2){
       fill('red')
     ellipse(110,535,20)
    
   }
    if(correctpath == 3){
       fill('red')
     ellipse(80,525,20)
    
   }
    if(correctpath == 4){
       fill('red')
     ellipse(72,500,20)
    
   }
    if(correctpath == 5){
       fill('red')
     ellipse(45,494,20)
    
   }
    if(correctpath == 6){
       fill('red')
     ellipse(30,470,20)
    
   }
    if(correctpath == 7){
       fill('red')
     ellipse(140,460,20)
    
   }
    if(correctpath == 8){
       fill('red')
     ellipse(150,535,20)
    
   }
    if(correctpath == 9){
       fill('red')
     ellipse(200,552,20)
    
   }
   if(correctpath == 10){
       fill('red')
     ellipse(212,460,20)
    
   }
    
 } 
 function patharrows(){
   fill('white')
   triangle(30,300,70,250,70,350)
    triangle(570,300,530,250,530,350)
   if( /*right 1*/ mouseclick == true && (dist(mouseX,0,550,0)<20)&& dist(mouseY,0,325,0)<25&& correctpath == 0){
     correctpath ++
   }
    if( /* left 2*/mouseclick == true && (dist(mouseX,0,50,0)<20)&& dist(mouseY,0,325,0)<25&& correctpath == 1){
     correctpath ++
      movetime = millis()
   }
    if(/* left 3*/mouseclick == true && (dist(mouseX,0,50,0)<20)&& dist(mouseY,0,325,0)<25 && (correctpath == 2) && ( millis()-movetime >= arrowdelay)){
     correctpath ++
   }
    if(/* right 4*/mouseclick == true && (dist(mouseX,0,550,0)<20)&& dist(mouseY,0,325,0)<25&& correctpath == 3){
     correctpath ++
   }
   if(/*left 5 */mouseclick == true && (dist(mouseX,0,50,0)<20)&& dist(mouseY,0,325,0)<25&& correctpath == 4){
     correctpath ++
   }
    if(/* right 6*/mouseclick == true && (dist(mouseX,0,550,0)<20)&& dist(mouseY,0,325,0)<25&& (correctpath == 5)){
     correctpath ++
      movetime = millis()
   }
    if(/* right 7*/mouseclick == true && (dist(mouseX,0,550,0)<20)&& dist(mouseY,0,325,0)<25&& (correctpath == 6) && ( millis()-movetime >= arrowdelay)){
     correctpath ++
      movetimealt = millis()
   }
    if(/* right 8*/mouseclick == true && (dist(mouseX,0,550,0)<20)&& dist(mouseY,0,325,0)<25&& (correctpath == 7) && ( millis()-movetimealt >= arrowdelay)){
     correctpath ++
      movetime = millis()
   }
    if(/*left 9 */mouseclick == true && (dist(mouseX,0,50,0)<20)&& dist(mouseY,0,325,0)<25&& correctpath == 8 && ( millis()-movetime >= arrowdelay)){
     correctpath ++
      movetimealt = millis()
   }
    if(/*left 10 */mouseclick == true && (dist(mouseX,0,50,0)<20)&& dist(mouseY,0,325,0)<25&& correctpath == 9 && ( millis()-movetimealt >= arrowdelay)){
     correctpath ++
   }
    if(/* right 11*/mouseclick == true && (dist(mouseX,0,550,0)<20)&& dist(mouseY,0,325,0)<25&& (correctpath == 10)){
     correctpath ++
   }
 } 
 }