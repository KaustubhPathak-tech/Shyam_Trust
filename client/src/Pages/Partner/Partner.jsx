import React from 'react'
import "./Partner.css";
import { Card, Col, Row } from 'antd';

import { faUser } from '@fortawesome/free-solid-svg-icons';

import mem1 from "../../Assets/Images/partner1.jpg";
import mem2 from "../../Assets/Images/partner-2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Partner = () => {
  return (
    <div id='partner'>
      <section className="memberDetails">
        <div className="sectionHeadings" style={{marginTop:"40px"}}>
          <h1>Members</h1>
        </div>
        <Row gutter={16} style={{marginBottom:"20px",maxWidth:"99vw"}}>
          {/* First Part */}
          <Col xs={24} sm={8}>
            <Card>
              <img
                src={mem1}
                height="300px"
                width="200px"
                alt="mem1"
                className="memImg"
              />
              <h4>Ho. Pawan Singh Chauhan</h4>
              <p>मंडल अध्यक्ष,व्यापारी प्रकोष्ठ, भिवाङी, भाo जo पाo </p>
            </Card>
          </Col>

          {/* Second Part */}
          <Col xs={24} sm={8}>
            <Card>
              <img
                src={mem2}
                height="300px"
                width="200px"
                alt="mem1"
                className="memImg"
              />{" "}
              <h4>Mrs. Kanchan Tiwari</h4>
              <p>माo अध्यक्ष महिला मोर्चा, भिवाङी, भाo जo पाo </p>
            </Card>
          </Col>

          {/* Third Part */}
          <Col xs={24} sm={8}>
            <Card>
              {/* Add your content for the third part here */}
              {/* <img
                src={mem3}
                height="300px"
                width="200px"
                alt="mem1"
                className="memImg"
              />{" "} */}
              <FontAwesomeIcon icon={faUser} size="10x" />
              <h4>Mrs. Neelam</h4>
            </Card>
          </Col>
        </Row>
        
      </section>
    </div>
  )
}

export default Partner
