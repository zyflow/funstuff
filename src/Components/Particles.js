
export class Particles {
  constructor(ctx, x, y) {
    this.ctx = ctx
    this.x = x
    this.y = y
  }

  update() {
    console.log('ctx', this.ctx);
    // this.x += Math.random() * 3 - 1.5
    // this.y += Math.random() * 3 - 1.5
    // this.size = Math.random() * 5 + 1
    console.log(this.x, this.y);
  }

  draw() {
    // this.ctx.globalCompositeOperation = 'destination-over'
    // this.ctx.fillStyle = "red";
    // this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 20, 0, 2*Math.PI)
    this.ctx.fillStyle = 'green';
    this.ctx.fill();

    // setTimeout(() => {
    //   // this.ctx.globalCompositeOperation = 'destination-over'
    //   // this.ctx.beginPath();
    //   // this.ctx.arc(this.x, this.y, 4, 0, 2*Math.PI)
    //   // this.ctx.fill();
    //   // this.ctx.fillStyle = 'white';
    //   // this.ctx.fillRect(0, 0, 1000, 1000)
    // }, 300)
  }

}
