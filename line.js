class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    outline(ctx) {
        ctx.moveTo(this.start.pos.x, this.start.pos.y);
        ctx.lineTo(this.end.pos.x, this.end.pos.y);
    }
    get x1() {
        return this.start.x;
    }
    get x2() {
        return this.end.x;
    }
    get y1() {
        return this.start.y;
    }
    get y2() {
        return this.end.y;
    }
    get length() {
        return this.start.distTo(this.end);
    }
    get direction() {
        return this.start.dirTo(this.end);
    }
    get directionVector() {
        return this.end.pos.subtracted(this.start.pos);
    }
    get normalVector() {
        let { x, y } = this.directionVector;
        return new Vec2(-y, x);
    }
    get normal() {
        return this.normalVector;
    }
    distToPoint(point) {
        return Point.distToLine(point, line);
    }
    static from({ x1, y1, x2, y2 }) {
        return new Line(Point.from({ x: x1, y: y1 }), Point.from({ x: x2, y: y2 }));
    }
}