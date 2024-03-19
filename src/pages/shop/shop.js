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

const Shop = () => {
  const [productList, setProductList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterKey = searchParams.get("category"); //key
  console.log(searchParams.get("category"), "<<< SEARCH PARAMS");

  const DisplayProducts = filterKey
    ? productList.filter(
        (product) => product.category.toLowerCase() == filterKey
      )
    : productList;

  useEffect(() => {
    setProductList(Products);
  }, []);

  return (
    <>
      <Divider />
      <Typography
        fontWeight={"bold"}
        fontSize={"22px"}
        className="subheader"
        py={3}
      >
        Explore Now With Our Best Collections
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3%",
          paddingTop: "8px",
        }}
      >
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
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {DisplayProducts?.length > 0 ? (
          DisplayProducts.map((product) => (
            <Box key={product.id} p={2}>
              <Link to={`/product-detail/${product.id}`}>
                <CommonCard
                  title={product?.productTitle}
                  price={product?.price}
                  rating={product?.rating}
                  image={product?.productImage}
                  description={product?.description}
                />
              </Link>
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
