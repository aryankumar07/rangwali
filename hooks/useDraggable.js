'use client'
import { useState, useRef } from "react";


export function useDraggable(initial = { x: 40, y: 40 }) {
  const [pos, setPos] = useState(initial);
  const draggingRef = useRef(false);
  const originRef = useRef({ x: 0, y: 0 });


  function onPointerDown(e) {
    // Start dragging
    draggingRef.current = true;
    originRef.current = { x: e.clientX, y: e.clientY };
    try { e.target.setPointerCapture(e.pointerId); } catch (_) { }
  }
  function onPointerMove(e) {
    if (!draggingRef.current) return;
    const dx = e.clientX - originRef.current.x;
    const dy = e.clientY - originRef.current.y;
    originRef.current = { x: e.clientX, y: e.clientY };
    setPos(p => ({ x: p.x + dx, y: p.y + dy }));
  }
  function onPointerUp(e) {
    draggingRef.current = false;
    try { e.target.releasePointerCapture(e.pointerId); } catch (_) { }
  }


  return { pos, onPointerDown, onPointerMove, onPointerUp, setPos };
}
