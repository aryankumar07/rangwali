export function drawParametricRose(ctx, radius, color, layer) {
  const n = 5; // Number of petals
  const d = 3; // Petal density
  const scale = radius * 0.7;
  const points = 360;

  ctx.beginPath();

  for (let i = 0; i <= points; i++) {
    const theta = (i / points) * Math.PI * 2;
    const r = scale * Math.cos((n / d) * theta);
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.closePath();
  ctx.fillStyle = color + '50';
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Add inner detail curves
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;

  for (let j = 0.3; j <= 0.9; j += 0.3) {
    ctx.beginPath();
    for (let i = 0; i <= points; i++) {
      const theta = (i / points) * Math.PI * 2;
      const r = scale * j * Math.cos((n / d) * theta);
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }
}
