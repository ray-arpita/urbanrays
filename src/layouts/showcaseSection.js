import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import CommonCard from '../components/commonCard';
import { Products } from '../Data/Products';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Typography from '@mui/material/Typography'

const ShowcaseSection = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);


  //loading state
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 30));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);


  //showing spinner only when the user scrolls to the section
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setProductList(Products);
        setLoading(false);
      }, 3000);
    }
  }, [isVisible]);

  const settings = {
    // dots: true,
    autoplay: true,
    autoplaySpeed: 700,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows: true,
  };

  return (
    <div ref={containerRef}>
      {loading ? (
        <div style={{ paddingBlock: '20px' }}>
          <CircularProgress variant="determinate" value={progress} style={{ color: 'black' }} />
        </div>
      ) : (
        <>
        <div style={{display : 'flex' , flexDirection : 'row' , justifyContent : 'space-around' , paddingBottom : '10px'}}>
          <Typography fontWeight={'bold'} fontSize={'20px'}>
            New Arrivals
          </Typography>
          <Typography fontWeight={'bold'} fontSize={'20px'}>
            Bestsellers
          </Typography>
          <Typography fontWeight={'bold'} fontSize={'20px'}>
            Exclusive
          </Typography>

        </div>
        <Slider {...settings}>
          {productList.length > 0 ? (
            productList.map((product) => (
              <Box key={product.id} p={2}>
                <CommonCard
                  title={product?.productTitle}
                  price={product?.price}
                  rating={product?.rating}
                  image={product?.productImage}
                />
              </Box>
            ))
          ) : (
            <>
            <ErrorOutlineIcon/>
            <h1>No Products to show !</h1>
            </>
          )}
        </Slider>
        </>
      )}
    </div>
  );
};

export default ShowcaseSection;
