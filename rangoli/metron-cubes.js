export function drawMetatronsCube(ctx, radius, color, layer) {
  const r = radius * 0.5;

  // 13 circles of Metatron's Cube
  const circles = [
    { x: 0, y: 0 }, // Center
    // Inner hexagon
    { x: r * Math.cos(0), y: r * Math.sin(0) },
    { x: r * Math.cos(Math.PI / 3), y: r * Math.sin(Math.PI / 3) },
    { x: r * Math.cos(2 * Math.PI / 3), y: r * Math.sin(2 * Math.PI / 3) },
    { x: r * Math.cos(Math.PI), y: r * Math.sin(Math.PI) },
    { x: r * Math.cos(4 * Math.PI / 3), y: r * Math.sin(4 * Math.PI / 3) },
    { x: r * Math.cos(5 * Math.PI / 3), y: r * Math.sin(5 * Math.PI / 3) },
    // Outer hexagon
    { x: r * 1.5 * Math.cos(Math.PI / 6), y: r * 1.5 * Math.sin(Math.PI / 6) },
    { x: r * 1.5 * Math.cos(Math.PI / 2), y: r * 1.5 * Math.sin(Math.PI / 2) },
    { x: r * 1.5 * Math.cos(5 * Math.PI / 6), y: r * 1.5 * Math.sin(5 * Math.PI / 6) },
    { x: r * 1.5 * Math.cos(7 * Math.PI / 6), y: r * 1.5 * Math.sin(7 * Math.PI / 6) },
    { x: r * 1.5 * Math.cos(3 * Math.PI / 2), y: r * 1.5 * Math.sin(3 * Math.PI / 2) },
    { x: r * 1.5 * Math.cos(11 * Math.PI / 6), y: r * 1.5 * Math.sin(11 * Math.PI / 6) }
  ];

  // Draw connecting lines (Platonic solids)
  ctx.strokeStyle = color + '60';
  ctx.lineWidth = 1.5;

  for (let i = 0; i < circles.length; i++) {
    for (let j = i + 1; j < circles.length; j++) {
      ctx.beginPath();
      ctx.moveTo(circles[i].x, circles[i].y);
      ctx.lineTo(circles[j].x, circles[j].y);
      ctx.stroke();
    }
  }

  // Draw circles
  const circleRadius = r * 0.15;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;

  circles.forEach(circle => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circleRadius, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Fill center circle
  ctx.beginPath();
  ctx.arc(0, 0, circleRadius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}
