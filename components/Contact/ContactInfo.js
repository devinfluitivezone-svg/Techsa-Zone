import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="content">
                <h4>Phone</h4>
                <p>+923391252535</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="content">
                <h4>E-mail</h4>
                <p>info@techsazone.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="content">
                <h4>Location</h4>
                <p>
                Techsa Zone, 2nd Floor, Shahra-e-Faisal, Moria Khan Goth Shah Faisal Colony, Shah Faisal Town, 75050
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
