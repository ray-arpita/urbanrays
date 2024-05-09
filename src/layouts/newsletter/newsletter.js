import React from "react";
import { Grid, Typography } from "@mui/material";
import CustomButton from "../../components/button/button";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <Grid container sx={{ backgroundColor: "black" }} textAlign={'center'}>
      <Grid item p={10} md={6} sm={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Grid container spacing={3} display={"flex"} flexDirection={"column"}>
          <Grid item>
            <Typography variant="h4" color="white">
              {t("subToNews")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="white">{t("offer")}</Typography>
          </Grid>
          <Grid item>
            <CustomButton label={"Subscribe"} backgroundColor={"black"} color={"white"} borderColor={"#FFFF"}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item p={10} md={6} sm={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Grid container spacing={2} display={"flex"} flexDirection={"column"}>
          <Grid item>
            <Typography variant="h3" color="white">
              {t("news")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="white">{t("discoverNews")}</Typography>
          </Grid>
          <Grid item>
            <CustomButton label={"Subscribe"} backgroundColor={"#FFFF"} color={"black"}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Newsletter;
