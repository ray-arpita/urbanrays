import React from "react";
import Divider from "@mui/material/Divider";

const About = () => {
  return (
    <div style={{ height: "70vh", paddingInline: "20px" }}>
      <Divider />
      <h1 style={{ textAlign: "center" }}>About Urban Rays</h1>
      <div className="about-content">
        <p>
          Urban Rays is your ultimate destination for Gen Z fashion enthusiasts.
          We specialize in providing trendy and stylish sunglasses, shoes, and
          bags that resonate with the vibrant and dynamic spirit of today's
          youth.
        </p>
        <p>
          Our mission at Urban Rays is to empower individuals to express their
          unique style and personality through our carefully curated collection
          of fashion accessories. Whether you're looking for the perfect pair of
          sunglasses to elevate your summer look or a statement bag to complete
          your outfit, we've got you covered.
        </p>
        <p>
          At Urban Rays, we understand the importance of staying ahead of the
          fashion curve. That's why our team is constantly scouring the latest
          trends and designs to bring you the most up-to-date and stylish
          pieces. We believe that fashion is not just about following trends but
          also about making a statement and expressing yourself authentically.
        </p>
        <p>
          Beyond offering a wide range of high-quality products, Urban Rays is
          also committed to sustainability and ethical practices. We strive to
          minimize our environmental footprint by using eco-friendly materials
          and partnering with suppliers who share our values.
        </p>
        <p>
          Join the Urban Rays community today and discover a world of fashion
          possibilities. Whether you're a trendsetter, a fashionista, or simply
          someone who loves expressing themselves through style, Urban Rays has
          something for everyone. Let's redefine fashion together.
        </p>
      </div>
    </div>
  );
};

export default About;
