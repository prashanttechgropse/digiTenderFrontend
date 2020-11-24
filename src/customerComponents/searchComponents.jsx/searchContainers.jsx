import React, { Component } from "react";
import TenderListDisplayCard from "../../microComponents/customerTenderListDisplay";
import SearchTenderListDisplayCard from "../customerSearchComponents.jsx/customerTenderListDisplayCard";
class SearchContainer extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Search Data</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">/ Result</span>
            </div>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Search Result
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  {/*Lorem Ipsum is simply dummy typesetting industry.*/}
                </p>
              </div>
              <SearchTenderListDisplayCard />
            </div>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header p-5 text-center">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    No Data Found
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  {/*Lorem Ipsum is simply dummy typesetting industry.*/}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchContainer;
