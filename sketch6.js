let day = 0;
let bg = 1;
let bgcolor;
let songs = [54, 33, 19, 17, 50, 44, 17, 18];
let dance = 0;
let danceUp = true;
let danceDown = false;
let color;
let song1;
let song2;
let song3;
let song4;
let song5;
let song6;
let song7;
let song8;
let volumeon = false;
var amp;


function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('canvas');
  song1 = createAudio("/Users/evie/Desktop/cc lab portfolio/cclabdataportrait1.mp3");
  song2 = createAudio("/cclabdataportrait2.mp3");
  song3 = createAudio("/cclabdataportrait3.mp3");
  song4 = createAudio("/sound/cclabdataportrait4.mp3");
  song5 = createAudio("/sound/cclabdataportrait5.mp3");
  song6 = createAudio("/sound/cclabdataportrait6.mp3");
  song7 = createAudio("/sound/cclabdataportrait7.mp3");
  song8 = createAudio("/sound/cclabdataportrait8.mp3");
  amp = new p5.Amplitude();
  
}

function draw() {

  // DATA COLOR
  if (day == 0) {
    color = "#F2BE1B";
  } else if (day == 1) {
    color = "#DFC3D2";
  } else if (day == 2) {
    color = "#4FC6E8";
  } else if (day == 3) {
    color = "#A6160A";
  } else if (day == 4) {
    color = "#4FC6E8";
  } else if (day == 5) {
    color = "#F5A6E7";
  } else if (day == 6) {
    color = "#FFF2A9";
  } else if (day == 7) {
    color = "#42BF42";
  }

  //BACKGROUND & REPEATS
  if (bg == 1) {
    background("#766E0C");
    bgcolor = "#766E0C";
    fill(color);
    day1();
  } else if (bg == 2) {
    background("#4F494E");
    bgcolor = "#4F494E";
    fill(color);
    day2();
  } else if (bg == 3) {
    background(230);
    bgcolor = 230;
    fill(color);
    day3();
  } else if (bg == 4) {
    bgcolor = "#A6D19E";
    background("#A6D19E");
    fill(color);
    day4();
  } else if (bg == 5) {
    background(230);
    bgcolor = 230
    fill(color);
    day5();
  } else if (bg == 6) {
    background("black");
    bgcolor = 'black'
    fill(color);
    day6();
  } else if (bg == 7) {
    background("#91DDF3");
    bgcolor = "#91DDF3"
  } else if (bg == 8) {
    background("#1F401F");
    bgcolor = "#1F401F"
    fill(color);
    day8();
  }

  //SONG DATA
  for (let w = 40; w < 560; w = w + 520 / (songs[day] / 2)) {
    fill(color);
    rect(w, 260 + dance, 520 / songs[day] / 2 - 520 / songs[day], 80);

    for (
      let w = 40 + 520 / songs[day];
      w < 560;
      w = w + 520 / (songs[day] / 2)
    ) {
      rect(w, 260 - dance, 520 / songs[day] / 2 - 520 / songs[day], 80);
    }
  }
  // POSITION BAR
  positbar();
  //MAKING IT DANCE
  if (dance == -10) {
    danceUp = true;
    danceDown = false;
  }
  if (dance == 10) {
    danceUp = false;
    danceDown = true;
  }
  if (danceUp == true) {
    dance = dance + 0.5;
  }
  if (danceDown == true) {
    dance--;
  }
  //AUDIO
  push();
  fill("blue");
  ellipse(330, 50, 30);
  fill(bgcolor);
  ellipse(320, 50, 35,35);
    fill("blue");
  rect(280, 35, 20, 30);
 triangle(280, 50, 320, 20, 320, 80);
  pop();
  if (volumeon == false){
    push()
    strokeWeight(5)
    stroke('blue')
    line(275,85,345,20)
    pop()
  }
  if (volumeon == true && day == 0) {
    song1.loop();
    song1.volume(0.5);
  } else {
    song1.pause();
  }
  if (volumeon == true && day == 1) {
    song2.loop();
    song2.volume(0.5);
  } else {
    song2.pause();
  }
  if (volumeon == true && day == 2) {
    song3.loop();
    song3.volume(0.5);
  } else {
    song3.pause();
  }
  if (volumeon == true && day == 3) {
    song4.loop();
    song4.volume(0.5);
  } else {
    song4.pause();
  }
  if (volumeon == true && day == 4) {
    song5.loop();
    song5.volume(0.5);
  } else {
    song5.pause();
  }
  if (volumeon == true && day == 5) {
    song6.loop();
    song6.volume(0.5);
  } else {
    song6.pause();
  }
  if (volumeon == true && day == 6) {
    song7.loop();
    song7.volume(0.5);
  } else {
    song7.pause();
  }
  if (volumeon == true && day == 7) {
    song8.loop();
    song8.volume(0.5);
  } else {
    song8.pause();
  }
    //VOLUME CONTROL MOVEMENT 
   let vol = amp.getLevel();
  console.log(vol);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && day > 0) {
    day = day - 1;
    bg = bg - 1;
  } else if (keyCode === RIGHT_ARROW && day < 7) {
    day = day + 1;
    bg = bg + 1;
  }
}

function positbar() {
  fill(255);
  noStroke();
  rect(45, 545, 510, 15);
  ellipse(45, 552.5, 10, 15);
  ellipse(555, 552.5, 10, 15);
  fill("blue");
  ellipse(55 + 70 * day, 560, 15);
  push();
  fill("blue");
  strokeWeight(4);
  stroke("blue");
  line(60 + 70 * day, 560, 58 + 70 * day, 542);
  pop();
  triangle(58 + 70 * day, 540, 59 + 70 * day, 548, 68 + 70 * day, 548);
  //days-600 = 484 so +70 per day
}

function mousePressed() {
  if (volumeon == false) {
    volumeon = true;
  } else if (volumeon == true) {
    volumeon = false;
  }
}

function day1() {
  /* 3 repeats*/ rect(
    40 + (520 / songs[day]) * 28,
    140 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    320
  );
  /*2 repeats */ rect(
    40 + (520 / songs[day]) * 26,
    180 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    240
  );
  rect(
    40 + (520 / songs[day]) * 27,
    180 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    240
  );
  rect(
    40 + (520 / songs[day]) * 29,
    180 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    240
  );
  /* 1 repeat */
  rect(
    40 + (520 / songs[day]) * 30,
    220 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
}

function day2() {
  /* 1 repeat*/ rect(
    40 + (520 / songs[day]) * 17,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
}
function day3() {
  /* 2 repeats */ rect(
    40 + (520 / songs[day]) * 7,
    180 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    240
  );
  rect(
    40 + (520 / songs[day]) * 8,
    180 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    240
  );
  rect(
    40 + (520 / songs[day]) * 9,
    180 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    240
  );
  rect(
    40 + (520 / songs[day]) * 10,
    180 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    240
  );
  rect(
    40 + (520 / songs[day]) * 11,
    180 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    240
  );
  rect(
    40 + (520 / songs[day]) * 12,
    180 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    240
  );
  /* 1 repeat */
  rect(
    40 + (520 / songs[day]) * 3,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 4,
    220 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 5,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 6,
    220 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 7,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 13,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 14,
    220 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 15,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 16,
    220 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
}

function day4() {
  /* 3 repeats */
  rect(
    40 + (520 / songs[day]) * 9,
    140 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    320
  );
  /* 1 repeat */
  rect(
    40 + (520 / songs[day]) * 8,
    220 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 10,
    220 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
}

function day5() {
  /* 2 repeats */
  rect(
    40 + (520 / songs[day]) * 25,
    180 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    240
  );
  rect(
    40 + (520 / songs[day]) * 26,
    180 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    240
  );
  /* 1 repeat */
  rect(
    40 + (520 / songs[day]) * 24,
    220 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
}

function day6() {
  /* 2 repeats */
  rect(
    40 + (520 / songs[day]) * 22,
    180 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    240
  );
  /* 1 repeat */
  rect(
    40 + (520 / songs[day]) * 17,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 18,
    220 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 19,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 20,
    220 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 21,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 23,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 24,
    220 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 25,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 26,
    220 + dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
  rect(
    40 + (520 / songs[day]) * 27,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
}

function day8() {
  rect(
    40 + (520 / songs[day]) * 9,
    220 - dance,
    520 / songs[day] / 2 - 520 / songs[day],
    160
  );
}
