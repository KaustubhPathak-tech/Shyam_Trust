import React from "react";
import "./Gallery.css";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

import img1 from "../../Assets/Images/Gallery/g-1.jpg";
import img2 from "../../Assets/Images/Gallery/g-2.jpg";
import img3 from "../../Assets/Images/Gallery/g-4.jpg";
import img4 from "../../Assets/Images/Gallery/g-5.jpg";

const images = [
  { src: img1, alt: "Flag of India", height: "100px", width: "100px" },
  { src: img2, alt: "2" },
  { src: img3, alt: "3" },
  { src: img4, alt: "4" },
];
const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div id="gallery">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[
          lgThumbnail,
          lgZoom,
          lgAutoplay,
          lgFullscreen,
          lgRotate,
          lgShare,
        ]}
      >
        {images.map((image, index) => {
          return (
            <a href={image.src} key={index}>
              <img
                alt={image.alt}
                src={image.src}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "500px",
                  maxHeight: "600px",
                }}
              />
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
};

export default Gallery;
