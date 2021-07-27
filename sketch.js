let bubble;
let bubbles = []
function preload(){

}

function setup() {
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
  if(mouseIsPressed){
    addBubble()
  }
}

function addBubble(){
  const newBubble = new Bubble(random(-1,1),random(-1,1),random(0.7,1.3), mouseX, mouseY)
  bubbles.push(newBubble)
}

function shakeBubble(){
  let ranW = Math.floor(random(0,2))*windowWidth
  let ranH= Math.floor(random(0,2))*windowHeight
  var newBubble = new Bubble(random(-1,1),random(-1,1),random(0.7,1.3), ranW, random(0,windowHeight))
  bubbles.push(newBubble)
  newBubble = new Bubble(random(-1,1),random(-1,1),random(0.7,1.3), random(0,windowWidth), ranH)
  bubbles.push(newBubble)
}

class Bubble{

  constructor(vx, vy, a, posx, posy){
    this.size = random(0,0.15)
    this.x = posx
    this.y = posy
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

    this.x += this.vx*this.a
    this.y += this.vy*this.a
    this.life--
    if(this.a>0.3){
      this.a = this.a - 0.007
    }
    if(this.life<=0){
      bubbles.splice(this.newBubble, 1)
    }
  }

  show(){
    stroke(255,this.life-20)
    strokeWeight(2)
    noFill()
    ellipse(this.x, this.y, (Math.log(this.life+1)*4-5)+this.size*(this.life))
  }
}

function mouseClicked() {
  for(i=0; i<24; i++){
    addBubble()
  }
}

function deviceShaken() {
  for(i=0; i<24; i++){
    addBubble()
  }
}
