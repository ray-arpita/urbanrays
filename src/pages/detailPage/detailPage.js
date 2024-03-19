import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Tab,
  Tabs,
  Box,
  Divider,
} from "@mui/material";
import { Products } from "../../Data/Products";
import CustomButton from "../../components/button/button";
import { useParams, Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductDetailPage = () => {
  const [value, setValue] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const productId = params?.id;

  console.log(productId, " <<<ID");
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setProductList(Products);
  }, []);

  const IncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const DecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      {productList
        ? productList
            .filter((product) => product.id === parseInt(productId))
            .map((product) => {
              console.log(product, "<<< PRODUCT");
              return (
                <Grid container spacing={4} direction={"row"}>
                  <Grid item xs={12} sm={6}>
                    {/* Left Side: Product Image */}
                    <Paper elevation={3}>
                      {/* Add your product image here */}
                      <img
                        src={product.productImage}
                        alt="Product"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container direction={"column"}>
                      <Grid item xs={12} sm={6}>
                        {/* Right Side: Product Details */}
                        <Paper
                          elevation={0}
                          style={{ padding: "20px", textAlign: "left" }}
                        >
                          <Typography variant="h4" fontWeight={"bold"}>
                            {product?.productTitle}
                          </Typography>
                          <Typography variant="h6">
                            ${product.price * quantity}
                          </Typography>
                          <Typography variant="body1" color="grey">
                            {product.description}
                          </Typography>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginTop: "10px",
                            }}
                          >
                            <Button
                              variant="outlined"
                              onClick={DecreaseQuantity}
                              disabled={quantity === 1 ? true : false}
                            >
                              -
                            </Button>
                            <Typography
                              variant="body1"
                              style={{ margin: "0 10px" }}
                            >
                              {quantity}
                            </Typography>
                            <Button
                              variant="outlined"
                              onClick={IncreaseQuantity}
                            >
                              +
                            </Button>
                            <div style={{ marginLeft: "auto" }}>
                              <CustomButton label="Add To Cart" />
                            </div>
                          </div>
                          <Divider sx={{ marginTop: "20px" }} />
                          <Typography
                            variant="body2"
                            fontWeight={"bold"}
                            color={"black"}
                            py={2}
                          >
                            Category :{" "}
                            <Link
                              to={`/shop?category=${product.category.toLowerCase()}`}
                              style={{ color: "black", cursor: "pointer" }}
                            >
                              {" "}
                              {product.category}{" "}
                            </Link>
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        {/* Tab Panel: Description and Review */}
                        <Paper
                          elevation={3}
                          style={{ marginTop: "20px", padding: "20px" }}
                        >
                          <Box sx={{ width: "100%" }}>
                            <Tabs
                              value={value}
                              onChange={handleChange}
                              aria-label="Product Details Tabs"
                            >
                              <Tab label="Description" />
                              <Tab label="Review" />
                            </Tabs>
                            <TabPanel value={value} index={0}>
                              {/* Description Tab Content */}
                              <Typography variant="body1" fontWeight={'bold'}>
                                {product.description}
                              </Typography>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                              <div >
                                <StarRatings
                                  rating={product.rating}
                                  starRatedColor="black"
                                  numberOfStars={5}
                                  starDimension="20px"
                                  starSpacing="2px"
                                />
                                <Typography fontWeight={"bold"}>
                                  Customer Ratings
                                </Typography>
                              </div>
                            </TabPanel>
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })
        : null}
    </Container>
  );
};

const TabPanel = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

export default ProductDetailPage;
