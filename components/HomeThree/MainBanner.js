import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <Swiper 
        navigation={true} 
        autoplay={{
          delay: 6500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Navigation]} 
        className="home-slides"
      >
        <SwiperSlide>
          <div className="main-banner-item">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <h1>Digital Agency with Excellence Service</h1>
                    <p>
                      Transform your digital presence with our comprehensive SEO and marketing solutions. We deliver measurable results that drive growth and maximize your online potential.
                    </p>
                    <div className="banner-btn">
                      <Link href="/about-us" className="default-btn-one">
                        More About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="main-banner-item item-two">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <h1>Exquisite Digital Marketing Solutions</h1>
                    <p>
                      Discover the power of strategic digital marketing that drives real results. Our comprehensive approach combines SEO expertise, social media mastery, and data-driven insights.
                    </p>
                    <div className="banner-btn">
                      <Link href="/about-us" className="default-btn-one">
                        More About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
