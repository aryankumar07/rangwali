
export function drawFlowerBloom(ctx, radius, color, layer) {
  const petalCount = 8;
  const petalRadius = radius * 0.4;
  const angleStep = (Math.PI * 2) / petalCount;

  for (let i = 0; i < petalCount; i++) {
    const angle = i * angleStep;

    ctx.save();
    ctx.rotate(angle);

    // Draw petal
    ctx.beginPath();
    ctx.ellipse(0, -radius * 0.5, petalRadius * 0.4, petalRadius, 0, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.restore();
  }

  // Center circle
  ctx.beginPath();
  ctx.arc(0, 0, petalRadius * 0.35, 0, Math.PI * 2);
  ctx.fillStyle = '#FFD700';
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.stroke();
}
