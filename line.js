class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
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
    outline(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.start.pos.x, this.start.pos.y);
        ctx.lineTo(this.end.pos.x, this.end.pos.y);
    }
}