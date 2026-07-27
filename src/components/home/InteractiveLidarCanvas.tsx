'use client';

import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  alpha: number;
}

export default function InteractiveLidarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Robot pose
    const robot = {
      x: width * 0.5,
      y: height * 0.45,
      radius: 12,
    };

    // Static obstacles
    const obstacles = [
      { x: width * 0.2, y: height * 0.25, radius: 24 },
      { x: width * 0.8, y: height * 0.35, radius: 32 },
      { x: width * 0.3, y: height * 0.7, radius: 20 },
      { x: width * 0.75, y: height * 0.75, radius: 28 },
      { x: width * 0.5, y: height * 0.8, radius: 18 },
    ];

    const lidarPoints: Point[] = [];
    let sweepAngle = 0;
    let mouseX = robot.x;
    let mouseY = robot.y;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.fillStyle = '#FAF8F5';
      ctx.fillRect(0, 0, width, height);

      // Smoothly drift robot toward mouse subtly
      robot.x += (mouseX - robot.x) * 0.02;
      robot.y += (mouseY - robot.y) * 0.02;

      // Subtle grid
      const gridSize = 56;
      ctx.strokeStyle = 'rgba(17, 24, 39, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Concentric LIDAR range rings
      [100, 200, 300, 400].forEach((r) => {
        ctx.beginPath();
        ctx.arc(robot.x, robot.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(17, 24, 39, 0.04)';
        ctx.stroke();

        ctx.fillStyle = 'rgba(107, 114, 128, 0.4)';
        ctx.font = '10px monospace';
        ctx.fillText(`${(r / 50).toFixed(1)}m`, robot.x + r + 4, robot.y);
      });

      // Update sweep angle
      sweepAngle += 0.02;
      const sweepDistance = 380;

      // Calculate LIDAR ray intersections
      for (let i = 0; i < 5; i++) {
        const currentRayAngle = sweepAngle - i * 0.02;
        let rayDist = sweepDistance;

        for (const obs of obstacles) {
          const dx = obs.x - robot.x;
          const dy = obs.y - robot.y;
          const angleToObs = Math.atan2(dy, dx);
          const distToObs = Math.hypot(dx, dy);

          let angleDiff = Math.abs(currentRayAngle - angleToObs) % (Math.PI * 2);
          if (angleDiff > Math.PI) angleDiff = Math.PI * 2 - angleDiff;

          if (angleDiff < Math.asin(obs.radius / Math.max(distToObs, 1))) {
            const hitDist = distToObs - obs.radius;
            if (hitDist > 0 && hitDist < rayDist) {
              rayDist = hitDist;
            }
          }
        }

        const hitX = robot.x + Math.cos(currentRayAngle) * rayDist;
        const hitY = robot.y + Math.sin(currentRayAngle) * rayDist;

        lidarPoints.push({ x: hitX, y: hitY, alpha: 1.0 });

        ctx.beginPath();
        ctx.moveTo(robot.x, robot.y);
        ctx.lineTo(hitX, hitY);
        ctx.strokeStyle = i === 0 ? 'rgba(75, 85, 99, 0.25)' : 'rgba(17, 24, 39, 0.05)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw obstacles
      obstacles.forEach((obs) => {
        ctx.beginPath();
        ctx.arc(obs.x, obs.y, obs.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(229, 231, 235, 0.4)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(17, 24, 39, 0.06)';
        ctx.stroke();
      });

      // Fade point cloud
      for (let i = lidarPoints.length - 1; i >= 0; i--) {
        const pt = lidarPoints[i];
        pt.alpha -= 0.01;

        if (pt.alpha <= 0) {
          lidarPoints.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(75, 85, 99, ${pt.alpha * 0.4})`;
        ctx.fill();
      }

      // Center Chassis (Accent ONLY here)
      ctx.beginPath();
      ctx.arc(robot.x, robot.y, robot.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.strokeStyle = '#4B5563';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(robot.x, robot.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#4B5563';
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto opacity-35">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
