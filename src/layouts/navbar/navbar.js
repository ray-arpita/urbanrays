import React,{useState} from "react";
import { Grid, Typography , Avatar } from "@mui/material";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const { t } = useTranslation();
  const [siteLanguage , setLanguage] = useState("en");

  const changeLanguage = (code) => {
    setLanguage(code);
    localStorage.setItem('lang' , code)
  }

  const language = [
    { code: "en", lang: "English" },
    { code: "hi", lang: "Hindi" },
    { code: "or", lang: "Odia" },
  ];

  return (
    <header>
    <Grid container alignItems="center" justifyContent="space-between" sx={{paddingBlock: "15px",paddingInline: "20px",}}>
      {/* Left Side */}
      <Grid item>
      <Grid container alignItems="center" spacing={2}>
          <Grid item >
            <NavLink
              to="/shop"
              className="menuItem"
              activeClassName="activeLink"
            >
              <Typography fontWeight={"bold"}>{t("shop")}</Typography>
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink
              to="/about"
              className="menuItem"
              activeClassName="activeLink"
            >
              <Typography fontWeight={"bold"}>{t("about")}</Typography>
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink
              to="/register"
              className="menuItem"
              activeClassName="activeLink"
            >
              <Typography fontWeight={"bold"}>{t("contact")}</Typography>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>

      {/* Middle */}
      <Grid item >
        <NavLink to="/" className="menuItem">
          <h2 className="logo">URBANRAYS</h2>
        </NavLink>
      </Grid>

      {/* Right Side */}
      <Grid item>
      <Grid container alignItems="center" spacing={2}>
          <Grid item>
             <select value= {siteLanguage} name="language" id="language" onChange={(e) => changeLanguage(e.target.value)} className="dropdown">
              {language.map((lang) => (
                <option value={lang?.code}>{lang?.lang}</option>
              ))}
            </select>
          </Grid>
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
                {t("logout")}
              </button>
            ) : (
              <button className="auth-btn" onClick={() => loginWithRedirect()}>
                {t("login")}
              </button>
            )}
          </Grid>
          <Grid item>
          {isAuthenticated ? (
            // <Typography fontWeight={"bold"}>{user.name}</Typography>
            <Avatar sx={{ bgcolor: 'black' }}>AR</Avatar>
          ) : null}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </header>
  );
};

export default Navbar;
