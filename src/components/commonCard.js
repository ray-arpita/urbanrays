import * as React from "react";
import { Card, Typography } from "@mui/material";
import "./commonCard.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarRatings from "react-star-ratings";
import Snackbar from "@mui/material/Snackbar";

const CommonCard = ({ title, price, rating, image , description}) => {
  const [open, setOpen] = React.useState(false);

  const AddToCart = () => {
    alert('Product Added To Cart ')
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
        }}
      >
        <div>
          <div style={{ position: "relative" }}>
            <img src={image} className="cardImage" />
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
            <Typography fontSize={'14px'}>
            {description ? description : null}
            </Typography>
          </div>
    
        </div>
      </div>
    </>
  );
};

export default CommonCard;
