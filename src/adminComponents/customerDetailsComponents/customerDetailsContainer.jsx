import React, { Component } from "react";
import CustomerDetailsCards from "./customerDetailsCards";
import CustomerDetails from "./customerDetails";

class CustomerDetailsContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Page</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Customer Detail
              </span>
            </div>
          </div>
        </div>
        <CustomerDetailsCards customer={this.props.customer} />
        <CustomerDetails
          customer={this.props.customer}
          tenderClicked={(tenderId) => this.props.tenderClicked(tenderId)}
        />
      </div>
    );
  }
}

export default CustomerDetailsContainer;
