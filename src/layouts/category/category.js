import React from "react";
import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";
import "./category.css";
import CustomButton from "../../components/button/button";
import sunglassCollection from "../../assets/other_images/sunglasses-collection.jpg";
import bagsCollection from "../../assets/other_images/bags-collection.jpg";
import shoesCollection from "../../assets/other_images/shoes-collection.jpg";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const categories = [
    {
      title: "Shoes",
      url: "/shop?category=shoes",
      image: shoesCollection,
    },
    {
      title: "Sunglasses",
      url: "/shop?category=sunglasses",
      image: sunglassCollection,
    },
    {
      title: "Bags",
      url: "/shop?category=bags",
      image: bagsCollection,
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="categories-container">
      {categories.map((category) => (
        <Card className="category-card" key={category.title} >
          <CardActionArea href={category.url}>
            <Box position="relative">
              <img
                src={category.image}
                alt={category.title}
                className="category-image"
              />
              <div className="category-overlay">
                <Typography variant="h5" className="category-title">
                  {category.title}
                </Typography>
                <CustomButton label="Explore" />
              </div>
            </Box>
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                {category.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </section>
  );
};

export default Category;
