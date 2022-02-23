import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

const CountryCardInfo = () => {
  const { data, loading, error } = useSelector((state) => ({
    data: state.data,
    loading: state.loading,
    error: state.error,
  }));

  return (
    <div className="container">
      <div className="cardinfo_container">
        <div className="cardinfo_image">
          <img src="" />
          card image
        </div>
        <div className="cardinfo_content">
          <p>Card info for everything u want</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCardInfo;
