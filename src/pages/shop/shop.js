import React from "react";
import { useState, useEffect } from "react";
import { Products } from "../../Data/Products";
import CommonCard from "../../components/commonCard";
import Box from "@mui/material/Box";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CustomButton from "../../components/button/button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useSearchParams, Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Shop = () => {
  const [productList, setProductList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterKey = searchParams.get("category"); //key

  const DisplayProducts = filterKey
    ? productList.filter(
        (product) => product.category.toLowerCase() == filterKey
      )
    : productList;

  const truncateDescription = (description) => {
    const words = description.split(" ");
    const truncated = words.slice(0, 10).join(" ");
    if (words.length > 10) {
      return `${truncated} ...`;
    } else {
      return truncated;
    }
  };

  useEffect(() => {
    setProductList(Products);
  }, []);

  return (
    <>
      <Divider />
      <Typography fontWeight={"bold"} fontSize={"22px"} className="subheader" py={3} textAlign={'center'}>
        Explore Now With Our Best Collections
      </Typography>
      <div
        style={{ display: "flex", flexWrap:'wrap', justifyContent: "center", gap: "10px", paddingTop: "8px",}}>
        <div onClick={() => setSearchParams({ category: "sunglasses" })}>
          <CustomButton label={"Sunglasses"} />
        </div>
        <Link to="?category=bags">
          <CustomButton label={"Bags"} />
        </Link>
        <Link to="?category=shoes">
          <CustomButton label={"Shoes"} />
        </Link>


        {filterKey ? (
          <Link to=".">
            <CustomButton label={"Show All"} />
          </Link>
        ) : null}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {DisplayProducts?.length > 0 ? (
          DisplayProducts.map((product) => (
            // <Link className="cardText" to={`/product-detail/${product.id}`}>
            <Box key={product.id} p={2}>
              <CommonCard
                title={product?.productTitle}
                price={product?.price}
                rating={product?.rating}
                image={product?.productImage}
                description={truncateDescription(product?.description)}
              />
            </Box>
              // </Link>
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
