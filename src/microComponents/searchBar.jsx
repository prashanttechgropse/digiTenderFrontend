import React, { Component } from "react";
class SearchBar extends Component {
  state = {
    searchString: "",
  };

  handleChange = (e) => {
    this.setState({ searchString: e.currentTarget.value });
  };

  handleSearch = () => {
    if (this.props.match.path.includes("/customer"))
      this.props.history.push(
        `/customer/search-result/${this.state.searchString}`
      );
    if (this.props.match.path.includes("/supplier"))
      this.props.history.push(
        `/supplier/search-result/${this.state.searchString}`
      );
    if (this.props.match.path.includes("/receiver"))
      this.props.history.push(
        `/receiver/search-result/${this.state.searchString}`
      );
    if (this.props.match.path.includes("/employee"))
      this.props.history.push(
        `/employee/search-result/${this.state.searchString}`
      );
    this.setState({ searchString: "" });
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
