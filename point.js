class Point {
    constructor(pos = new Vec2(0, 0), vel = new Vec2(0, 0), r = 0) {
        this.pos = pos;
        this.vel = vel;
        this.r = r;
    }
    outline(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2 * Math.PI);
    }
}