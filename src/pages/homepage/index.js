import React from "react";
import { MdOutlineExpandMore, MdSearch } from "react-icons/md";
import CardInfo from "../countrycardinfo";
import "./style.css";

const HomePage = () => {
  return (
    <div className="container_wrapper">
      <div className="search_filter">
        <span className="input_container">
          <input
            type="text"
            name="text"
            placeholder="Search for a country..."
          />
          <span className="search_icon">
            <MdSearch />
          </span>
        </span>
        <div className="filter_container">
          <label className="select_label" for="select">
            Filter by Region :
          </label>
          <MdOutlineExpandMore />
          <select className="filter_box">
            <option>Select</option>
            <option>Africa</option>
            <option>Asia</option>
            <option>America</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
      <CardInfo />
    </div>
  );
};

export default HomePage;
