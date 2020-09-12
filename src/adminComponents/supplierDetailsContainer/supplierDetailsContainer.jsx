import React, { Component } from "react";

import SupplierDetailsCards from "./supplierDetailsCards";
import SupplierDetails from "./supplierDetails";

class SupplierDetailsContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Page</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Supplier Detail
              </span>
            </div>
          </div>
        </div>
        <SupplierDetailsCards supplier={this.props.supplier} />
        <SupplierDetails
          supplier={this.props.supplier}
          tenderClicked={(tenderId) => this.props.tenderClicked(tenderId)}
        />
      </div>
    );
  }
}

export default SupplierDetailsContainer;
