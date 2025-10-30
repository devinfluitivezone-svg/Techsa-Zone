import React, { Component } from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer-area">
                <div className="footer-heading">
                  <h3>About Us</h3>
                </div>

                <p>
                  Techsa Zone is a leading digital marketing agency specializing in SEO, social media marketing, and comprehensive online solutions. We help businesses achieve their digital goals through innovative strategies, cutting-edge technology, and proven expertise that delivers measurable results.
                </p>

                <ul className="footer-social">
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      className="bg-3955bc"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="bg-1da1f2"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="bg-004dff"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="bg-0273af"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-item-area">
                <div className="footer-heading">
                  <h3>Important Links</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="mb-30">
                <div className="footer-heading">
                  <h3>Contact</h3>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-call-answer"></i>
                  <h3>Phone</h3>
                  <span>+923391252535</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span>info@techsazone.com</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-placeholder-filled-point"></i>
                  <h3>Address</h3>
                  <span>Techsa Zone, 2nd Floor, Shahra-e-Faisal, Moria Khan Goth Shah Faisal Colony, Shah Faisal Town, 75050</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="default-animation">
          <div className="shape-img1">
            <img src="/images/shape/12.svg" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/13.svg" alt="image" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/14.png" alt="image" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/15.png" alt="image" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/2.png" alt="image" />
          </div>
        </div>
      </footer>

      {/* Copyright footer */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p>
                © {currentYear} Techsa Zone. All Rights Reserved.
              </p>
            </div>

            <div className="col-lg-6">
              <ul>
                <li>
                  <Link href="/terms-conditions">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
