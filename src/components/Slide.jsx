import React, { useEffect, useRef, useState } from "react";

const Slide = (props) => {
  const { backgroundImage, children } = props;
  const [isVisible, setIsVisible] = useState(false);
  const slideRef = useRef(null);

  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => {
      if (slideRef.current) {
        observer.unobserve(slideRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={slideRef}
      className={`grid min-w-[100vw] h-screen grid-cols-2 p-12 pt-4 gap-x-6 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={divStyle}
    >
      {children}
    </div>
  );
};

export default Slide;
