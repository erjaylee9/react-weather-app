import React from "react";
export default function Search() {
  return (
    <div class="form">
    <form>
      <div class="row">
        <div class="col-9">
          <input type="search" id="city-search" placeholder="Search for a city" class="form-control" />
        </div>
        <div class="col-3">
          <input type="submit" class="btn btn-primary w-100" value="Search" />
        </div>
      </div>
      </form>
      </div>
  );
}
