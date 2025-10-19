export function drawStarPattern(ctx, radius, color) {
  const size = radius * 0.5;

  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(size * 0.3, 0);
  ctx.lineTo(0, size);
  ctx.lineTo(-size * 0.3, 0);
  ctx.closePath();

  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, size * 0.6, size * 0.15, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
}

