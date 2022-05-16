let mode = 0;
let modelLoaded = false;
let reincarnationVid;
let spiralVid;
let pic;
let bulletinRight, bulletinLeft;
let hand;
let isClick = 0;
let zoom;
let counter = 0; // 影片計時
let mirror;
let scan;
let scanCount = 0;
let classifier;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/ZrHDR3qwn/';
let video;
let flippedVideo;
// To store the classification
let label = "";
let buttonSmall, buttonBig;
//pictures...
let pic1, pic2, pic3, pic4, pic5,pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16;
let spaceX = 125;
let spaceY = 121;
let ai1, ai2, ai3, ai4, ai5, ai6, ai7, ai8;
// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  modelLoaded = true;
  //console.log('model loaded')
  //artists introduction
  ai1 = loadImage('artist/ai1.jpg');
  ai2 = loadImage('artist/ai2.jpg');
  ai3 = loadImage('artist/ai3.jpg');
  ai4 = loadImage('artist/ai4.jpg');
  ai5 = loadImage('artist/ai5.jpg');
  ai6 = loadImage('artist/ai6.jpg');
  ai7 = loadImage('artist/ai7.jpg');
  ai8 = loadImage('artist/ai8.jpg');
}

function setup() {
  createCanvas(1024, 576);
  // Create the video
  video = createCapture(VIDEO);
  video.size(1025, 576);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
  
  //載入前導影片
  reincarnationVid = createVideo(['video/test.m4v'],vidLoad );
  reincarnationVid.size(800, 600);
  reincarnationVid.hide();
  spiralVid = createVideo(['video/spiral.m4v',vidLoad]);
  spiralVid.size(800,600);
  spiralVid.hide();
  pic = loadImage('video/pic.png');
  bulletinRight = loadImage('video/tienJii.png');
  bulletinLeft = loadImage('video/shanBeiZi.png');
  hand = loadImage('video/hand.png');
  //轉場影片
  zoom = createVideo('video/zoom.m4v',vidLoad);
  zoom.hide();
 //掃描
  mirror = loadImage('video/mirror.png');
  scan = height / 2;
  //按鈕
  buttonSmall = loadImage('video/buttonSmall.png');
  buttonBIg = loadImage('video/buttonBig.png'); 
  //img = loadImage('assets/laDefense.jpg');
  //artists....
  pic1 = loadImage('artist/1.png');
  pic2 = loadImage('artist/2.png');
  pic3 = loadImage('artist/3.png');
  pic4 = loadImage('artist/4.png');
  pic5 = loadImage('artist/5.png');
  pic6 = loadImage('artist/6.png');
  pic7 = loadImage('artist/7.png');
  pic8 = loadImage('artist/8.png');
  pic9 = loadImage('artist/9.png');
  pic10 = loadImage('artist/10.png');
  pic11 = loadImage('artist/11.png');
  pic12 = loadImage('artist/12.png');
  pic13 = loadImage('artist/13.png');
  pic14 = loadImage('artist/14.png');
  pic15 = loadImage('artist/15.png');
  pic16 = loadImage('artist/16.png');

  
  
  
  //timer by second
  setInterval(timeIt,500); 
}

function timeIt(){
  counter++;
}

function vidLoad() {
  reincarnationVid.loop();
  reincarnationVid.volume(0);
  spiralVid.loop();
  spiralVid.volume(0);
  zoom.loop();
}

function draw() {
  console.log(isClick)
  background(0);
  //console.log(counter);
  //console.log(mode);
  
    switch(mode){
      
      case 0: //前導影片 = case0 
        scene0();
        break;

      case 1://點一下進入機器辨識
        scene1();
        break;


      case 2://掃描動畫
        scene2();
        stroke(255, 70, 51 );
        strokeWeight(3);
        line(0,  scan, width,  scan);
           scan =  scan - 1;
            if ( scan < 191) {
              scan = 490;
              scanCount+=1;
            }
        //console.log(scanCount);
        image(mirror,0,0,1025,576);
        if(scanCount == 1) mode = 3;
        break;
      
      case 3:
        scene3();
        break;
      case 4:
        scene4();
        break;
      case 5://李梅樹
        image(ai1,0,0,1025,576);
        if(mouseX>width-220 && mouseX<width-220+183 && mouseY>height-70 && mouseY<height-70+60){
          image(buttonSmall,width-230,height-80,203,66.5);
         if( isClick == 255){ mode = 4}
        }else{
          image(buttonSmall, width-220,height-90,183,60);
        }
        let a = createA('https://limeishu.org.tw/', 'gogo!');
        a.position(512, 395);
        
        break;
      case 6://陳進
        image(ai2,0,0,1025,576);
        if(mouseX>width-220 && mouseX<width-220+183 && mouseY>height-70 && mouseY<height-70+60){
          image(buttonSmall,width-230,height-80,203,66.5);
         if( isClick == 255){ mode = 4}
        }else{
          image(buttonSmall, width-220,height-90,183,60);
        }
        
        
        break;
      case 7://洪瑞麟
        image(ai3,0,0,1025,576);
        if(mouseX>width-220 && mouseX<width-220+183 && mouseY>height-70 && mouseY<height-70+60){
          image(buttonSmall,width-230,height-80,203,66.5);
         if( isClick == 255){ mode = 4}
        }else{
          image(buttonSmall, width-220,height-90,183,60);
        }
        let b = createA('https://www.tfam.museum/Exhibition/Exhibition_page.aspx?id=699&ddlLang=zh-tw', 'gogo!');
        b.position(745, 475);
        
        break;
      case 8://陳植棋
        image(ai4,0,0,1025,576);
        if(mouseX>width-220 && mouseX<width-220+183 && mouseY>height-70 && mouseY<height-70+60){
          image(buttonSmall,width-230,height-80,203,66.5);
         if( isClick == 255){ mode = 4}
        }else{
          image(buttonSmall, width-220,height-90,183,60);
        }
        
        break;
      case 9://顏水龍
        image(ai5,0,0,1025,576);
        if(mouseX>width-220 && mouseX<width-220+183 && mouseY>height-70 && mouseY<height-70+60){
          image(buttonSmall,width-230,height-80,203,66.5);
         if( isClick == 255){ mode = 4}
        }else{
          image(buttonSmall, width-220,height-90,183,60);
        }
        
        break;
      case 10://廖繼春
        image(ai6,0,0,1025,576);
        if(mouseX>width-220 && mouseX<width-220+183 && mouseY>height-70 && mouseY<height-70+60){
          image(buttonSmall,width-230,height-80,203,66.5);
         if( isClick == 255){ mode = 4}
        }else{
          image(buttonSmall, width-220,height-90,183,60);
        }
        
        break;
      case 11://郭雪湖
        image(ai7,0,0,1025,576);
        if(mouseX>width-220 && mouseX<width-220+183 && mouseY>height-70 && mouseY<height-70+60){
          image(buttonSmall,width-230,height-80,203,66.5);
         if( isClick == 255){ mode = 4}
        }else{
          image(buttonSmall, width-220,height-90,183,60);
        }
        
        break;
      case 12://陳澄波
        image(ai8,0,0,1025,576);
        if(mouseX>width-220 && mouseX<width-220+183 && mouseY>height-70 && mouseY<height-70+60){
          image(buttonSmall,width-230,height-80,203,66.5);
         if( isClick == 255){ mode = 4}
        }else{
          image(buttonSmall, width-220,height-90,183,60);
        }
        
        break;
    }
  
}

function scene0(){
  /*image(reincarnationVid, 0, 0)
  if(counter == 10 ){
     mode = 1;
     }     */
  //開頭動畫
  image(spiralVid,105, 200,589,331);
  image(pic, 0, 0, 1025, 576);
  image(bulletinRight,0,0,1025,576);
  image(bulletinLeft,0,0,1025,576);
  if(mouseX>=331 && mouseY>=292 && mouseX<=618 && mouseY<=486){
    image(hand, mouseX-10, mouseY-10, 30, 30);
    if( isClick == 255){ mode = 1}
  }
  
  
}
function scene1(){
  // Draw the video
  image(zoom,0,0);
  if(counter >= 16 ){
     mode = 2;
     } 
  //console.log(counter);

  
}
function scene2(){
  image(flippedVideo, 0, 0);

}
function scene3(){
   // Draw the video
  image(flippedVideo, 0, 0);
  

  // Draw the label
  fill(255);
  noStroke();
  textSize(30);
  textAlign(CENTER);
  text('你的上輩子是...'+ label, width / 2, height - 30);
  if(mouseX>width-220 && mouseX<width-220+183 && mouseY>height-70 && mouseY<height-70+60){
    image(buttonSmall,width-230,height-80,203,66.5);
     if( isClick == 255){ mode = 4}
  }else{
    image(buttonSmall, width-220,height-70,183,60);
  }

  
}

function scene4(){
  textSize(15);
  if(mouseX>145 && mouseX<145+90 && mouseY>121 && mouseY<121+90){
    image(pic2, 145, 121, 90, 90);
    text('李梅樹', 145+45, 121+110);
     if( isClick == 255){ mode = 5}
  }else{
    image(pic1, 145, 121, 90, 90);
    text('李梅樹', 145+45, 121+110);
  }
  if(mouseX>145+spaceX+90 && mouseX<145+90*2+spaceX && mouseY>121 && mouseY<121+90){
    image(pic4, 145+spaceX+90, 121, 90, 90);
    text('陳進', 145+spaceX+90+45, 121+110);
     if( isClick == 255){ mode = 6}
  }else{
    image(pic3, 145+spaceX+90, 121, 90, 90);
     text('陳進', 145+spaceX+90+45, 121+110);
  }
  if(mouseX>145+(spaceX+90)*2 && mouseX<145+90*3+spaceX*2 && mouseY>121 && mouseY<121+90){
    image(pic6, 145+(spaceX+90)*2, 121, 90, 90);
    text('洪瑞麟', 145+(spaceX+90)*2+45, 121+110);
     if( isClick == 255){ mode = 7}
  }else{
    image(pic5, 145+(spaceX+90)*2, 121, 90, 90);
    text('洪瑞麟', 145+(spaceX+90)*2+45, 121+110);
  }
  if(mouseX>145+(spaceX+90)*3 && mouseX<145+90*4+spaceX*3 && mouseY>121 && mouseY<121+90){
    image(pic8, 145+(spaceX+90)*3, 121, 90, 90);
    text('陳植棋', 145+(spaceX+90)*3+45, 121+110);
     if( isClick == 255){ mode = 8}
  }else{
    image(pic7, 145+(spaceX+90)*3, 121, 90, 90);
    text('陳植棋', 145+(spaceX+90)*3+45, 121+110);
  }
  if(mouseX>145 && mouseX<145+90 && mouseY>363 && mouseY<363+90){
    image(pic10, 145, 363, 90, 90);
    text('顏水龍', 145+45,  363+110);
     if( isClick == 255){ mode = 9}
  }else{
    image(pic9, 145, 363, 90, 90);
    text('顏水龍', 145+45,  363+110);
  }
  if(mouseX>145+spaceX+90 && mouseX<145+90*2+spaceX && mouseY>363 && mouseY<363+90){
    image(pic12, 145+spaceX+90, 363, 90, 90);
    text('廖繼春', 145+spaceX+90+45, 363+110);
     if( isClick == 255){ mode = 10}
  }else{
    image(pic11, 145+spaceX+90, 363, 90, 90);
    text('廖繼春', 145+spaceX+90+45, 363+110);
  }
  if(mouseX>145+(spaceX+90)*2 && mouseX<145+90*3+spaceX*2 && mouseY>363 && mouseY<363+90){
    image(pic14, 145+(spaceX+90)*2, 363, 90, 90);
    text('郭雪湖', 145+(spaceX+90)*2+45, 363+110);
     if( isClick == 255){ mode = 11}
  }else{
    image(pic13, 145+(spaceX+90)*2, 363, 90, 90);
    text('郭雪湖', 145+(spaceX+90)*2+45, 363+110);
  }
  if(mouseX>145+(spaceX+90)*3 && mouseX<145+90*4+spaceX*3 && mouseY>363 && mouseY<363+90){
    image(pic16, 145+(spaceX+90)*3, 363, 90, 90);
    text('陳澄波', 145+(spaceX+90)*3+45, 363+110);
     if( isClick == 255){ mode = 12}
  }else{
    image(pic15, 145+(spaceX+90)*3, 363, 90, 90);
    text('陳澄波', 145+(spaceX+90)*3+45, 363+110);
  }
  

  
  
}
function mousePressed() { //按鈕偵測
  if (isClick === 0) {
    isClick = 255;
  } else {
    isClick = 0;
  }
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}