import React from "react";
import { Grid, Typography } from "@mui/material";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBlock: "15px",
        paddingInline: "20px",
      }}
    >
      <Grid item>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: "38px",
          }}
        >
          <Grid item sx={{ marginLeft: "8px" }}>
            <NavLink
              to="/shop"
              className="menuItem"
              activeClassName="activeLink"
            >
              <Typography fontWeight={"bold"}>Shop</Typography>
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink
              to="/about"
              className="menuItem"
              activeClassName="activeLink"
            >
              <Typography fontWeight={"bold"}>About</Typography>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <NavLink to="/" className="menuItem" >
          <h2 className="logo">URBANRAYS</h2>
        </NavLink>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "8px",
        }}
      >
        <NavLink
          to="/register"
          className="menuItem"
          activeClassName="activeLink"
        >
          <Typography fontWeight={"bold"} sx={{ margin: "8px" }}>
            Register
          </Typography>
        </NavLink>
        <Typography></Typography>
      </Grid>
    </Grid>
  );
};

export default Navbar;
