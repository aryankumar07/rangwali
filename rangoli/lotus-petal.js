export function drawLotusPetal(ctx, radius, color) {
  ctx.beginPath();
  ctx.moveTo(0, 0);

  const petalWidth = radius * 0.4;
  const petalHeight = radius * 0.8;

  ctx.bezierCurveTo(petalWidth / 2, petalHeight / 3, petalWidth / 2, (petalHeight * 2) / 3, 0, petalHeight);
  ctx.bezierCurveTo(-petalWidth / 2, (petalHeight * 2) / 3, -petalWidth / 2, petalHeight / 3, 0, 0);

  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, petalHeight * 0.2);
  ctx.lineTo(0, petalHeight * 0.7);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.lineWidth = 1;
  ctx.stroke();
}
