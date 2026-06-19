function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(100, 100);

    ctx.strokeStyle = "black";
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

    ctx.strokeStyle = "red";
    let r = ball.distToLine(lines[0]);
    ctx.beginPath();
    ctx.arc(ball.pos.x, ball.pos.y, Math.max(r, 0), 0, 2 * Math.PI);
    ctx.stroke();

    let lineToPoint = ball.pos.subtracted(lines[0].start.pos);
    ctx.save();
    ctx.translate(lines[0].start.pos.x, lines[0].start.pos.y);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(lineToPoint.x, lineToPoint.y);
    ctx.stroke();
    ctx.restore();

    ctx.strokeStyle = "blue";
    let normal = lines[0].normal;
    ctx.save();
    ctx.translate(lines[0].start.pos.x, lines[0].start.pos.y);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(normal.x, normal.y);
    ctx.stroke();
    ctx.restore();

    ctx.strokeStyle = "green";
    let project = normal.project(lineToPoint);
    ctx.save();
    ctx.translate(lines[0].start.pos.x, lines[0].start.pos.y);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(project.x, project.y);
    ctx.stroke();
    ctx.restore();

    ctx.restore();
}

let lines = [
    Line.from({ x1: 0, y1: 200, x2: 200, y2: 200 })
];
let ball = Point.from({ x: 50, y: 50, r: 10, m: 10 });
let gravity = Force.from({ x: 0, y: 0.001, m: 10 });

window.setInterval(tick, 10);