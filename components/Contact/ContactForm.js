import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
      setMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setMessage("");

    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      
      setContact(INITIAL_STATE);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setMessage("Your message has been sent successfully! We'll get back to you soon.");
      alertContent();
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setMessage("");
      }, 5000);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      setSubmitStatus("error");
      setMessage("Oops! Something went wrong. Please try again or contact us directly.");
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setMessage("");
      }, 5000);
    }
  };

  return (
    <>
      <section className="contact-area ptb-100">
        {/* Contact Info */}
        <ContactInfo />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="contact-text">
                <h3>Get in Touch</h3>
                <p>
                  Ready to transform your digital presence? Contact our expert team today to discuss your marketing goals and discover how we can help your business achieve unprecedented growth through strategic digital marketing solutions.
                </p>
                <p>
                  We're here to answer your questions, provide personalized recommendations, and create a customized strategy that delivers measurable results for your business success.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control"
                        value={contact.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        value={contact.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Phone number"
                        className="form-control"
                        value={contact.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="form-control"
                        value={contact.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="text"
                        cols="30"
                        rows="6"
                        placeholder="Write your message..."
                        className="form-control"
                        value={contact.text}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <div className="send-btn">
                      <button 
                        type="submit" 
                        className="send-btn-one"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                    
                    {/* Success/Error Message */}
                    {submitStatus && (
                      <div className={`form-message ${submitStatus === 'success' ? 'success-message' : 'error-message'}`}>
                        <i className={`fas ${submitStatus === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                        {message}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
