import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import CountryCard from "../countrycard";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { fetchCountryInfo } from "../../redux/countryInfoAction";
import { fetchCountries } from "../../redux";
const CountryList = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const countriesPerPage = 12;

  //to get the number of pages visited and data loaded
  const pageVisited = countriesPerPage * pageNumber;

  const countries = data?.slice(pageVisited, pageVisited + countriesPerPage);

  const navigate = useNavigate();
  const pageCount = Math.ceil(data?.length / countriesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const dispatch = useDispatch();
  const previewCountry = (e, country) => {
    dispatch(
      fetchCountryInfo({
        name: country.name,
        population: country.population,
        region: country.region,
        capital: country.capital,
        subRegion: country.subRegion,
        capital: country.capital,
        nativeName: country.nativeName,
        topLevelDomain: country.topLevelDomain,
        currencies: country.currencies,
        languages: country.languages,
        image: country.flags.png,
      })
    );
    navigate(`/${country.name}`);
  };

  return (
    <div className="container cards">
      {countries &&
        countries?.map((country) => (
          <CountryCard
            country={country}
            onClick={(e) => previewCountry(e, country)}
            id={country.id}
          />
        ))}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default CountryList;
