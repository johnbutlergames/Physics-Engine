class Point {
    constructor(pos = new Vec2(0, 0), vel = new Vec2(0, 0), r = 0, m = 0) {
        this.pos = pos; // position
        this.vel = vel; // velocity
        this.r = r;     // radius
        this.m = m;     // mass
    }
    outline(ctx) {
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2 * Math.PI);
    }
    distTo(point) {
        return this.pos.distTo(point.pos);
    }
    dirTo(point) {
        return this.pos.dirTo(point.pos);
    }
    exert(force) {
        this.vel.add(force.accel.scaled(force.m / this.m));
    }
    distToLine(line) {
        return Point.distToLine(this, line);
    }
    static distToLine(point, line) {
        let lineToPoint = point.pos.subtracted(line.start.pos);
        return line.normal.project(lineToPoint).length() - point.r;
        // The part of the line to the point that points in the direction of the normal of the line
        // minus the radius of the point
    }
    static from({ x = 0, y = 0, xmove = 0, ymove = 0, r = 0, m = 0 }) {
        return new Point(new Vec2(x, y), new Vec2(xmove, ymove), r, m);
    }
}