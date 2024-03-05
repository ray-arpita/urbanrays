import React from "react";
import Divider from "@mui/material/Divider";

const About = () => {
  return (
    <>
      <Divider />
      <div
        style={{
          display: "flex",
          flexWrap :'wrap',
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingTop: "20px",
          gap : '2%'
        }}
      >
        <iframe
          width="400"
          height="315"
          src="https://www.youtube.com/embed/1ap0baidLVo?si=hD4cbt6wSv0koXeR"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="315"
          src="https://www.youtube.com/embed/5NGyXTsg77E?si=XNO6HFXO8sgv0R54"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="315"
          src="https://www.youtube.com/embed/06wZsa-55UE?si=lHlG5Eq3AWa-DMq5"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="315"
          src="https://www.youtube.com/embed/JCH61ook1hs?si=nFcho9RfW13akOLm"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="315"
          src="https://www.youtube.com/embed/6vm56tVnqk0?si=Nn6pujd24Ln50I8l"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="315"
          src="https://www.youtube.com/embed/BBqm53Mzn_k?si=pJ7Mw33YTmWaHfR8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default About;
