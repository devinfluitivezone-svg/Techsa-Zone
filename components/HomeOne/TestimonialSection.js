import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const TestimonialSection = () => {
  return (
    <>
      <section className="testimonial-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="testimonial-content-area">
                <span>Testimonial</span>
                <h3>What Our Client Say</h3>
                <p>
                  Don't just take our word for it. Hear from our satisfied clients who have experienced remarkable growth and success through our digital marketing strategies. Their success stories speak volumes about our commitment to delivering exceptional results.
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 5000,
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
                      <h3>Sarah Mitchell</h3>
                      <span>Marketing Director</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        "Techsa Zone transformed our digital presence completely. Our organic traffic increased by 400% and we're now ranking on the first page for all our target keywords. Their strategic approach and attention to detail are exceptional."
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
                      <h3>James Rodriguez</h3>
                      <span>CEO & Founder</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        "The ROI from our PPC campaigns has been outstanding. Techsa Zone's data-driven approach and transparent reporting gave us complete confidence in our marketing investment. Highly recommended!"
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
                      <h3>Maria Garcia</h3>
                      <span>E-commerce Manager</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        "Our social media engagement increased by 500% after partnering with Techsa Zone. They understand our brand perfectly and consistently deliver content that resonates with our audience."
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
                      <h3>Robert Chen</h3>
                      <span>Business Owner</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        "Working with Techsa Zone was the best decision for our local business. We went from being invisible online to dominating local search results and generating quality leads consistently."
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
                      <h3>Jennifer Adams</h3>
                      <span>Brand Manager</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        "The team's professionalism and results-driven approach exceeded our expectations. They don't just execute campaigns; they become true partners in our digital success journey."
                      </p>
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
