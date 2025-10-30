import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div className="testimonial-section ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Testimonial</span>
            <h3>What Our Client Say</h3>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="testimonial-slides"
          >
            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/client-image/1.jpg" alt="image" />
                </div>

                <div className="testimonial-content-text">
                  <h3>Sarah Johnson</h3>
                  <span>Marketing Director</span>
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    "Techsa Zone transformed our online presence completely. Our organic traffic increased by 300% within 6 months, and we're now ranking #1 for our target keywords. Their expertise and dedication are unmatched."
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/client-image/2.jpg" alt="image" />
                </div>

                <div className="testimonial-content-text">
                  <h3>Michael Chen</h3>
                  <span>CEO & Founder</span>
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    "The ROI from our digital marketing campaigns has exceeded all expectations. Techsa Zone's data-driven approach and transparent reporting gave us complete confidence in our investment. Our revenue increased by 280% in just 8 months."
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/client-image/3.jpg" alt="image" />
                </div>

                <div className="testimonial-content-text">
                  <h3>Emily Rodriguez</h3>
                  <span>E-commerce Manager</span>
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    "Our social media engagement skyrocketed after partnering with Techsa Zone. They understand our brand voice and consistently deliver content that resonates with our audience. Our follower growth increased by 400%."
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/client-image/4.jpg" alt="image" />
                </div>

                <div className="testimonial-content-text">
                  <h3>David Thompson</h3>
                  <span>Business Owner</span>
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    "Working with Techsa Zone was a game-changer for our local business. We went from invisible online to dominating local search results and attracting quality leads consistently. Our local search visibility improved by 500%."
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/client-image/1.jpg" alt="image" />
                </div>

                <div className="testimonial-content-text">
                  <h3>Lisa Anderson</h3>
                  <span>Brand Manager</span>
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    "The team's attention to detail and proactive communication sets them apart. They don't just execute campaigns; they become true partners in our digital success story. Our brand awareness increased by 350%."
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
