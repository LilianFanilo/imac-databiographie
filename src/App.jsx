import React, { useEffect, useRef } from "react";
import PageFour from "./components/layouts/PageFour";
import PageOne from "./components/layouts/PageOne";
import PageThree from "./components/layouts/PageThree";
import PageTwo from "./components/layouts/PageTwo";

function App() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (wrapperRef.current && !isScrolling) {
        wrapperRef.current.scrollLeft += e.deltaY * 15.2;
        isScrolling = true;
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    let isScrolling = false;

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <main
      ref={wrapperRef}
      className="flex overflow-x-scroll scroll-smooth max-h-[100vh] overflow-y-hidden"
    >
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </main>
  );
}

export default App;
