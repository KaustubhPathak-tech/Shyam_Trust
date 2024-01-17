import React, { useState } from "react";

import "./Home.css";
import { StyledBtn } from "../../Components/Navbar/Navbar";
import { Button, Grid, Box } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';

import { Carousel } from "antd";
import { Row, Col, Card } from "antd";
import styled from "@emotion/styled";

// image imports
import mem1 from "../../Assets/Images/akhilesh bhaiya.jpg";
import mem2 from "../../Assets/Images/pravesh.jpg";
import mem3 from "../../Assets/Images/neelm.jpg";  

import init1 from "../../Assets/Images/education-init.png";
import init2 from "../../Assets/Images/skilling-init.png";
import init3 from "../../Assets/Images/health-init.png";

import QR from "../../Assets/Images/donate QR.jpg";


//modal
const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding: 4,
};


export const SocialBtn = styled(Button)`
  color: white;
  border-radius: 0px;
  padding: 10px;
  border: 1px solid white;
  &:hover {
    border: 1px solid white;
  }
`;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div id="mainContent">
      <section className="introCarousel">
        <Carousel autoplay>
          <div id="banner1">
            <div className="overText">
              <p style={{ color: "red", fontWeight: "bolder" }}>
                EMPOWERING PEOPLE WITH DISABILITIES
              </p>
              <p>Building an inclusive society together</p>
              <div>
                <button className="favbtn" onClick={handleOpen}>Donate Now</button>
              </div>
            </div>
          </div>
          <div id="banner2">
            <div className="overText">
              <p
                style={{ color: "red", fontWeight: "bolder", fontSize: "42px" }}
              >
                Education for All
              </p>
              <p>Leaving no child behind</p>
              <div>
                <button className="favbtn">Support Us</button>
              </div>
            </div>
          </div>
          <div id="banner3">
           
            <div className="serviceGallery">
                Making Life Happier for all
            </div>
          </div>
        </Carousel>
      </section>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <Typography
                  id="spring-modal-title"
                  variant="h6"
                  component="h2"
                  style={{ textAlign: "center" }}
                >
                  Donation Box
                </Typography>
                <Typography
                  id="spring-modal-description"
                  sx={{ mt: 2 }}
                  style={{ textAlign: "center" }}
                >
                  <img src={QR} alt="QR" height="450px" width="320px" />
                </Typography>
          </Box>
        </Fade>
      </Modal>
      <section className="memberDetails">
        <div className="sectionHeadings" style={{marginTop:"40px"}}>
          <h1>Our Founders</h1>
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
              <h4>Mr. Akhilesh</h4>
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
              <h4>Mr. Pravesh</h4>
            </Card>
          </Col>

          {/* Third Part */}
          <Col xs={24} sm={8}>
            <Card>
              {/* Add your content for the third part here */}
              <img
                src={mem3}
                height="300px"
                width="200px"
                alt="mem1"
                className="memImg"
              />{" "}
              <h4>Mrs. Neelam</h4>
            </Card>
          </Col>
        </Row>
        
        <StyledBtn variant="contained">Know More About Us</StyledBtn>
      </section>
      <div className="seperator"></div>
      <section className="init">
        <div className="sectionHeadings">
          <h1>Our Initiatives</h1>
        </div>
        <Row gutter={16} style={{maxWidth:"99vw"}}>
          {/* First Part */}
          <Col xs={24} sm={8}>
            <Card>
              {/* Add your content for the first part here */}
              <img src={init1} height="200px" width="160px" alt="mem1" className="initImg"/>
              <h4>Education</h4>
            </Card>
          </Col>

          {/* Second Part */}
          <Col xs={24} sm={8}>
            <Card>
              {/* Add your content for the second part here */}
              <img src={init2} height="200px" width="160px" alt="mem1" className="initImg" />
              <h4>Skill Development`</h4>
            </Card>
          </Col>

          {/* Third Part */}
          <Col xs={24} sm={8}>
            <Card>
              {/* Add your content for the third part here */}
              <img src={init3} height="200px" width="160px" alt="mem1" className="initImg" />
              <h4>Health & Nutrition</h4>
            </Card>
          </Col>
        </Row>
      </section>
      <div className="seperator"></div>
    </div>
  );
};

export default Home;
