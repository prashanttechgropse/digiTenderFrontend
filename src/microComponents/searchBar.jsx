import React, { Component } from "react";
class SearchBar extends Component {
  state = {
    searchString: "",
  };

  handleChange = (e) => {
    this.setState({ searchString: e.currentTarget.value });
  };

  handleSearch = () => {
    this.props.history.push(
      `/customer/search-result/${this.state.searchString}`
    );
    return;
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          name="query"
          className="form-control "
          placeholder="Search..."
          value={this.state.searchString}
          onChange={(e) => this.handleChange(e)}
        />
        <button className="btn" onClick={this.handleSearch}>
          <i className="fa fa-search d-none d-md-block"></i>
        </button>
      </React.Fragment>
    );
  }
}

export default SearchBar;
