 let y1=300;
let y2=300;
let target = 100;
let kp;
let ki;
let kd;
let sec=0;
let i=0;
let d=0;
let prev_error = 0;
let error =0;

let p_slider,i_slider,d_slider;

let prev_error2 = 0;
let error2 =0;
function setup() {
  createCanvas(600, 600);
  
  p_slider = createSlider(0,5,1,0.1)
  i_slider = createSlider(0,1,0,0.1)
  d_slider = createSlider(0,1,0,0.1)
  

  
  
    kp = p_slider.value();
  ki = i_slider.value();
  kd = d_slider.value();
  
  
  p_slider.position(20,height-100)
  p_slider.input(resetparams);
   i_slider.position(20,height-70)
  i_slider.input(resetparams);
   d_slider.position(20,height-40)
  d_slider.input(resetparams);
  
  prev_error = y1-target;
  
}


function resetparams(){
    y1=300;
  
    kp = p_slider.value();
  ki = i_slider.value();
  kd = d_slider.value();
  
  p=0;
  i=0;
  d=0;
  
  
}

function draw() {
  background(17,17,17);
  textSize(32);
  fill(255)
  //text("PID Playground" , width/2-120,60)
  
  textSize(12);
  
  
  
    text("P",50,height-110)
   text(p_slider.value(),155,height-87)
  
    text("I",50,height-70)
  text(i_slider.value(),155,height-57)
    text("D",50,height-40)
  text(d_slider.value(),155,height-27)
    kp = p_slider.value();
  ki = i_slider.value();
  kd = d_slider.value();
  

  
  

  
   fill(255,0,0,150);
  for(let x=0;x<width+20;x=x+20)
   ellipse(x,target,8,8);
 
  if(mouseIsPressed){
    y1=mouseY;
    
  }
 
  
 
  
  error = y1-target;
  fill(255)
  text("Error :"+error,width/2-50,height-50)
  p = kp*((error)/target);
  i  += ki*((error)/target);
  
  d -= kd*( (error)/target);
  prev_error1 = error;
  
  
  y1 =y1- p-i-d;
   fill(255,150);
   ellipse(width/2,y1,16,16);

  


}