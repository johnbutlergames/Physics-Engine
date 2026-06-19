function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    line.outline(ctx);
    ctx.stroke();
}

let p1 = new Point(new Vec2(0, 0), new Vec2(0, 0), 10);
let p2 = new Point(new Vec2(100, 100), new Vec2(0, 0), 10);
let line = new Line(p1, p2);

window.setInterval(tick, 10);