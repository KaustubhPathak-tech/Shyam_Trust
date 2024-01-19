import * as React from "react";

import "./Navbar.css";

import { useState } from "react";
import { Link } from "react-router-dom";

// mui imports
import { Button, Popover, MenuItem, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import styled from "@emotion/styled";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";

//antd imports
import { MenuProps, Dropdown, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

//assets imports
import logo from "../../Assets/Images/logo.png";
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
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: 4,
};

const StyledAppbar = styled(AppBar)`
  position: fixed !important;
  color: black;
  Width: 99vw;
  left: 0;  
  height: 60px;
  z-index: 1000;
  backdrop-filter: blur(5px);
  opacity: 0.9;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const StyledBtn = styled(Button)`
  color: white;
  background-color: red;
  border-radius: 0px;
`;

const linkBtn = styled(Button)`
  color: black;
  text-transform: none;
`;

const options = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="navLink"
      >
        Skill Development
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="navLink"
      >
        Resource Distribution
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="navLink"
      >
        Health & Nutrition
      </a>
    ),
  },
];

const options2 = [
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="navLink"
      >
        Volunteer
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
        className="navLink"
      >
        Careers
      </a>
    ),
  },
];

function ResponsiveAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const onSearch = (value) => {
    // Handle search logic here
    console.log(value);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppbar position="fixed" id="navBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Navigation Menu for xs and md screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <StyledLink to="/about-us">About Us</StyledLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Dropdown menu={{ items: options2 }} placement="bottomLeft">
                  <p>Work with Us</p>
                </Dropdown>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Dropdown menu={{ items: options }} placement="bottomLeft">
                  <p>Our Works</p>
                </Dropdown>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <StyledLink to="/contact-us">Contact Us</StyledLink>
              </MenuItem>
              <MenuItem>
                <Space direction="vertical">
                  <Input
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                    allowClear
                    enterButton="Search"
                    size="middle"
                    onSearch={onSearch}
                  />
                </Space>
              </MenuItem>
            </Menu>
          </Box>
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
          {/* Logo and Main Navigation for larger screens */}
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={6} md={4} className="logo">
              <Link to="/">
                <img src={logo} height="55px" />
              </Link>
            </Grid>
            <Grid item xs={6} md={8}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 2,
                }}
              >
                <StyledLink to="/about-us" className="navLink">
                  ABOUT US
                </StyledLink>
                <Dropdown menu={{ items: options }} placement="bottomLeft">
                  <p className="navLink">OUR WORKS</p>
                </Dropdown>
                <Dropdown menu={{ items: options2 }} placement="bottomLeft">
                  <p className="navLink">WORK WITH US</p>
                </Dropdown>

                <StyledLink to="/contact-us" className="navLink">
                  CONTACT US
                </StyledLink>
                <Space direction="vertical">
                  <Input
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                    allowClear
                    enterButton="Search"
                    size="middle"
                    onSearch={onSearch}
                  />
                </Space>
                <StyledBtn
                  variant="contained"
                  className="navLink"
                  onClick={handleOpen}
                >
                  Donate
                </StyledBtn>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </StyledAppbar>
  );
}

export default ResponsiveAppBar;
