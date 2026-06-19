function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    point.outline(ctx);
    ctx.fill();
}

let point = new Point();
point.r = 10;

window.setInterval(tick, 10);