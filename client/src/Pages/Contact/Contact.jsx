import React from "react";
import "./Contact.css";
import { Row, Col } from "antd";

const Contact = () => {
  return (
    <div id="contact-us">
      <Row className="row-1">
        <Col className="col-1">
          <div className="contact-1">
            <h4>Address</h4>
            <p>
              4JF-16, sector-4, aravali vihar near mansa chowk, kaveri
              apartment, bhiwadi, 301019
            </p>
          </div>
          <div className="contact-2">
            <h4>Contact Details</h4>
            <p>
              Phone: <a href="tel:+91-7976456816">7976456816</a>{" "}
            </p>
            <p>
              Email:{" "}
              <a href="mailto:shyamtrust.info@gmail.com">
                shyamtrust.info@gmail.com
              </a>
            </p>
          </div>
        </Col>
        <Col>
          <div className="contact-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.193367974997!2d76.82519957494091!3d28.201437103527496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d37e22732e8b3%3A0xee46f3c048de7662!2sMansa%20Chowk%2C%20Sector%201%2C%20U.I.T.%2C%20Bhiwadi%2C%20Rajasthan%20301019!5e0!3m2!1sen!2sin!4v1705595066341!5m2!1sen!2sin"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
