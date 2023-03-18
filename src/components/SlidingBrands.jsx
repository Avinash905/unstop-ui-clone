import React from "react";
import "../styles/slidingbrands.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const SlidingBrands = ({ small, title }) => {
  const brands = [
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/6267c59c0bd2b_Optum-logo-ora-RGB.png?d=206x60",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/607e6ca5ed02c_hul.png?d=120x120",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7d1507d36da_New_Project__1_.png?d=152x100",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/60ad0f7d5e8a5_unnamed.jpg?d=130x130",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7a83fcaf7f9_tata-group.png?d=120x120",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6329759f75453_listing-logo.jpg?d=110x110",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/63634d98de3ee_swiss_re_2013_logo.svg__1_.png?d=110x24",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f71b31560f72_Acc_Logo_Black_Purple_RGB.png?d=220x58",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5e895eb520e7b_hero_motocorp.png?d=188x62",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7a7bebf06cc_aditya.png?d=168x96",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners75/5c77b3e35903f_KPMG.png?d=175x72",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/60d5e91b93542_PepsiCo_logo.png?d=120x34",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/63dcfec0b7c7a_agoda_new.png?d=220x112",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners75/5c7d0d3c318e3_Airtel.png?d=175x58",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/63e0f796d74c0_uber.png?d=120x120",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/633d3fe0b3536_challenge_logo.jpg?d=110x110",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/60d5e91b93542_PepsiCo_logo.png?d=120x34",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7d138408595_image__15_.png?d=200x200",
  ];

  return (
    <section className="slidingbrands">
      <div className="slidingbrands-container">
        <h2>
          {small}
          <span>{title}</span>
        </h2>
        <div className="brands-container">
          <Swiper
            spaceBetween={1}
            slidesPerView={6}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            speed={2000}
          >
            {brands.map((ele, i) => {
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
      </div>
    </section>
  );
};

export default SlidingBrands;
