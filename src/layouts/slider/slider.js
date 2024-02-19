import React from "react";
import Slider from "react-slick";

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>HELLO</h3>
      </div>
      <div>
        <h3>HI</h3>
      </div>
      <div>
        <h3>GOOD</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>JOB</h3>
      </div>
      <div>
        <h3>HI</h3>
      </div>
    </Slider>
  );
}

export default SliderSection