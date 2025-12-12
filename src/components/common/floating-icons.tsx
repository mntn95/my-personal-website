"use client";

import { useEffect, useState, useRef } from "react";
import { Code, Database, Globe, Terminal, Cpu, Zap } from "lucide-react";

const icons = [Code, Database, Globe, Terminal, Cpu, Zap];

interface FloatingIcon {
  id: number;
  Icon: typeof Code;
  x: number;
  y: number;
  rotation: number;
  size: number;
  speedX: number;
  speedY: number;
  rotationSpeed: number;
}

const FloatingIcons = (): React.ReactElement | null => {
  const mountedRef = useRef(true);
  const [mounted, setMounted] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>(() => {
    // Initialize with empty array for SSR
    return [];
  });

  // Initialize icons after mount to avoid hydration mismatch
  // This prevents SSR/client mismatch by only setting random values on client
  useEffect(() => {
    mountedRef.current = true;

    // Generate initial icons only on client
    const initialIcons = icons.map((Icon, index) => ({
      id: index,
      Icon,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotation: Math.random() * 360,
      size: 30 + Math.random() * 30,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      rotationSpeed: (Math.random() - 0.5) * 2,
    }));

    // Intentional setState in effect for client-side only initialization
    // This runs once on mount to avoid SSR hydration mismatch
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFloatingIcons(initialIcons);
    setMounted(true);

    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Separate animation effect
  useEffect(() => {
    if (!mounted || floatingIcons.length === 0) return;

    // Animation loop
    const animate = () => {
      // Check if component is still mounted before updating state
      if (!mountedRef.current) return;

      setFloatingIcons((prevIcons) =>
        prevIcons.map((icon) => {
          let newX = icon.x + icon.speedX;
          let newY = icon.y + icon.speedY;
          let newSpeedX = icon.speedX;
          let newSpeedY = icon.speedY;

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            newSpeedX = -newSpeedX;
            newX = Math.max(0, Math.min(window.innerWidth, newX));
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newSpeedY = -newSpeedY;
            newY = Math.max(0, Math.min(window.innerHeight, newY));
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
            rotation: (icon.rotation + icon.rotationSpeed) % 360,
          };
        })
      );
    };

    const intervalId = setInterval(animate, 16); // ~60fps

    return () => {
      clearInterval(intervalId);
    };
  }, [mounted, floatingIcons.length]);

  // Prevent SSR hydration mismatch - only render after mount
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingIcons.map((icon) => {
        const Icon = icon.Icon;
        return (
          <div
            key={icon.id}
            className="absolute text-teal-500/10"
            style={{
              transform: `translateX(${icon.x}px) translateY(${icon.y}px) rotate(${icon.rotation}deg)`,
              transition: "transform 0.016s linear",
            }}
          >
            <Icon width={icon.size} height={icon.size} />
          </div>
        );
      })}
    </div>
  );
};

export { FloatingIcons };
