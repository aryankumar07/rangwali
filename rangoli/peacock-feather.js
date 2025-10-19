export function drawPeacockFeather(ctx, radius, color) {
  const featherLength = radius * 0.8;
  const featherWidth = radius * 0.35;

  // Main feather shaft
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, featherLength);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();

  // Feather eye (top circle)
  ctx.beginPath();
  ctx.ellipse(0, featherLength * 0.85, featherWidth * 0.5, featherWidth * 0.6, 0, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Inner eye detail
  ctx.beginPath();
  ctx.arc(0, featherLength * 0.85, featherWidth * 0.25, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(0, featherLength * 0.85, featherWidth * 0.12, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();

  // Side barbs
  for (let i = 1; i < 5; i++) {
    const y = (featherLength * i) / 6;
    const barbLength = featherWidth * (1 - i / 6);

    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.quadraticCurveTo(barbLength * 0.5, y + barbLength * 0.3, barbLength, y + barbLength * 0.5);
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.7 - i * 0.1})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.quadraticCurveTo(-barbLength * 0.5, y + barbLength * 0.3, -barbLength, y + barbLength * 0.5);
    ctx.stroke();
  }
}
