class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.hit = []
  }

  display() {
    
    super.display();

    var position = [this.body.position.x,this.body.position.y]
    this.hit.push(position);
    for(var i = 0; i < this.hit.length; i = i+1){
      image(this.smoke,this.hit[i][0],this.hit[i][1]);
    }

    
  }
}
