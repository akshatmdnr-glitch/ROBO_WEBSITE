'use client';

import React, { useEffect, useRef } from 'react';

export default function InteractiveLidarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Robot center position
    const robot = {
      x: width * 0.5,
      y: height * 0.5,
      angle: 0,
      radius: 18,
    };

    // Simulated Obstacles
    const obstacles = [
      { x: width * 0.25, y: height * 0.3, radius: 45 },
      { x: width * 0.75, y: height * 0.35, radius: 50 },
      { x: width * 0.3, y: height * 0.75, radius: 60 },
      { x: width * 0.8, y: height * 0.8, radius: 40 },
      { x: width * 0.5, y: height * 0.2, radius: 30 },
    ];

    let sweepAngle = 0;
    const lidarPoints: { x: number; y: number; alpha: number }[] = [];

    // Mouse tracking for interactive point cloud distraction
    let mouseX = robot.x;
    let mouseY = robot.y;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.fillStyle = '#F8F6F1';
      ctx.fillRect(0, 0, width, height);

      // Smoothly drift robot toward mouse subtly
      robot.x += (mouseX - robot.x) * 0.02;
      robot.y += (mouseY - robot.y) * 0.02;

      // Draw subtle grid
      const gridSize = 48;
      ctx.strokeStyle = 'rgba(24, 58, 45, 0.04)';
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

      // Draw concentric LIDAR range rings
      [100, 200, 300, 400].forEach((r) => {
        ctx.beginPath();
        ctx.arc(robot.x, robot.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(33, 77, 59, 0.08)';
        ctx.stroke();

        // Distance text
        ctx.fillStyle = 'rgba(102, 115, 108, 0.5)';
        ctx.font = '10px monospace';
        ctx.fillText(`${(r / 50).toFixed(1)}m`, robot.x + r + 4, robot.y);
      });

      // Update sweep angle
      sweepAngle += 0.03;
      const sweepDistance = 380;

      // Calculate LIDAR ray intersections
      for (let i = 0; i < 6; i++) {
        const currentRayAngle = sweepAngle - i * 0.02;
        let rayDist = sweepDistance;

        // Check intersection with obstacles
        for (const obs of obstacles) {
          const dx = obs.x - robot.x;
          const dy = obs.y - robot.y;
          const angleToObs = Math.atan2(dy, dx);
          const distToObs = Math.hypot(dx, dy);

          // Angle diff normalized
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

        // Draw laser ray beam
        ctx.beginPath();
        ctx.moveTo(robot.x, robot.y);
        ctx.lineTo(hitX, hitY);
        ctx.strokeStyle = i === 0 ? 'rgba(33, 77, 59, 0.5)' : 'rgba(33, 77, 59, 0.12)';
        ctx.lineWidth = i === 0 ? 1.5 : 1;
        ctx.stroke();
      }

      // Draw obstacle rings
      obstacles.forEach((obs) => {
        ctx.beginPath();
        ctx.arc(obs.x, obs.y, obs.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(230, 226, 218, 0.5)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(33, 77, 59, 0.15)';
        ctx.stroke();
      });

      // Fade out accumulated point cloud points
      for (let i = lidarPoints.length - 1; i >= 0; i--) {
        const pt = lidarPoints[i];
        pt.alpha -= 0.008;

        if (pt.alpha <= 0) {
          lidarPoints.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(33, 77, 59, ${pt.alpha * 0.7})`;
        ctx.fill();
      }

      // Draw Robot Chassis Icon
      ctx.beginPath();
      ctx.arc(robot.x, robot.y, robot.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#FCFBF8';
      ctx.fill();
      ctx.strokeStyle = '#214D3B';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Inner direction indicator
      ctx.beginPath();
      ctx.moveTo(robot.x, robot.y);
      ctx.lineTo(
        robot.x + Math.cos(sweepAngle) * (robot.radius + 8),
        robot.y + Math.sin(sweepAngle) * (robot.radius + 8)
      );
      ctx.strokeStyle = '#214D3B';
      ctx.lineWidth = 2;
      ctx.stroke();

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
    <div className="absolute inset-0 w-full h-full pointer-events-auto opacity-70">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
