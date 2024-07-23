import * as React from "react";
import {Typography } from "@mui/material";
import "./commonCard.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarRatings from "react-star-ratings";
import { addToCart } from "../Store/slices/cart.Slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CommonCard = ({ title, price, rating, image, description }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const AddToCart = () => {
    const product = {
      title,
      price,
      rating,
      image,
      description,
    };
    dispatch(addToCart(product));
    navigate('/cart')
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          marginInline: "10px",
          maxWidth: "280px",
          padding: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
        }}
      >
        <div>
          <div style={{ position: "relative" }}>
            <img src={image} className="cardImage"   style={{ width: "100%", objectFit: "cover" }}/>
            <ShoppingBagOutlinedIcon
              className="addToCartIcon"
              onClick={AddToCart}
            />
          </div>
          <div style={{ paddingTop: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Typography className="cardText">{title}</Typography>
              </div>
              <div>
                <Typography className="cardText">
                  <p>{`$${price}`}</p>
                </Typography>
              </div>
            </div>
          </div>
          <div>
            <StarRatings
              rating={rating}
              starRatedColor="black"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
            />
          </div>
          <div>
            <Typography fontSize={"14px"} color={"dimgrey"}>
              {description ? description : null}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonCard;
