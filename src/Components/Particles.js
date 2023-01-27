
export class Particles {
  constructor(ctx, x, y, color, hsl, extraSize, lifetime) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.size = 12;
    this.color = color
    this.hsl = hsl
    this.extraSize = extraSize
    this.lifetime = lifetime
  }

  update() {
    const extraSpace = this.extraSize ? 6 : 1;
    this.x += Math.random() * 3 * extraSpace - 1.5 * extraSpace
    this.y += Math.random() * 3 * extraSpace - 1.5 * extraSpace
    this.size = this.size > 0.2 ? this.size - 0.1 : this.size = 0;
  }

  draw() {
    this.ctx.fillStyle = 'hsl(' + this.hsl +', 100%, 50%)';
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI)
    this.ctx.fill();

  }

}
