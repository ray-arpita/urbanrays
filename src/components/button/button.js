import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = ({ label, backgroundColor, color , borderColor }) => {
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor ? backgroundColor : "black",
    color: color ? color : "white",
    border: borderColor ? `1px solid ${borderColor}` : 'none',
    borderRadius: "0", 
    padding: "10px 20px",
    transition: "background-color 0.3s ease, transform 0.2s ease",

    "&:hover": {
      backgroundColor: "#747264", 
      transform: "scale(1.05)",
    },
  }));

  return <StyledButton>{label}</StyledButton>;
};

export default CustomButton;
