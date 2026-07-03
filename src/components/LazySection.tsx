import React, { useState, useEffect, useRef } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  placeholderHeight?: string;
}

export const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  placeholderHeight = "300px" 
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px", // Trigger when the section is within 300px of the viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ minHeight: isIntersecting ? undefined : placeholderHeight }}
      className="w-full"
    >
      {isIntersecting ? children : null}
    </div>
  );
};
