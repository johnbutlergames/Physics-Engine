class Force {
    constructor(accel = new Vec2(0, 0), m = 0) {
        this.accel = accel;
        this.m = m;
    }
    static from({ x, y, m }) {
        return new Force(new Vec2(x, y), m);
    }
}