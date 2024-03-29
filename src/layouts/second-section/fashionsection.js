import React from "react";
import { Grid, Typography } from "@mui/material";
import "./fashionsection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import imageOne from "../../assets/other_images/fashion1.jpg";
import imageTwo from "../../assets/other_images/fashion2.jpg";
import imageThree from "../../assets/other_images/fashion3.jpg";

const FashionSection = () => {
  AOS.init();
  return (
    <div data-aos="zoom-in" data-aos-duration="1500">
      <Grid container pt={5} pb={2} height={"750px"}>
        {/* First Column */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography className="label">
            FOR YOUR <br /> ESSENTIAL <br /> STYLE
          </Typography>
          <img
            src={imageOne}
            alt="First"
            className="grid-image"
            style={{ height: "50%" }}
          />
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={6} md={4}>
          <img
            src={imageTwo}
            alt="Second"
            className="grid-image-updown"
            style={{ height: "50%" }}
          />
          <Typography className="label">
            Never Before <br />
            Freedom to Choose
          </Typography>
          <Typography className="subheader">
            Beyond the frame of uniforms in the new normal era, wear your own
            apperance
          </Typography>
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} sm={6} md={4} mt={5}>
          <img
            src={imageThree}
            alt="Third"
            className="grid-image"
            style={{ height: "50%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default FashionSection;
