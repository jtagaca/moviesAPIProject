import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/search.css";
import { TextField, Button } from "@material-ui/core";
import searchMovies from "../actions/searchMovies";
const Search = () => {
  const [query, handleChange] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(query)(dispatch);
    handleChange("");
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <TextField
        id="outlined-secondary"
        label="Search for a movie..."
        variant="outlined"
        color="primary"
        type="text"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        className="search-input"
      />
      {/* <input type="submit" value="Search" className="search-btn" /> */}
      <Button
        type="submit"
        style={{ background: "black", color: "white", borderRadius: 40 }}
      >
        Search
      </Button>
    </form>
  );
};
export default Search;
