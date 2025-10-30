import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const TestimonialSection = () => {
  return (
    <>
      <section className="client-section">
        <div className="container">
          <div className="section-title">
            <span>Testimonial</span>
            <h3>What Our Happy Client Say</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="client-image">
                <img src="/images/testimonial-image.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <Swiper
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay, Pagination]}
                className="client-slides"
              >
                <SwiperSlide>
                  <div className="testimonial-single-item">
                    <div className="testimonial-content-text">
                      <div className="icon">
                        <i className="flaticon-left-quote"></i>
                      </div>
                      <p>
                        "Techsa Zone's expertise in digital marketing is unmatched. Our website traffic increased by 350% and our conversion rate improved by 200%. Their strategic approach and attention to detail made all the difference for our business growth."
                      </p>
                    </div>
                    <div className="testimonial-image">
                      <img src="/images/client-image/1.jpg" alt="image" />
                      <h3>Alex Thompson</h3>
                      <span>Marketing Director</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-single-item">
                    <div className="testimonial-content-text">
                      <div className="icon">
                        <i className="flaticon-left-quote"></i>
                      </div>
                      <p>
                        "The team at Techsa Zone delivered exceptional results for our e-commerce business. Our online sales increased by 450% and our social media following grew by 600%. Their comprehensive digital strategy transformed our entire online presence."
                      </p>
                    </div>
                    <div className="testimonial-image">
                      <img src="/images/client-image/2.jpg" alt="image" />
                      <h3>Lisa Martinez</h3>
                      <span>E-commerce Manager</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
