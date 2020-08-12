import React, { Component } from "react";
class SearchBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <input
          className="form-control"
          placeholder="Search for anything..."
          type="search"
        />
        <button className="btn">
          <i className="fa fa-search d-none d-md-block"></i>
        </button>
      </React.Fragment>
    );
  }
}

export default SearchBar;
