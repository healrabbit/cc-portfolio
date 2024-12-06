let start; let starthover; let heal; let strt = false;
let end; let endhover;
let instrct1
let instrct2
let instrct3; let instrct4
let txt1
let txt2
let txt3
let txt4
let chc1
let chc2
let chc3
let chc4
let church
let frnd
let pathmap
let popup1
let stbg1
let stbg2
let stbg3
let stbg4
let stbg5
let stbg6
let stbg7
let stbg8
let clicks = 0;
let scene = 1;
let nospaceclicks = [1,5];
let mouseclick = false;
let correctpath = 0;
let field
let sprite1
let sprite2
let sprite3
let junk
let bird1small
let bird1large
let bird2small
let bird2large
let bird3small
let bird3large
let bird4small
let bird4large
let rightborder = 3500;
let scene3timer =  0;
let scene4timer = 0;
let sidewalk
let sidwx = 0
let sidwy = 480;
let char
let bird1
let bird2
let bird3
let bird4
let dssmall
let dslarge
let spt1
let spt2
let spt3
let shake1
let shake2
let bg4 ; let finalbg;
let frame
let txt41
let txt42
let txt43
let text44
let fightbg
let btext1
let btext2
let btext3
let btext4
let btext5; let btext6
let keepwalk
let keepwalkhover; let know; let knowhover
let mydmg1; let mydmg2; let mydmg3; let mydmg4; let mydmg5;
let bossdmg1; let bossdmg2; let bossdmg3; let bossdmg4; let bossdmg5; let bossdmg6;
let bosstxt1; let bosstxt2; let bosstxt3; let bosstxt4; let bosstxt5
let shiftleft = false;
let shiftright = false;
let objects = [];
let collide1 = false;
popupon = false;
let popuptimer = 0;
let settimer = 0;
let b1collide = false;
let b2collide = false;
let b3collide = false;
let b4collide = false;
let timer2
let timer3
let popupx = 4000;
let fade = 0;
let fade1 = 0;
let avi
let bgx = 0
let bgy = -400
let triggercount = 2; 
let shiftup = false;
let fightmode = false;
let triggertimer = 0;
let round = 0;
let fight = false;
let peace = false;
let actiontimer = 0;
let myactiontimer = 0;
let mydmg = 0;
let bossdmg = 0;
let fbgy = -400;
let reset3 = false;

function preload(){
  start = loadImage('/assets/htstart.png')
   starthover = loadImage('/assets/htstarthover.png')
  end = loadImage('/assets/htend.png')
   endhover = loadImage('/assets/htendhover.png')
   heal = loadImage('/assets/createby.png')
  txt1 = loadImage('/assets/box1.png')
  txt2 = loadImage('/assets/box2.png')
  txt3 = loadImage('/assets/box3.png')
  txt4 = loadImage('/assets/box4.png')
  chc1 = loadImage('/assets/choice1.png')
  chc2 = loadImage('/assets/choice2.png')
  chc3 = loadImage('/assets/choice3.png')
  chc4 = loadImage('/assets/choice4.png')
  church = loadImage('/assets/church.jpg')
  frnd = loadImage('/assets/gamefriend.png')
  popup1 = loadImage('/assets/popup1.png')
  instrct1 = loadImage('/assets/instrct1.png')
    instrct2 = loadImage('/assets/instrct2.png')
  instrct3 = loadImage('/assets/instrct3.png')
   instrct4 = loadImage('/assets/instrct4.png')
  pathmap = loadImage('/assets/pathmap.png')
  stbg1 = loadImage('/assets/streetbg1.png')
   stbg2 = loadImage('/assets/streetbg2.png')
  stbg3 = loadImage('/assets/streetbg3.png')
   stbg4 = loadImage('/assets/streetbg4.png')
  stbg5 = loadImage('/assets/streetmap5.png')
   stbg6 = loadImage('/assets/streetbg6.png')
  stbg7 = loadImage('/assets/mapbg7.png')
   stbg8 = loadImage('/assets/mapbg8.png')
  field = loadImage('/assets/field.JPG')
  sidewalk = loadImage('/assets/sidewalk.png')
  sprite1 = loadImage('/assets/fieldsprite1.png')
  sprite2 = loadImage('/assets/fieldsprite2.png')
  sprite3 = loadImage('/assets/fieldsprite3.png')
  junk = loadImage('/assets/junk.png')
  bird1small = loadImage('/assets/bird1small.png')
    bird1large = loadImage('/assets/bird1large.png')
    bird2small = loadImage('/assets/bird2small.png')
    bird2large = loadImage('/assets/bird2large.png')
   bird3small = loadImage('/assets/bird3small.png')
   bird3large = loadImage('/assets/bird3large.png')
   bird4small = loadImage('/assets/bird4small.png')
   bird4large = loadImage('/assets/bird4large.png')
   dssmall = loadImage('/assets/dssmall.png')
  dslarge = loadImage('/assets/dslarge.png')
   bg4 = loadImage('/assets/bg4.png')
   finalbg = loadImage('/assets/finalhomebg.png')
  frame = loadImage('/assets/frame.png')
  spt1 = loadImage('/assets/spt1.png')
  spt2 = loadImage('/assets/spt2.png')
  spt3 = loadImage('/assets/spt3.png')
  shake1 = loadImage('/assets/shake1.png')
  shake2 = loadImage('/assets/shake2.png')
   txt41 = loadImage('/assets/scn4txt1.png')
  txt42 = loadImage('/assets/scn4txt2.png')
  txt43 = loadImage('/assets/scn4txt3.png')
  txt44 = loadImage('/assets/scn4txt4.png')
  fightbg = loadImage('/assets/fightbg.png')
  btext1 = loadImage('/assets/battletxt1.png')
  btext2 = loadImage('/assets/battletxt2.png')
  btext3 = loadImage('/assets/battletxt3.png')
  btext4 = loadImage('/assets/battletxt4.png')
   btext5 = loadImage('/assets/battletxt5.png')
   btext6 = loadImage('/assets/battletxt6.png')
  keepwalk = loadImage('/assets/keepwalking.png')
  keepwalkhover = loadImage('/assets/keepwalkinghover.png')
  duof = loadImage('/assets/duof.png')
  duow = loadImage('/assets/duow.png')
  duofhover = loadImage('/assets/duofhover.png')
  know = loadImage('/assets/know.png')
  knowhover = loadImage('/assets/knowhover.png')
  duowhover = loadImage('/assets/duowhover.png')
  mydmg1 = loadImage('/assets/mydmg1.png')
   mydmg2 = loadImage('/assets/mydmg2.png')
   mydmg3 = loadImage('/assets/mydmg3.png')
   mydmg4 = loadImage('/assets/mydmg4.png') 
  mydmg5 = loadImage('/assets/mydmg5.png')
   bossdmg1 = loadImage('/assets/bossdmg1.png')
    bossdmg2 = loadImage('/assets/bossdmg2.png')
    bossdmg3 = loadImage('/assets/bossdmg3.png')
    bossdmg4 = loadImage('/assets/bossdmg4.png')
    bossdmg5 = loadImage('/assets/bossdmg5.png')
    bossdmg6 = loadImage('/assets/bossdmg6.png')
     bosstxt1 = loadImage('/assets/bosstxt1.png')
    bosstxt2 = loadImage('/assets/bosstxt2.png')
    bosstxt3 = loadImage('/assets/bosstxt3.png')
    bosstxt4 = loadImage('/assets/bosstxt4.png')
    bosstxt5 = loadImage('/assets/bosstxt5.png')
}
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  char = new character()
   bird1 = new specialobj(890,470,bird1small)
  bird2 = new specialobj(1530,540,bird1small)
  bird3 = new specialobj(2070,510,bird1small)
  bird4 = new specialobj(2360,490,bird1small)
  ds = new specialobj(3200,520)
  for(let i =0; i< 20; i++){
    objects[i] = new obj(random(200,2400),random(440,550));
     }
  avi = new avatar() 
  trigger1 = new trigger(10,-300)
  trigger2 = new trigger(10,-900)
  trigger3 = new trigger(10,-1200)
  trigger4 = new trigger(10,-1300)
  trigger5 = new trigger(10,-1350)
  boss = new trigger(100,-1500)
}

function draw() {
  background(220);
   switch(scene){
   case 1: 
     scene1()
     break;
     case 2:
     scene2()
     break;
     case 3:
     scene3()
     break;
      case 4:
     scene4()
     break;
      case 5:
     scene5()
     break;
        }
}


 function mousePressed(){
   mouseclick = true;
 } 
function mouseReleased(){
  mouseclick = false;
}
function keyPressed() {
  if ((keyCode === 32) && clicks != 1 && clicks != 5) {
   clicks ++
  }
}
