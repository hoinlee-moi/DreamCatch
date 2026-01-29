"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 마우스 위치를 0~1 범위로 정규화
      targetRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 부드러운 보간 애니메이션
    const animate = () => {
      mouseRef.current = {
        x:
          mouseRef.current.x +
          (targetRef.current.x - mouseRef.current.x) * 0.08,
        y:
          mouseRef.current.y +
          (targetRef.current.y - mouseRef.current.y) * 0.08,
      };

      // CSS 변수로 마우스 위치 전달
      document.documentElement.style.setProperty(
        "--mouse-x",
        mouseRef.current.x.toString(),
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        mouseRef.current.y.toString(),
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <svg className="absolute h-0 w-0" aria-hidden="true">
      <defs>
        {/* 배경 일렁임 필터 */}
        <filter
          id="background-ripple"
          x="-5%"
          y="-5%"
          width="110%"
          height="110%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="3"
            result="turbulence"
            seed="5"
          >
            <animate
              attributeName="baseFrequency"
              dur="10s"
              values="0.008;0.012;0.008"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          >
            <animate
              attributeName="scale"
              dur="8s"
              values="15;22;15"
              repeatCount="indefinite"
            />
          </feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
}
