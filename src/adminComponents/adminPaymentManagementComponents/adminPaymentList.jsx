import React, { Component } from "react";
import CustomerPaymentList from "./customerPaymentList";
import SupplierPaymentList from "./supplierPaymentList";
import CommissionList from "./commissionList";
class AdminPaymentList extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Page</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Payment List
              </span>
            </div>
          </div>
        </div>

        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="panel panel-primary tabs-style-2">
                <div className="tab-menu-heading">
                  <div className="tabs-menu1">
                    <ul className="nav panel-tabs main-nav-line payment-tabs">
                      <li>
                        <a
                          href="#Customer"
                          className="nav-link active"
                          data-toggle="tab"
                        >
                          Customer
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Supplier"
                          className="nav-link"
                          data-toggle="tab"
                        >
                          Supplier
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Commsion"
                          className="nav-link"
                          data-toggle="tab"
                        >
                          Commsion
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="panel-body tabs-menu-body main-content-body-right border">
                  <div className="tab-content">
                    <CustomerPaymentList />
                    <SupplierPaymentList />
                    <CommissionList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPaymentList;
