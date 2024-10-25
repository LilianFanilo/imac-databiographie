import React, { useEffect, useRef } from "react";
import PageFour from "./components/layouts/PageFour";
import PageOne from "./components/layouts/PageOne";
import PageThree from "./components/layouts/PageThree";
import PageTwo from "./components/layouts/PageTwo";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <main className="flex overflow-x-scroll scroll-smooth max-h-[100vh] overflow-y-hidden">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Mousewheel,
          Keyboard,
        ]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ type: "fraction", clickable: true }}
        scrollbar={{ draggable: true }}
        mousewheel={true}
        keyboard={{ enabled: true }}
      >
        <SwiperSlide>
          <PageOne />
        </SwiperSlide>
        <SwiperSlide>
          <PageTwo />
        </SwiperSlide>
        <SwiperSlide>
          <PageThree />
        </SwiperSlide>
        <SwiperSlide>
          <PageFour />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}

export default App;
