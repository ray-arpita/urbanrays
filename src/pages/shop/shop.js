import React from "react";
import { useState, useEffect } from "react";
import { Products } from "../../Data/Products";
import CommonCard from "../../components/commonCard";
import Box from "@mui/material/Box";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CustomButton from "../../components/button/button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const Shop = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(Products);
  }, []);

  return (
    <>
      <Divider />
      <Typography fontWeight = {'bold'} fontSize = {'22px'} className="subheader" py={3}>
        Explore Now With Our Best Collections
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap : '3%',
          paddingTop: "8px",
        }}
      >
        <CustomButton label={"Sunglasses"} />
        <CustomButton label={"Bags"} />
        <CustomButton label={"Shoes"} />
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {productList?.length > 0 ? (
          productList.map((product) => (
            <Box key={product.id} p={2}>
              <CommonCard
                title={product?.productTitle}
                price={product?.price}
                rating={product?.rating}
                image={product?.productImage}
                description={product?.description}
              />
            </Box>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ErrorOutlineIcon />
            <h1>No Products to show !</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
