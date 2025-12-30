import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const routes = {
      home: "/home",
      login: "/login",
      cart: "/cart",
      blog: "/blogs",
      termsofservices: "/terms-of-services",
      shippingpolicy: "/shipping-policy",
      refundpolicy: "/refund-policy",
      privacypolicy: "/privacy-policy",
      giftpackaging: "/gift-packaging",
      pakistanshipping: "/pakistan-shipping",
      internationalshipping: "/international-shipping",
      stitching: "/stitching",
      faq: "/FAQ",
      contactUs: "/Contact-Us",
      deliafallwinter: "/Delia-Fall-Winter",
      velvet: "/Velvet",
      unstitched: "/Unstiched-Winter",
      readytowear: "/Ready-to-wear",
      formals: "/Formals",
      sale: "/Sale"
    };

    if (query.trim() === "") {
      setMessage("Please enter a query to search.");
    } else {
      const matchingRoute = Object.keys(routes).find((key) =>
        key.toLowerCase().includes(query.toLowerCase())
      );

      if (matchingRoute) {
        navigate(routes[matchingRoute]);
      } else {
        setMessage("No results found. Please try again with a different query.");
      }
    }
  };

  return (
    <div className="search">
      <h5>Search</h5>
      <div className="input-container">
        <input
          type="search"
          id="search"
          placeholder="Search for..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <FaSearch className="search-icon" onClick={handleSearch} />
      </div>
      <p className="search-message">{message}</p>
    </div>
  );
};

export default Search;
