import React from "react";
import { useState, useEffect } from "react";

const TermsAndConditions = () => {
  const [data, setData] = useState([]);

  const api = "https://dummyjson.com/products";
  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(data?.products , "<<<< DATA")


const handleClick = () => {
  fetchData();
}


  return (
    <div>
      <button onClick={handleClick}>GET DATA</button>
    </div>
  );
};

export default TermsAndConditions;
