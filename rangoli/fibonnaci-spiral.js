export function drawFibonacciSpiral(ctx, radius, color, layer) {
  const scale = radius * 0.015;
  const goldenRatio = 1.618033988749895;

  // Draw Fibonacci spiral with squares
  let fib = [1, 1];
  for (let i = 2; i < 8; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.fillStyle = color + '40'; // Semi-transparent

  let x = 0, y = 0;
  let direction = 0; // 0: right, 1: up, 2: left, 3: down

  for (let i = 0; i < fib.length; i++) {
    const size = fib[i] * scale;

    // Draw square
    ctx.fillRect(x, y, size, size);
    ctx.strokeRect(x, y, size, size);

    // Draw quarter circle arc in the square
    ctx.beginPath();
    const cornerX = x + (direction === 0 || direction === 3 ? size : 0);
    const cornerY = y + (direction === 1 || direction === 2 ? 0 : size);
    ctx.arc(cornerX, cornerY, size,
      direction * Math.PI / 2,
      (direction + 1) * Math.PI / 2);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.strokeStyle = color;

    // Update position for next square
    switch (direction) {
      case 0: x += size; y -= size; break;
      case 1: break;
      case 2: x -= size; break;
      case 3: y += size; break;
    }
    direction = (direction + 1) % 4;
  }
}

