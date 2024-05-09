import React from 'react';
import { Grid, Typography } from '@mui/material';
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBlock: '25px', paddingInline :'20px', alignItems: 'center' }}>
      {/* Menu items on the left */}
      <Grid item>
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Grid item >
          <NavLink
              to="/"
              className="menuItem"
              activeClassName="activeLink"
            >
            <Typography fontWeight={'bold'} className='menuItem'>
              Home
            </Typography>
            </NavLink>
          </Grid>
          <Grid item >
          <NavLink
              to="/shop"
              className="menuItem"
              activeClassName="activeLink"
            >
            <Typography fontWeight={'bold'} className='menuItem'>
              Shop
            </Typography>
            </NavLink>
          </Grid>
          <Grid item>
          <NavLink
              to="/about"
              className="menuItem"
              activeClassName="activeLink"
            >
            <Typography fontWeight={'bold'} className='menuItem'>
              About US
            </Typography>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
      {/* Centered logo */}
      <Grid item md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        <h2 className='logo'>URBANRAYS</h2>
      </Grid>
      {/* Menu items on the right */}
      <Grid item>
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Grid item >
          <NavLink
              to="/blog"
              className="menuItem"
              activeClassName="activeLink"
            >
            <Typography fontWeight={'bold'} className='menuItem'>
              Blog
            </Typography>
            </NavLink>
          </Grid>
          <Grid item >
          <NavLink
              to="/terms"
              className="menuItem"
              activeClassName="activeLink"
            >
            <Typography fontWeight={'bold'} className='menuItem'>
              Terms
            </Typography>
            </NavLink>
          </Grid>
          <Grid item>
          <NavLink
              to="/contact"
              className="menuItem"
              activeClassName="activeLink"
            >
            <Typography fontWeight={'bold'} className='menuItem'>
              Contact
            </Typography>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
