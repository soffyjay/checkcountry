import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
const CountryCardInfo = () => {
  const { data } = useSelector((state) => ({
    data: state.countryInfoReducer.data,
  }));
  if (!data) {
    <div>nothing here</div>;
  }
  console.log(data);
  return (
    <div className="container">
      <div className="cardinfo_container">
        <div className="cardinfo_image">
          <img src={data.image} alt={data?.name + " " + "flag"} />
        </div>
        <div className="cardinfo_content">
          <h2>{data.name}</h2>
          <div>
            <div>hiiii</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCardInfo;
