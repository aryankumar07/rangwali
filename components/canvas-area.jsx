'use client';
import React, { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { drawLotusPetal } from '../rangoli/lotus-petal';
import { drawGeometricShape } from '../rangoli/gemoetric-shapes';
import { drawStarPattern } from '../rangoli/star-pattern';
import { drawMandalaElement } from '../rangoli/mandal-element';
import { drawPeacockFeather } from '../rangoli/peacock-feather';
import {
  petalsAtom,
  layersAtom,
  rotationAtom,
  schemeAtom,
  patternAtom,
  canvasWidthAtom,
  canvasHeightAtom,
} from '../store';
import { drawDiyaLamp } from '../rangoli/diya-lamp';
import { drawFlowerBloom } from '../rangoli/flower-bloom';
import { drawSwastik } from '../rangoli/draw-swastik';
import { drawFibonacciSpiral } from '../rangoli/fibonnaci-spiral';
import { drawParametricRose } from '../rangoli/parametric-rose';
import { drawMetatronsCube } from '../rangoli/metron-cubes';

const colorSchemes = {
  vibrant: ['#FF1744', '#FF9100', '#FFEA00', '#00E676', '#2979FF', '#D500F9'],
  traditional: ['#FF5722', '#FFC107', '#4CAF50', '#2196F3', '#9C27B0', '#E91E63'],
  pastel: ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#E0BBE4'],
  monochrome: ['#000000', '#424242', '#757575', '#BDBDBD', '#E0E0E0', '#FFFFFF'],
};

export function CanvasArea() {
  const canvasRef = useRef(null);

  const [petals] = useAtom(petalsAtom);
  const [layers] = useAtom(layersAtom);
  const [rotation] = useAtom(rotationAtom);
  const [colorScheme] = useAtom(schemeAtom);
  const [pattern] = useAtom(patternAtom);
  const [width] = useAtom(canvasWidthAtom);
  const [height] = useAtom(canvasHeightAtom);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions directly without DPR scaling complications
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);

    // CENTER THE DESIGN - use actual canvas dimensions
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.min(centerX, centerY);

    const colors = colorSchemes[colorScheme] || colorSchemes.vibrant;
    const angleStep = (Math.PI * 2) / Math.max(1, petals);

    for (let layer = 0; layer < layers; layer++) {
      const radius = maxRadius * (1 - layer / (layers + 1));
      const colorIndex = layer % colors.length;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((rotation * Math.PI) / 180);

      for (let i = 0; i < petals; i++) {
        const angle = i * angleStep;

        ctx.save();
        ctx.rotate(angle);


        let opts = [ctx, radius, colors[colorIndex], layer]

        if (pattern === 'lotus') {
          drawLotusPetal(...opts);
        } else if (pattern === 'geometric') {
          drawGeometricShape(...opts);
        } else if (pattern === 'mandala') {
          drawMandalaElement(...opts);
        } else if (pattern === 'star') {
          drawStarPattern(...opts);
        } else if (pattern === 'peacock') {
          drawPeacockFeather(...opts)
        } else if (pattern === 'lamp') {
          drawDiyaLamp(...opts)
        } else if (pattern === 'flower') {
          drawFlowerBloom(...opts)
        } else if (pattern === 'swastik') {
          drawSwastik(...opts)
        } else if (pattern === 'fiboonaci') {
          drawFibonacciSpiral(...opts)
        } else if (pattern === 'rose') {
          drawParametricRose(...opts)
        } else if (pattern === 'metron') {
          drawMetatronsCube(...opts)
        }

        ctx.restore();
      }

      ctx.restore();
    }

    // Center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, maxRadius / (layers + 2), 0, Math.PI * 2);
    ctx.fillStyle = colors[0];
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

  }, [petals, layers, rotation, colorScheme, pattern, width, height]);

  return (
    <div className="w-full h-full">
      <canvas
        data-no-drag
        ref={canvasRef}
        className="w-full h-full block rounded-md bg-transparent"
        style={{ touchAction: 'none', display: 'block' }}
      />
    </div>
  );
}

export default CanvasArea;
