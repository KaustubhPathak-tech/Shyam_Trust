import React, { useEffect } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Card, Col, Collapse, Row } from "antd";

import { SocialBtn } from "../../Pages/Home/Home";
import { Link } from "react-router-dom";

const capitalizeText = (text) => text.toUpperCase();
const Footer = () => {
  useEffect(() => {
    document.querySelectorAll("h4").forEach((h4) => {
      h4.textContent = capitalizeText(h4.textContent);
    });
  }, []);
  return (
    <div>
      <section className="preFooter">
        <div className="Links">
          <Row gutter={16} style={{ maxWidth: "99vw" }}>
            <Col xs={24} sm={6}>
              <Card className="preFooter">
                <h4>Get Involved</h4>
                <ul type="none" className="preLinks">
                  <li>
                    <a href="">Donate</a>
                  </li>
                  <li>
                    <a href="">Volunteer</a>
                  </li>
                  <li>
                    <Link to="/our-team">
                      Partner
                    </Link>
                  </li>
                </ul>
              </Card>
            </Col>

            <Col xs={24} sm={6}>
              <Card className="preFooter">
                <h4>Relevant Links</h4>
                <ul type="none" className="preLinks">
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <a href="">Events</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">FAQ's</a>
                  </li>
                </ul>
              </Card>
            </Col>

            <Col xs={24} sm={6}>
              <Card className="preFooter">
                <h4>Our Locations</h4>
                <ul type="none" className="preLinks">
                  <li>Gurugram</li>
                  <li>Bhiwadi</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} sm={6}>
              <Card className="preFooter">
                <h4>Contact Us</h4>
                <ul type="none" className="preLinks preContact">
                  <li>
                    <a href="mailto:shyamtrust.info@gmail.com" target="_blank">
                      <SocialBtn variant="outlined">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </SocialBtn>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+91-7976456816">
                      <SocialBtn variant="outlined">
                        <FontAwesomeIcon icon={faPhone} />
                      </SocialBtn>
                    </a>
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="subscribe">
          <Row justify={"space-around"} align={"middle"}>
            <Col>
              <h1>Subscribe to our Newsletter</h1>
              <form>
                <input
                  type="email"
                  placeholder="Type Your Email"
                  id="subscribe"
                  autoComplete="off"
                />
                <button type="submit" className="favbtn">
                  Subscribe
                </button>
              </form>
            </Col>
            <Col>
              <SocialBtn variant="outlined" className="socialBtn">
                <FontAwesomeIcon icon={faFacebook} />
              </SocialBtn>
              <SocialBtn variant="outlined">
                <FontAwesomeIcon icon={faTwitter} />
              </SocialBtn>
              <SocialBtn variant="outlined">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialBtn>
              <SocialBtn variant="outlined">
                <FontAwesomeIcon icon={faLinkedin} />
              </SocialBtn>
            </Col>
          </Row>
        </div>
      </section>
      <section className="footer preFooter">
        <span className="copyRight">
          <p>
            © {new Date().getFullYear()} All Rights Reserved. Shyam Trust
            Bhiwadi
          </p>
        </span>
        <span className="impLinks">
          <ul type="none" className="linkList">
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">SiteMap</a>
            </li>
          </ul>
        </span>
      </section>
    </div>
  );
};

export default Footer;
