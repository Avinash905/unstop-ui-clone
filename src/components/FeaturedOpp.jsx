import React, { useRef } from "react";
import "../styles/featuredopp.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { MdArrowRightAlt } from "react-icons/md";

const FeaturedOpp = ({ type }) => {
  const windowSize = useRef(window.innerWidth);

  return (
    <section className={`featuredopp ${type}-feature`}>
      <div className="featuredopp-container container">
        <div className="featuredopp-content">
          <h2>Featured Opportunities</h2>
          <p>
            Participate in these exceptional opportunities curated for the
            exceptional you!
          </p>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={windowSize.current <= 1000 ? 1 : 3}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          loop={true}
          modules={[Autoplay]}
          speed={800}
        >
          <SwiperSlide>
            <a
              href="https://unstop.com/hackathons/codegoda-2023-agoda-600316?refId=FEHOM"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="featureopp-card">
                <div className="featureopp-card-img">
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/63e102313d79b_codegoda-2023.jpg?d=413x236"
                    alt="banner"
                  />
                </div>
                <div className="featureopp-card-content">
                  <h4>
                    Agoda is back with Codegoda 2023 - Exciting rewards up for
                    grab!!
                  </h4>
                  <div className="featureopp-card-bottom">
                    <div className="card-badge">
                      <img
                        src="	https://d8it4huxumps7.cloudfront.net/uploads/images/63d1240708744_people_outline.svg"
                        alt="people"
                      />
                      <span>6,451 Registered</span>
                    </div>
                    <div className="card-badge">
                      <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/63c699aa6a592_calendar_today.svg"
                        alt="calendar"
                      />
                      <span>1 month left</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://unstop.com/awards/2023"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="featureopp-card">
                <div className="featureopp-card-img">
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/63b6573964184_newsletter.jpg?d=700x400"
                    alt="banner"
                  />
                </div>
                <div className="featureopp-card-content">
                  <h4>Unstop Awards 2023 is now live!</h4>
                  <div className="featureopp-card-bottom">
                    <span>
                      Nominate Now
                      <MdArrowRightAlt className="right-arrow" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://unstop.com/competitions/loreal-brandstorm-2023-loreal-553616?refId=FEHOM"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="featureopp-card">
                <div className="featureopp-card-img">
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/639c28d07908f_loreal-brandstorm-2023.jpg?d=413x236"
                    alt="banner"
                  />
                </div>
                <div className="featureopp-card-content">
                  <h4>L'Oréal Brandstorm 2023 - PPO and PPIs up for grab</h4>
                  <div className="featureopp-card-bottom">
                    <div className="card-badge">
                      <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/63c699aa6a592_calendar_today.svg
                        "
                        alt="calendar"
                      />
                      <span> 4 days left </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://unstop.com/competitions/stock-market-showdown-sigfest23-manipal-university-mu-jaipur-615612?refId=FEHOM"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="featureopp-card">
                <div className="featureopp-card-img">
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/lambda-pdfs/opportunity-bannerImages/1676809200.png?d=700x400"
                    alt="banner"
                  />
                </div>
                <div className="featureopp-card-content">
                  <h4>
                    Stock Market Showdown <br />
                    Manipal University (MU), Jaipur{" "}
                  </h4>
                  <div className="featureopp-card-bottom">
                    <div className="card-badge">
                      <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d1240708744_people_outline.svg
                        "
                        alt="people"
                      />
                      <span>575 Registered</span>
                    </div>
                    <div className="card-badge">
                      <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d1240708744_people_outline.svg
                        "
                        alt="calendar"
                      />
                      <span>3 days left</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://unstop.com/hackathons/flipkart-girls-wanna-code-40-flipkart-604383?refId=FEHOM"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="featureopp-card">
                <div className="featureopp-card-img">
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/63e269c2926dd_flipkart-girls-wanna-code-40.png?d=413x236"
                    alt="banner"
                  />
                </div>
                <div className="featureopp-card-content">
                  <h4>
                    Flipkart &lt;Girls Wanna Code 4.0/&gt;. is now Live |
                    Exciting Prizes up for Grabs, register now!
                  </h4>
                  <div className="featureopp-card-bottom">
                    <div className="card-badge">
                      <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d1240708744_people_outline.svg
                        "
                        alt="people"
                      />
                      <span>575 Registered</span>
                    </div>
                    <div className="card-badge">
                      <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d1240708744_people_outline.svg
                        "
                        alt="calendar"
                      />
                      <span>2 days left</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://unstop.com/online-quizzing-festival?refId=FEHOM"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="featureopp-card">
                <div className="featureopp-card-img">
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/63d78159f1066_online-quizzing-festival-oqf-season-8.jpg?d=413x236"
                    alt="banner"
                  />
                </div>
                <div className="featureopp-card-content">
                  <h4>
                    Online Quizzing Festival Season 8 powered by boAt is now
                    live! | Win ₹1 Lakh and boAt wearables as prizes!
                  </h4>
                  <div className="featureopp-card-bottom">
                    <div className="card-badge">
                      <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d1240708744_people_outline.svg
                        "
                        alt="people"
                      />
                      <span>30,745 Registered</span>
                    </div>
                    <div className="card-badge">
                      <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d1240708744_people_outline.svg
                        "
                        alt="calendar"
                      />
                      <span>9 days left</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedOpp;
