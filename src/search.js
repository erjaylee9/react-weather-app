import React from "react";
export default function Search() {
  return (
    <form>
      <input type="search" id="city-search" placeholder="Search for a city" />
      <button className="btn btn-warning" id="special-button">
        Search
      </button>
    </form>
  );
}
