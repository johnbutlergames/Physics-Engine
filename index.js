function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let line of lines) {
        ctx.beginPath();
        line.outline(ctx);
        ctx.stroke();
    }

    ctx.beginPath();
    ball.outline(ctx);
    ctx.stroke();

    ball.exert(gravity);
    ball.pos.add(ball.vel);
}

let lines = [
    Line.from({ x1: 0, y1: 200, x2: 200, y2: 200 })
];
let ball = Point.from({ x: 50, y: 50, r: 10, m: 10 });
let gravity = Force.from({ x: 0, y: 0.1, m: 10 });

let p1 = new Point(new Vec2(0, 0), new Vec2(0, 0), 10);
let p2 = new Point(new Vec2(100, 100), new Vec2(1, 1), 10);
let line = new Line(p1, p2);

window.setInterval(tick, 10);