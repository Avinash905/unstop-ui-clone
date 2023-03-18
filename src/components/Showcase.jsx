import React, { useRef } from "react";
import "../styles/showcase.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const Showcase = ({ type }) => {
  const banners = [
    "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63e11ac59ca18_Codegoda-2023-Unstop-1280x500.jpg?d=1266x494",
    "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63e0f87cc8f87_Rotating__5_.jpeg?d=1266x494",
    "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63e4c084079e8_Rotating__3_.jpg?d=1266x494",
    "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63a43fe8bb9b3_Rotating-Banner.jpg?d=1266x494",
    "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63f3487fee501_Homepage_Banner.png?d=1266x494",
    "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63da58d8acba8_Rotating-Banner.jpg?d=1266x494",
  ];
  const windowSize = useRef(window.innerWidth);

  return (
    <section className={`showcase ${type}-showcase`}>
      <div className="showcase-container container">
        <Swiper
          spaceBetween={1}
          slidesPerView={windowSize.current <= 1150 ? 1 : 2}
          pagination={(true, { clickable: true })}
          autoplay={{
            delay: 3500,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          speed={800}
        >
          {banners.map((ele, i) => {
            return (
              <SwiperSlide key={i}>
                <img
                  src={ele}
                  alt={"brand"}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Showcase;
