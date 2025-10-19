export function drawDiyaLamp(ctx, radius, color, layer) {
  const lampWidth = radius * 0.5;
  const lampHeight = radius * 0.4;

  // Diya bowl
  ctx.beginPath();
  ctx.ellipse(0, lampHeight * 0.5, lampWidth, lampHeight * 0.6, 0, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Flame
  ctx.beginPath();
  ctx.moveTo(0, -lampHeight * 0.5);
  ctx.bezierCurveTo(
    lampWidth * 0.2, -lampHeight * 0.3,
    lampWidth * 0.2, lampHeight * 0.1,
    0, lampHeight * 0.5
  );
  ctx.bezierCurveTo(
    -lampWidth * 0.2, lampHeight * 0.1,
    -lampWidth * 0.2, -lampHeight * 0.3,
    0, -lampHeight * 0.5
  );

  // Gradient flame effect
  const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, lampHeight * 0.5);
  gradient.addColorStop(0, '#FFD700');
  gradient.addColorStop(0.5, '#FF8C00');
  gradient.addColorStop(1, '#FF4500');
  ctx.fillStyle = gradient;
  ctx.fill();

  // Flame highlight
  ctx.beginPath();
  ctx.ellipse(0, -lampHeight * 0.2, lampWidth * 0.08, lampHeight * 0.15, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.fill();
}
