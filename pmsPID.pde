import processing.serial.*;


PShape PID;
Serial port;

static int index, previndex;
static String data = "0";
static float angle = 0;
static float pwmleft = 0;
static float pwmright = 0;

static float presentangle = 0;
static float rotation = 0;

void setup() {
  size(650, 650, P3D);
  
  port = new Serial(this, "COM4", 250000); 
  port.bufferUntil('|');
  
  PID = loadShape("tinker.obj");
  PID.rotateX(radians(90));
}

void draw() {
  background(0xffffffff);
  
  fill(51, 66, 87);
  textSize(20);
  text("PID CONTROL" , -60, -240,0);
  textSize(15);
  text("Angle: " + angle, -80, -200,0);
  text("Left pwm: " + pwmleft, -80, -170,0);
  text("Right pwm: " + pwmright, -80, -140,0);
  
  lights();
    camera(0, -50, 350,
    0, -80, 0,
    0, 1, 0);
  shape(PID); 
  
  //PID.rotateZ(radians(10));
  PID.rotate(radians(rotation), 0.0, 0.0, 1.0);
  presentangle += rotation;
  
}



void serialEvent(Serial port){
   data = port.readStringUntil('|');
   
   index = data.indexOf("an");
   angle = float(data.substring(0,index));
   rotation =  angle - presentangle;
   previndex = index;
   
   index = data.indexOf("pl");
   pwmleft = float(data.substring(previndex+2,index));
   previndex = index;
   
   index = data.indexOf("pr");
   pwmright = float(data.substring(previndex+2,index));
   
   index = 0;
   previndex = 0;
}
