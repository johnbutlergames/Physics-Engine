class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }
    multiply(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
    }
    divide(vector) {
        this.x /= vector.x;
        this.y /= vector.y;
    }
    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }
    added(vector) {
        return new Vec2(this.x + vector.x, this.y + vector.y);
    }
    subtracted(vector) {
        return new Vec2(this.x - vector.x, this.y - vector.y);
    }
    multiplied(vector) {
        return new Vec2(this.x * vector.x, this.y * vector.y);
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y;
    }
    divided(vector) {
        return new Vec2(this.x / vector.x, this.y / vector.y);
    }
    scaled(scalar) {
        return new Vec2(this.x * scalar, this.y * scalar);
    }
    distTo(vector) {
        return distTo(this.x, this.y, vector.x, vector.y);
    }
    dirTo(vector) {
        return dirTo(this.x, this.y, vector.x, vector.y);
    }
    length() {
        return distTo(0, 0, this.x, this.y);
    }
    direction() {
        return dirTo(0, 0, this.x, this.y);
    }
    copy() {
        return new Vec2(this.x, this.y);
    }
}