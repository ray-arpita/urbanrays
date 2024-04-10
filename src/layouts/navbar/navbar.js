import React from "react";
import { Grid, Typography } from "@mui/material";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

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
      {/* Left Side */}
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
          <Grid item>
            <NavLink
              to="/register"
              className="menuItem"
              activeClassName="activeLink"
            >
              <Typography fontWeight={"bold"}>Contact</Typography>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>

      {/* Middle */}
      <Grid item md={6}>
        <NavLink to="/" className="menuItem">
          <h2 className="logo">URBANRAYS</h2>
        </NavLink>
      </Grid>

      {/* Right Side */}
      <Grid item>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: "38px",
          }}
        >
          {isAuthenticated ? (
            <Typography fontWeight={"bold"}>{user.name}</Typography>
          ) : null}

          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {isAuthenticated ? (
              <button
                className="auth-btn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                LogOut
              </button>
            ) : (
              <button className="auth-btn" onClick={() => loginWithRedirect()}>
                LogIn
              </button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
