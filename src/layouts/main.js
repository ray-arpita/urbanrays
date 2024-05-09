import { Grid } from "@mui/material";
import React from "react";
import Banner from "./banner/banner";
import FashionSection from "./second-section/fashionsection";
import ShowcaseSection from "./showcaseSection";
import DiscoverSection from "./discover/discoverSection";
import Newsletter from "./newsletter/newsletter";


const Main = () => {
  return (
    <>
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        {/* <Grid container sx={{maxWidth: '96vw', marginLeft: '20px', marginRight : '2opx'  , overflow : 'hidden'}}> */}
        <Banner />
        <FashionSection />
        <ShowcaseSection />
        <DiscoverSection />
        <Newsletter />
        {/* </Grid> */}
      </div>
    </>
  );
};

export default Main;
