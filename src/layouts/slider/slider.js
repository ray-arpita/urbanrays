import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonCard from '../../components/commonCard';

const SliderSection = () => {

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div>
     
      <Slider {...settings}>
        <div>
        <CommonCard/>
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;