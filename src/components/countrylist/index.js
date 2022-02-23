import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import CountryCard from "../countrycard";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";
import CountryCardInfo from "../../pages/countrycardinfo";
const CountryList = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const countriesPerPage = 12;

  //to get the number of pages visited and data loaded
  const pageVisited = countriesPerPage * pageNumber;

  const countries = data?.slice(pageVisited, pageVisited + countriesPerPage);
  const [info, setInfo] = useState({
    name: "",
    population: "",
    region: "",
    capital: "",
  });
  console.log(info.name);
  const pageCount = Math.ceil(data?.length / countriesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const navigate = useNavigate();

  const previewCountry = (e, country) => {
    setInfo({
      name: country.name,
      population: country.population,
      region: country.region,
      capital: country.capital,
    });
    navigate(`/${info.name}`);
  };
  let location = useLocation();

  return (
    <div className="container cards">
      {countries &&
        countries.map((country) => (
          <CountryCard
            country={country}
            onClick={() => previewCountry(country.name)}
            key={country.id}
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
<Router>
  <Routes>
    <Route path="/:country" element={<CountryCardInfo />}></Route>
  </Routes>
</Router>;

export default CountryList;
