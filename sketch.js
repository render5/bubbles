let bubble;
let bubbles = []
function preload(){

}

function setup() {
  frameRate(60)
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  background("blue")
  for(i=0; i<bubbles.length; i++){
    bubbles[i].move()
    if(bubbles[i] != null){
      bubbles[i].show()
    }
  }
}

function addBubble(){
  const newBubble = new Bubble(random(-1,1),random(-1,1),random(0.7,1.3))
  bubbles.push(newBubble)
}

class Bubble{

  constructor(vx,vy,a){
    this.x = mouseX
    this.y = mouseY
    if((Math.abs(vx)+Math.abs(vy))>1.5){
      vx = vx*0.7
      vy = vy*0.7
    }
    this.vx = vx *a
    this.vy = vy *a
    this.life = 240 + random(-50, 50)
    this.a = a
  }

  move(){
    if(this.life<=0){
      bubbles.splice(this.newBubble, 1)
    }
    this.x += this.vx*this.a
    this.y += this.vy*this.a
    this.life--
    if(this.a>0.3){
      this.a = this.a - 0.007
    }
  }

  show(){
    stroke(255)
    strokeWeight(2)
    noFill()
    ellipse(this.x, this.y, Math.log(this.life)*4-5)
  }
}

function mouseClicked() {
  for(i=0; i<24; i++){
    addBubble()
  }
}
