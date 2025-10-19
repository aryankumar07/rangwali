export function drawGeometricShape(ctx, radius, color) {
  const size = radius * 0.6;
  const sides = 6;

  ctx.beginPath();
  for (let i = 0; i < sides; i++) {
    const angle = (i * Math.PI * 2) / sides;
    const x = Math.cos(angle) * size;
    const y = Math.sin(angle) * size;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();

  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.stroke();
}

