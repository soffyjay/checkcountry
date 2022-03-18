import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const CountryCardInfo = () => {
  const { data } = useSelector((state) => ({
    data: state.countryInfoReducer.data,
  }));
  if (!data) {
    <div>nothing here</div>;
  }
  const Navigate = useNavigate();
  const goBack = () => {
    Navigate("/");
  };
  return (
    <div className="info_container">
      <div className="info-button">
        <button className="button-info" onClick={goBack}>
          <span className="back">
            <BsArrowLeft /> <p>Back</p>
          </span>
        </button>
      </div>

      <div className="cardinfo_container">
        <div className="cardinfo_image">
          <img src={data.image} alt={data?.name + " " + "flag"} />
        </div>
        <div className="cardinfo_content">
          <h2>{data.name}</h2>
          <div className="card-detail-container">
            <div className="card-detail-info">
              <ul>
                <li>
                  Native name:
                  <span className="detail-text">{data.nativeName}</span>
                </li>
                <li>
                  Population:
                  <span className="detail-text">{data.population}</span>
                </li>
                <li>
                  Region: <span className="detail-text">{data.region}</span>
                </li>
                <li>
                  Sub Region:
                  <span className="detail-text">{data.subregion}</span>
                </li>
                <li>
                  Capital <span className="detail-text">{data.capital}</span>
                </li>
              </ul>
            </div>
            <div className="card-detail-info">
              <ul>
                <li>
                  Top level domain:
                  <span className="detail-text">{data.topLevelDomain}</span>
                </li>
                <li>
                  Currencies:
                  <span className="detail-text">{data.currencies[0].name}</span>
                </li>
                <li>
                  Languages:
                  <span className="detail-text">{data.languages[0].name}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCardInfo;
