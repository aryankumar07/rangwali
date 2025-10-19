export function drawSwastik(ctx, radius, color, layer) {
  const armLength = radius * 0.6;
  const armWidth = radius * 0.15;

  // Draw four arms of swastik
  const arms = [
    { x: 0, y: -armLength, rot: 0 },
    { x: armLength, y: 0, rot: Math.PI / 2 },
    { x: 0, y: armLength, rot: Math.PI },
    { x: -armLength, y: 0, rot: -Math.PI / 2 }
  ];

  arms.forEach(arm => {
    ctx.save();
    ctx.translate(arm.x / 2, arm.y / 2);
    ctx.rotate(arm.rot);

    // Vertical arm
    ctx.fillStyle = color;
    ctx.fillRect(-armWidth / 2, -armLength / 2, armWidth, armLength);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.strokeRect(-armWidth / 2, -armLength / 2, armWidth, armLength);

    // Hook at the end
    ctx.fillRect(armWidth / 2, -armLength / 2, armWidth * 1.5, armWidth);
    ctx.strokeRect(armWidth / 2, -armLength / 2, armWidth * 1.5, armWidth);

    ctx.restore();
  });

  // Center square
  ctx.fillStyle = color;
  ctx.fillRect(-armWidth / 2, -armWidth / 2, armWidth, armWidth);
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.strokeRect(-armWidth / 2, -armWidth / 2, armWidth, armWidth);

  // Center dot
  ctx.beginPath();
  ctx.arc(0, 0, armWidth * 0.2, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
}
