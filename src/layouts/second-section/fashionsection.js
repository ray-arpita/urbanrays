import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import "./fashionsection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import imageOne from "../../assets/other_images/fashion1.jpg";
import imageTwo from "../../assets/other_images/fashion2.jpg";
import imageThree from "../../assets/other_images/fashion3.jpg";

const FashionSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/*Fashion Section*/}
      <section className="fashion-section" data-aos="zoom-in" data-aos-duration="1500">
        <Box pt={5} pb={2}>
          <Grid container spacing={2}>
            {/* First Column */}
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Typography className="label">
                  FOR YOUR
                  <br /> ESSENTIAL STYLE
                </Typography>
                <div className="img-container">
                <img
                  src={imageOne}
                  alt="First"
                  className="grid-image"
                />
                  </div>
              </Box>
            </Grid>

            {/* Second Column */}
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign={{ xs: "center", md: "left" }}>
                <div className="img-container">
                <img
                  src={imageTwo}
                  alt="Second"
                  className="grid-image-updown grid-image"
                />
                </div>
                <Typography className="label">
                  Never Before <br />
                  Freedom to Choose
                </Typography>
                <Typography className="subheader">
                  Beyond the frame of uniforms in the new normal era, wear your
                  own appearance
                </Typography>
              </Box>
            </Grid>

            {/* Third Column */}
            <Grid item xs={12} sm={12} md={4}>
              <Box textAlign="center" mt={{ xs: 2, md: 5 }}>
              <div className="img-container">
                <img
                  src={imageThree}
                  alt="Third"
                  className="grid-image"
                />
                </div>
                <Typography className="label">
                  EMBRACE YOUR
                  <br /> UNIQUE LOOK
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
      {/*Fashion Section End*/}
    </>
  );
};

export default FashionSection;
