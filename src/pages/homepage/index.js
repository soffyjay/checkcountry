import React, { useEffect, useState } from "react";
import { MdOutlineExpandMore, MdSearch } from "react-icons/md";
import CountryList from "../../components/countrylist";
import "./style.css";
import {
  fetchCountries,
  searchCountries,
  searchCountriesRegion,
} from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";

const HomePage = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const { data, loading, error } = useSelector((state) => ({
    data: state.data,
    loading: state.loading,
    error: state.error,
  }));

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (error) {
    return <div>Error! {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Header />
      <form
        className="search_filter"
        onSubmit={() => dispatch(searchCountries(searchTerm))}
      >
        <span className="input_container">
          <input
            type="text"
            name="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={handleChange}
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
            <option>Africa</option>
            <option>Asia</option>
            <option>America</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </form>
      <CountryList data={data} />
    </div>
  );
};

export default HomePage;
